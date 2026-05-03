// components/TopNews.tsx
import React from 'react';
import Link from 'next/link';

// 1. Definisi Interface untuk Type Safety
interface TopNewsProps {
  posts: any[];
}

// 2. Helper untuk Thumbnail YouTube (Konsistensi dengan VideoSection)
function getYoutubeThumb(url: string) {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  const id = (match && match[2].length === 11) ? match[2] : null;
  return id ? `https://img.youtube.com/vi/${id}/mqdefault.jpg` : null;
}

export default function TopNews({ posts = [] }: TopNewsProps) {
  // 3. Mengambil berita urutan ke 0-5 (atau sesuaikan slice jika ingin menghindari duplikat Headline)
  const topBarNews = posts.slice(0, 5);

  return (
    <div className="top-news-grid" style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(5, 1fr)', 
      gap: '15px', 
      padding: '20px 0',
      borderBottom: '1px solid #eee' 
    }}>
      {topBarNews.map((item: any) => {
        // Logika Thumbnail: Gambar Manual > YouTube Thumb > Placeholder
        const displayImage = item.image || getYoutubeThumb(item.youtubeUrl) || "https://via.placeholder.com/240x135?text=No+Image";

        return (
          <Link 
            href={`/berita/${item.slug}`} 
            key={item._id} 
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="top-news-item" style={{ cursor: 'pointer', transition: 'transform 0.2s' }}>
              <div style={{ 
                width: '100%', 
                aspectRatio: '16/9', 
                borderRadius: '8px', 
                overflow: 'hidden', 
                marginBottom: '10px',
                backgroundColor: '#f0f0f0',
                boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
              }}>
                <img 
                  src={displayImage} 
                  alt={item.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
              <h4 style={{ 
                fontSize: '13px', 
                lineHeight: '1.4', 
                margin: 0, 
                fontWeight: '700', 
                color: '#1e2f65', // Warna Biru Khas Darut Taqwa
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}>
                {item.title}
              </h4>
            </div>
          </Link>
        );
      })}

      {/* 4. Tampilan jika data kosong */}
      {topBarNews.length === 0 && (
        <p style={{ gridColumn: 'span 5', textAlign: 'center', fontSize: '13px', color: '#888', padding: '20px' }}>
          Belum ada berita terbaru yang tersedia.
        </p>
      )}

      {/* 5. Mobile Responsiveness Inline Style */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1024px) {
          .top-news-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .top-news-grid { 
            display: flex !important; 
            overflow-x: auto !important; 
            padding-bottom: 15px !important;
            gap: 15px !important;
          }
          .top-news-item { width: 200px !important; flex-shrink: 0 !important; }
        }
        .top-news-item:hover { transform: translateY(-3px); }
      `}} />
    </div>
  );
}