import React from 'react';
import Link from 'next/link';

interface HeadlineProps {
  posts: any[];
}

function getYoutubeThumb(url: string) {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  const id = (match && match[2].length === 11) ? match[2] : null;
  return id ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg` : null;
}

export default function Headline({ posts = [] }: HeadlineProps) {
  const mainNews = posts[0];
  const relatedNews = posts.slice(1, 3);

  if (!mainNews) return (
    <div style={{ height: '520px', backgroundColor: '#f1f5f9', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <p style={{ color: '#64748b' }}>Belum ada konten utama tersedia.</p>
    </div>
  );

  const mainDisplayImage = mainNews.image || getYoutubeThumb(mainNews.youtubeUrl) || "https://via.placeholder.com/900/500?text=Darut+Taqwa";

  return (
    <section className="headline-section" style={{ 
      position: 'relative', 
      width: '100%', 
      borderRadius: '16px', 
      overflow: 'hidden', 
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
      backgroundColor: '#1e2f65',
      display: 'flex',
      flexDirection: 'column'
    }}>
      
      <div style={{ width: '100%', height: '100%', position: 'relative', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <img 
          src={mainDisplayImage} 
          alt={mainNews.title} 
          style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} 
        />
        
        {/* Overlay Gradient: Lebih pekat di bawah untuk keterbacaan */}
        <div className="headline-overlay" style={{ 
          position: 'relative',
          zIndex: 1,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          background: 'linear-gradient(to top, rgba(30,47,101,1) 0%, rgba(30,47,101,0.7) 50%, transparent 100%)',
          color: '#fff'
        }}>
          
          {/* Label & Judul Utama */}
          <div style={{ marginBottom: '25px' }}>
            <span style={{
              background: '#1a9c69',
              color: '#fff',
              padding: '4px 12px',
              borderRadius: '6px',
              fontSize: '10px',
              fontWeight: '800',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '12px',
              display: 'inline-block'
            }}>
              {mainNews.category || "Berita Utama"}
            </span>

            <Link 
              href={`/${mainNews.categorySlug || 'berita'}/${mainNews.slug}`} 
              style={{ textDecoration: 'none', color: '#fff' }}
            >
              <h2 className="main-title" style={{ 
                fontWeight: '900', 
                margin: '10px 0', 
                lineHeight: '1.1', 
                textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                cursor: 'pointer'
              }}>
                {mainNews.title}
              </h2>
            </Link>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '12px', opacity: 0.9 }}>
              <span style={{ color: '#f9c80e', fontWeight: '700' }}>Media Darut Taqwa</span>
              <span style={{ opacity: 0.5 }}>•</span>
              <span>{new Date(mainNews.publishedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            </div>
          </div>

          {/* Area Berita Terkait */}
          {relatedNews.length > 0 && (
            <div className="related-news-grid" style={{ 
              paddingTop: '20px', 
              borderTop: '1px solid rgba(255,255,255,0.15)', 
              display: 'grid', 
              gap: '20px' 
            }}>
              {relatedNews.map((related: any) => {
                const relatedThumb = related.image || getYoutubeThumb(related.youtubeUrl);
                return (
                  <Link 
                    key={related._id} 
                    href={`/${related.categorySlug || 'berita'}/${related.slug}`} 
                    style={{ textDecoration: 'none', color: '#fff' }}
                  >
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }} className="related-card">
                      {relatedThumb && (
                        <div style={{ width: '60px', height: '40px', borderRadius: '6px', overflow: 'hidden', flexShrink: 0 }}>
                          <img src={relatedThumb} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
                        </div>
                      )}
                      <p style={{ 
                        fontSize: '13px', 
                        margin: 0, 
                        fontWeight: '600', 
                        lineHeight: '1.3', 
                        display: '-webkit-box', 
                        WebkitLineClamp: 2, 
                        WebkitBoxOrient: 'vertical', 
                        overflow: 'hidden' 
                      }}>
                        {related.title}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .headline-section { height: 520px; }
        .headline-overlay { padding: 80px 40px 40px 40px; }
        .main-title { fontSize: 36px; transition: color 0.3s; }
        .main-title:hover { color: #f9c80e !important; }
        .related-news-grid { grid-template-columns: 1fr 1fr; }
        .related-card:hover p { color: #f9c80e; transition: 0.3s; }

        @media (max-width: 768px) {
          .headline-section { height: auto !important; min-height: 480px; }
          .headline-overlay { padding: 60px 20px 25px 20px !important; }
          .main-title { fontSize: 24px !important; }
          .related-news-grid { 
            grid-template-columns: 1fr !important; 
            gap: 15px !important;
            padding-top: 15px !important;
          }
          .related-card p { fontSize: 12px !important; }
        }
      `}} />
    </section>
  );
}