// components/Headline.tsx
import React from 'react';
import Link from 'next/link';

// 1. Definisi Interface untuk Type Safety
interface HeadlineProps {
  posts: any[];
}

// 2. Helper untuk Thumbnail YouTube (Konsistensi dengan VideoSection)
function getYoutubeThumb(url: string) {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  const id = (match && match[2].length === 11) ? match[2] : null;
  return id ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg` : null;
}

export default function Headline({ posts = [] }: HeadlineProps) {
  // Mengambil berita utama dan berita terkait dari props
  const mainNews = posts[0];
  const relatedNews = posts.slice(1, 3);

  if (!mainNews) return (
    <div style={{ height: '520px', backgroundColor: '#f1f5f9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <p style={{ color: '#64748b' }}>Belum ada konten utama tersedia.</p>
    </div>
  );

  // Gambar Utama: Manual > YouTube Thumb > Placeholder
  const mainDisplayImage = mainNews.image || getYoutubeThumb(mainNews.youtubeUrl) || "https://via.placeholder.com/900/500?text=Darut+Taqwa";

  return (
    <section style={{ 
      position: 'relative', 
      width: '100%', 
      borderRadius: '12px', 
      overflow: 'hidden', 
      boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
      height: '520px',
      backgroundColor: '#1e2f65' 
    }}>
      
      {/* 1. AREA UTAMA: GAMBAR DAN GRADIENT */}
      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        <img 
          src={mainDisplayImage} 
          alt={mainNews.title} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
        
        {/* Overlay Gradient: Biru Tua Khas Darut Taqwa */}
        <div style={{ 
          position: 'absolute', 
          bottom: 0, 
          left: 0, 
          right: 0, 
          background: 'linear-gradient(to top, rgba(30,47,101,1) 0%, rgba(30,47,101,0.85) 45%, transparent 100%)',
          padding: '80px 40px 35px 40px',
          color: '#fff'
        }}>
          
          {/* Label Kategori */}
          <span style={{
            background: '#1a9c69',
            color: '#fff',
            padding: '4px 12px',
            borderRadius: '4px',
            fontSize: '11px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            marginBottom: '15px',
            display: 'inline-block'
          }}>
            {mainNews.category || "Berita Utama"}
          </span>

          {/* 2. JUDUL UTAMA */}
          <Link 
            href={`/${mainNews.categorySlug || 'berita'}/${mainNews.slug}`} 
            style={{ textDecoration: 'none', color: '#fff' }}
          >
            <h2 style={{ 
              fontSize: '36px', 
              fontWeight: '900', 
              margin: '10px 0 15px 0', 
              lineHeight: '1.1', 
              textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
              cursor: 'pointer',
              letterSpacing: '-0.5px',
              transition: 'color 0.2s'
            }} className="headline-title">
              {mainNews.title}
            </h2>
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '13px', opacity: 0.9, fontWeight: '500', marginBottom: '25px' }}>
            <span style={{ color: '#f9c80e', fontWeight: 'bold' }}>Media Darut Taqwa</span>
            <span>•</span>
            <span>{new Date(mainNews.publishedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
          </div>

          {/* 3. AREA BERITA TERKAIT */}
          {relatedNews.length > 0 && (
            <div style={{ 
              paddingTop: '25px', 
              borderTop: '1px solid rgba(255,255,255,0.2)', 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr', 
              gap: '40px' 
            }}>
              {relatedNews.map((related: any) => {
                const relatedThumb = related.image || getYoutubeThumb(related.youtubeUrl);
                return (
                  <Link 
                    key={related._id} 
                    href={`/${related.categorySlug || 'berita'}/${related.slug}`} 
                    style={{ textDecoration: 'none', color: '#fff' }}
                  >
                    <div style={{ cursor: 'pointer', display: 'flex', gap: '15px', alignItems: 'center' }} className="group">
                      {relatedThumb && (
                        <div style={{ width: '80px', height: '50px', borderRadius: '4px', overflow: 'hidden', flexShrink: 0 }}>
                          <img src={relatedThumb} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
                        </div>
                      )}
                      <div>
                        <span style={{ 
                          color: '#f9c80e', 
                          fontSize: '10px', 
                          fontWeight: '800', 
                          display: 'block', 
                          marginBottom: '4px', 
                          textTransform: 'uppercase'
                        }}>
                          {related.category || "Kabar Pesantren"}
                        </span>
                        <p style={{ 
                          fontSize: '14px', 
                          margin: 0, 
                          fontWeight: '700', 
                          lineHeight: '1.3', 
                          display: '-webkit-box', 
                          WebkitLineClamp: 2, 
                          WebkitBoxOrient: 'vertical', 
                          overflow: 'hidden'
                        }} className="group-hover:text-[#f9c80e]">
                          {related.title}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .headline-title:hover { color: #f9c80e !important; }
        .group:hover p { color: #f9c80e !important; }
        @media (max-width: 768px) {
          section { height: auto !important; }
          .headline-title { fontSize: 24px !important; }
          div[style*="gridTemplateColumns: '1fr 1fr'"] { 
            grid-template-columns: 1fr !important; 
            gap: 20px !important;
          }
        }
      `}} />
    </section>
  );
}