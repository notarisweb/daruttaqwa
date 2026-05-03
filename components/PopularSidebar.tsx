// components/PopularSidebar.tsx
import React from 'react';
import Link from 'next/link';

// 1. Definisi Interface untuk mendukung Data Dinamis dari Sanity
interface PopularSidebarProps {
  popularPosts: any[];
}

export default function PopularSidebar({ popularPosts = [] }: PopularSidebarProps) {
  // Jika data kosong, tidak menampilkan section untuk menjaga kebersihan layout
  if (!popularPosts || popularPosts.length === 0) return null;

  return (
    <section className="popular-sidebar" style={{ backgroundColor: '#fff', borderRadius: '15px', padding: '5px' }}>
      {/* Header Section dengan Identitas Darut Taqwa */}
      <h2 style={{ 
        fontSize: '18px', 
        color: '#1e2f65', // Blue Navy DT
        fontWeight: '900', 
        marginBottom: '20px',
        paddingLeft: '12px',
        borderLeft: '4px solid #1a9c69', // Green DT
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
      }}>
        Berita <span style={{ color: '#f9c80e' }}>Terpopuler</span>
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        {popularPosts.slice(0, 5).map((news: any, index: number) => {
          // Navigasi URL menggunakan slug kategori dinamis dari Sanity
          const categoryPath = news.categorySlug || "berita";
          
          return (
            <Link 
              href={`/${categoryPath}/${news.slug}`} 
              key={news._id} 
              className="popular-item-plain group"
              style={{ 
                display: 'flex', 
                gap: '15px', 
                padding: '15px 10px', 
                textDecoration: 'none', 
                borderBottom: index === 4 ? 'none' : '1px solid #f1f5f9',
                transition: 'all 0.2s ease'
              }}
            >
              {/* Penomoran Ranking */}
              <div className="rank-number" style={{
                fontSize: '24px',
                fontWeight: '900',
                color: index < 3 ? '#f9c80e' : '#e2e8f0', // Emas untuk Top 3
                minWidth: '25px',
                lineHeight: '1'
              }}>
                {index + 1}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <h3 className="news-title" style={{ 
                  fontSize: '14px', 
                  fontWeight: '700', 
                  color: '#1e293b', 
                  margin: 0, 
                  lineHeight: '1.4',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  transition: 'color 0.2s'
                }}>
                  {news.title}
                </h3>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', color: '#94a3b8' }}>
                  <span style={{ color: '#1a9c69', fontWeight: '800', textTransform: 'uppercase' }}>
                    {news.category || "BERITA"}
                  </span>
                  <span style={{ opacity: 0.5 }}>•</span>
                  {/* Tampilkan Views jika tersedia dari Sanity */}
                  <span>{news.views ? `${news.views} Dilihat` : new Date(news.publishedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Tombol Navigasi ke Indeks Berita */}
      <Link href="/berita" className="btn-more-plain" style={{
        display: 'block',
        textAlign: 'center',
        padding: '15px',
        marginTop: '10px',
        fontSize: '12px',
        fontWeight: '800',
        color: '#64748b',
        textDecoration: 'none',
        border: '2px solid #f1f5f9',
        borderRadius: '10px',
        transition: '0.3s'
      }}>
        LIHAT SEMUA BERITA →
      </Link>

      {/* Hover Effects dengan Inline Style Hook */}
      <style dangerouslySetInnerHTML={{ __html: `
        .popular-item-plain:hover { background-color: #f8fafc; border-radius: 12px; transform: translateX(5px); }
        .popular-item-plain:hover .news-title { color: #1a9c69 !important; }
        .btn-more-plain:hover { background-color: #1e2f65; color: #fff !important; border-color: #1e2f65; }
      `}} />
    </section>
  );
}