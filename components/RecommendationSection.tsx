"use client";

import { getAllPosts } from "@/lib/sanity.query";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function RecommendationSection() {
  const [recommendedData, setRecommendedData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const allData = await getAllPosts();
        if (allData && allData.length > 0) {
          // Mengambil 8 data secara acak untuk grid 4x2
          const shuffled = [...allData]
            .sort(() => Math.random() - 0.5)
            .slice(0, 8);
          setRecommendedData(shuffled);
        }
      } catch (error) {
        console.error("Gagal mengambil data rekomendasi:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <div style={{ minHeight: '300px', padding: '20px', color: '#888' }}>Memuat rekomendasi...</div>;
  if (!loading && recommendedData.length === 0) return null;

  return (
    <section style={{ marginTop: '40px', marginBottom: '40px' }}>
      {/* Header Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ 
          fontSize: '20px', 
          color: 'var(--dt-blue)', 
          fontWeight: '900', 
          margin: 0,
          textTransform: 'uppercase'
        }}>
          Rekomendasi <span style={{ color: 'var(--dt-gold)' }}>Untuk Anda</span>
        </h2>
        <Link href="/berita" style={{ fontSize: '12px', color: '#666', fontWeight: '700', textDecoration: 'none' }}>
          SELENGKAPNYA ❯
        </Link>
      </div>

      {/* Grid 4 Kolom sesuai Gambar */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(4, 1fr)', 
        gap: '20px' 
      }}>
        {recommendedData.map((item: any) => (
          <Link 
            href={`/artikel/${item.slug}`} 
            key={item._id} 
            style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
            className="recommendation-card"
          >
            {/* Thumbnail */}
            <div style={{ 
              width: '100%', 
              aspectRatio: '16 / 9', 
              borderRadius: '10px', 
              overflow: 'hidden', 
              marginBottom: '12px', 
              backgroundColor: '#eee',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
            }}>
              <img 
                src={item.image || "https://via.placeholder.com/400/225?text=Darut+Taqwa"} 
                alt={item.title} 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease'
                }} 
                className="rec-img"
              />
            </div>

            {/* Judul Berita */}
            <h3 style={{ 
              fontSize: '15px', 
              fontWeight: '700', 
              lineHeight: '1.3', 
              margin: '0 0 6px 0', 
              color: '#1a1a1a',
              display: '-webkit-box', 
              WebkitLineClamp: 2, 
              WebkitBoxOrient: 'vertical', 
              overflow: 'hidden'
            }}>
              {item.title}
            </h3>

            {/* Meta Data (Waktu) */}
            <p style={{ 
              fontSize: '12px', 
              color: '#888', 
              margin: 0 
            }}>
              {/* Logika waktu statis atau dinamis sesuai data Sanity-mu */}
              1 jam lalu
            </p>
          </Link>
        ))}
      </div>

      <style jsx>{`
        .recommendation-card:hover .rec-img {
          transform: scale(1.05);
        }
        .recommendation-card:hover h3 {
          color: var(--dt-green) !important;
        }
        @media (max-width: 992px) {
          div[style*="gridTemplateColumns: repeat(4, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          div[style*="gridTemplateColumns: repeat(4, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}