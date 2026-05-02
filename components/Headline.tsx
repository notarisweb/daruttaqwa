// components/Headline.tsx
import { getNewsPosts } from "@/lib/sanity.query";
import Link from "next/link";

export default async function Headline() {
  // Mengambil berita terbaru dari Sanity
  const allNews = await getNewsPosts();
  const mainNews = allNews[0];
  
  // Berita terkait diambil dari index berikutnya
  const relatedNews = allNews.slice(1, 3);

  if (!mainNews) return null;

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
          src={mainNews.image || "https://via.placeholder.com/900/500?text=Darut+Taqwa"} 
          alt={mainNews.title} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
        
        {/* Overlay Gradient: Menggunakan Biru Tua Khas Darut Taqwa */}
        <div style={{ 
          position: 'absolute', 
          bottom: 0, 
          left: 0, 
          right: 0, 
          background: 'linear-gradient(to top, rgba(30,47,101,1) 0%, rgba(30,47,101,0.85) 45%, transparent 100%)',
          padding: '80px 40px 35px 40px',
          color: '#fff'
        }}>
          
          {/* Label Kategori / Tag */}
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
            Berita Utama
          </span>

          {/* 2. JUDUL UTAMA */}
          <Link href={`/artikel/${mainNews.slug}`} style={{ textDecoration: 'none', color: '#fff' }}>
            <h2 style={{ 
              fontSize: '36px', 
              fontWeight: '900', 
              margin: '10px 0 15px 0', 
              lineHeight: '1.1', 
              textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
              cursor: 'pointer',
              letterSpacing: '-0.5px'
            }}>
              {mainNews.title}
            </h2>
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '13px', opacity: 0.9, fontWeight: '500', marginBottom: '25px' }}>
            <span style={{ color: '#f9c80e', fontWeight: 'bold' }}>DT Warta</span>
            <span>•</span>
            <span>{new Date(mainNews.publishedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
          </div>

          {/* 3. AREA BERITA TERKAIT (FOOTER GRADIENT) */}
          {relatedNews.length > 0 && (
            <div style={{ 
              paddingTop: '25px', 
              borderTop: '1px solid rgba(255,255,255,0.2)', 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr', 
              gap: '40px' 
            }}>
              {relatedNews.map((related: any) => (
                <Link key={related._id} href={`/artikel/${related.slug}`} style={{ textDecoration: 'none', color: '#fff' }}>
                  <div style={{ cursor: 'pointer', group: 'true' }}>
                    <span style={{ 
                      color: '#f9c80e', 
                      fontSize: '11px', 
                      fontWeight: '800', 
                      display: 'block', 
                      marginBottom: '6px', 
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}>
                      Kabar Pesantren
                    </span>
                    <p style={{ 
                      fontSize: '15px', 
                      margin: 0, 
                      fontWeight: '700', 
                      lineHeight: '1.4', 
                      display: '-webkit-box', 
                      WebkitLineClamp: 2, 
                      WebkitBoxOrient: 'vertical', 
                      overflow: 'hidden',
                      transition: 'color 0.3s'
                    }}>
                      {related.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}