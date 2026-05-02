// components/PopularSidebar.tsx
import { getNewsPosts } from "@/lib/sanity.query";
import Link from "next/link";

export default async function PopularSidebar() {
  const popularData = await getNewsPosts() || [];

  return (
    <section className="popular-sidebar">
      <h2 style={{ 
        fontSize: '18px', 
        color: 'var(--dt-blue)', 
        fontWeight: '900', 
        marginBottom: '10px',
        paddingLeft: '12px',
        borderLeft: '4px solid var(--dt-green)',
        textTransform: 'uppercase'
      }}>
        Berita <span style={{ color: 'var(--dt-gold)' }}>Terpopuler</span>
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {popularData.slice(0, 5).map((news: any, index: number) => (
          <Link 
            href={`/artikel/${news.slug}`} 
            key={news._id} 
            className="popular-item-plain"
          >
            <div className="rank-number">
              {index + 1}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <h3 className="news-title" style={{ 
                fontSize: '15px', 
                fontWeight: '700', 
                color: '#1a1a1a', 
                margin: 0, 
                lineHeight: '1.4',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}>
                {news.title}
              </h3>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', color: '#666' }}>
                <span style={{ color: 'var(--dt-green)', fontWeight: '800' }}>
                  {news.category || "BERITA"}
                </span>
                <span style={{ opacity: 0.5 }}>•</span>
                <span>{new Date(news.publishedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Tombol "Lihat Semua" yang sudah dibersihkan dari event handlers */}
      <Link href="/berita" className="btn-more-plain">
        LIHAT SEMUA BERITA →
      </Link>
    </section>
  );
}