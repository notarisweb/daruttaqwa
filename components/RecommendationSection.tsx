// components/RecommendationSection.tsx
import React from 'react';
import Link from 'next/link';
import { formatDistance } from 'date-fns';
import { id } from 'date-fns/locale';

interface RecommendationSectionProps {
  posts: any[];
}

// Helper untuk deteksi Thumbnail YouTube (Konsistensi Global)
function getYoutubeThumb(url: string) {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  const id = (match && match[2].length === 11) ? match[2] : null;
  return id ? `https://img.youtube.com/vi/${id}/mqdefault.jpg` : null;
}

export default function RecommendationSection({ posts = [] }: RecommendationSectionProps) {
  // Mengambil 8 data secara acak dari data yang sudah ada di server
  const recommendedData = [...posts]
    .sort(() => Math.random() - 0.5)
    .slice(0, 8);

  if (recommendedData.length === 0) return null;

  return (
    <section style={{ marginTop: '40px', marginBottom: '40px' }}>
      {/* Header Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ 
          fontSize: '22px', 
          color: '#1e2f65', 
          fontWeight: '900', 
          margin: 0,
          textTransform: 'uppercase'
        }}>
          Rekomendasi <span style={{ color: '#f9c80e' }}>Untuk Anda</span>
        </h2>
        <Link href="/berita" style={{ fontSize: '13px', color: '#64748b', fontWeight: '800', textDecoration: 'none' }}>
          SELENGKAPNYA ❯
        </Link>
      </div>

      {/* Grid 4 Kolom */}
      <div className="rec-grid">
        {recommendedData.map((item: any) => {
          const displayImage = item.image || getYoutubeThumb(item.youtubeUrl) || "/logo.png";
          const categoryPath = item.categorySlug || "berita";

          return (
            <Link 
              href={`/${categoryPath}/${item.slug}`} 
              key={item._id} 
              className="recommendation-card"
            >
              {/* Thumbnail Container */}
              <div className="thumb-container">
                <img 
                  src={displayImage} 
                  alt={item.title} 
                  className="rec-img"
                />
                {item.youtubeUrl && !item.image && (
                   <div className="play-overlay">
                      <div className="play-icon"></div>
                   </div>
                )}
              </div>

              {/* Judul Berita */}
              <h3 className="rec-title">
                {item.title}
              </h3>

              {/* Meta Data */}
              <p className="rec-meta">
                {item.publishedAt ? formatDistance(new Date(item.publishedAt), new Date(), { addSuffix: true, locale: id }) : 'Baru saja'}
              </p>
            </Link>
          );
        })}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .rec-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
        }
        .recommendation-card {
          text-decoration: none;
          color: inherit;
          display: block;
          transition: transform 0.3s ease;
        }
        .thumb-container {
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 12px;
          background-color: #f1f5f9;
          position: relative;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }
        .rec-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .rec-title {
          fontSize: 15px;
          font-weight: 700;
          line-height: 1.4;
          margin: 0 0 8px 0;
          color: #1e293b;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          transition: color 0.3s;
        }
        .rec-meta {
          font-size: 12px;
          color: #94a3b8;
          margin: 0;
          font-weight: 600;
        }
        .recommendation-card:hover .rec-img {
          transform: scale(1.1);
        }
        .recommendation-card:hover .rec-title {
          color: #1a9c69;
        }
        .play-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .play-icon {
          width: 0; height: 0; 
          border-top: 8px solid transparent;
          border-bottom: 8px solid transparent;
          border-left: 12px solid white;
        }

        @media (max-width: 1024px) {
          .rec-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 768px) {
          .rec-grid { grid-template-columns: repeat(2, 1fr); gap: 15px; }
          .rec-title { font-size: 14px; }
        }
        @media (max-width: 480px) {
          .rec-grid { grid-template-columns: 1fr; }
        }
      `}} />
    </section>
  );
}