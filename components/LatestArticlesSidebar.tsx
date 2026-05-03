// components/LatestArticlesSidebar.tsx
import Link from "next/link";
import { getArticlePosts } from "@/lib/sanity.query";

export default async function LatestArticlesSidebar() {
  // Mengambil data artikel terbaru secara dinamis dari Sanity CMS
  const articles = await getArticlePosts() || [];

  return (
    <div style={{ 
      background: '#1e2f65', // Blue Navy Khas Darut Taqwa
      borderRadius: '15px', 
      padding: '25px 20px', 
      color: '#fff',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 10px 25px rgba(30, 47, 101, 0.1)'
    }}>
      {/* HEADER */}
      <div style={{ 
        borderBottom: '2px solid #f9c80e', // Gold Aksen
        paddingBottom: '12px', 
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h4 style={{ color: '#f9c80e', fontSize: '16px', fontWeight: '900', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Artikel <span style={{ color: '#fff' }}>Terbaru</span>
        </h4>
        <span style={{ fontSize: '18px' }}>📚</span>
      </div>

      {/* LIST ARTIKEL DARI CMS */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        {articles.length > 0 ? (
          articles.map((item: any) => (
            <Link 
              href={`/artikel/${item.slug}`} 
              key={item._id} 
              className="sidebar-article-link"
              style={{ 
                textDecoration: 'none', 
                color: '#fff', 
                display: 'block',
                padding: '12px 0',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                transition: 'all 0.3s ease'
              }}
            >
              <h5 style={{ 
                fontSize: '14px', 
                fontWeight: '700', 
                lineHeight: '1.5', 
                margin: '0 0 6px 0',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}>
                {item.title}
              </h5> 
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', opacity: 0.6, fontWeight: '600' }}>
                <span style={{ color: '#f9c80e' }}>{item.category || "Artikel"}</span>
                <span>•</span>
                <span>
                  {new Date(item.publishedAt).toLocaleDateString('id-ID', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </span>
              </div>
            </Link>
          ))
        ) : (
          <p style={{ fontSize: '13px', opacity: 0.6, textAlign: 'center', padding: '20px 0' }}>
            Belum ada artikel terbaru.
          </p>
        )}
      </div>

      {/* FOOTER LINK */}
      <div style={{ marginTop: 'auto', paddingTop: '25px' }}>
        <Link href="/artikel" className="btn-sidebar-more" style={{ 
          display: 'block',
          textAlign: 'center',
          backgroundColor: 'rgba(255,255,255,0.08)',
          color: '#f9c80e',
          padding: '12px',
          borderRadius: '10px',
          fontSize: '13px',
          fontWeight: '800',
          textDecoration: 'none',
          border: '1px solid rgba(249, 200, 14, 0.2)',
          transition: '0.3s'
        }}>
          LIHAT SEMUA ARTIKEL ❯
        </Link>
      </div>

      {/* Hover Logic via CSS-in-JS bridge */}
      <style dangerouslySetInnerHTML={{ __html: `
        .sidebar-article-link:hover h5 { color: #f9c80e !important; }
        .sidebar-article-link:hover { padding-left: 5px !important; }
        .btn-sidebar-more:hover { 
          background-color: #f9c80e !important; 
          color: #1e2f65 !important; 
        }
      `}} />
    </div>
  );
}