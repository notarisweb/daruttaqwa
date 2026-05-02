// components/VideoSection.tsx
import React from 'react';
import Link from 'next/link';
import { Play, ChevronRight } from 'lucide-react';

export default function VideoSection({ videos = [] }: { videos?: any[] }) {
  // Data default jika props kosong
  const headline = videos[0] || {
    title: "GILA! ASG EXPO 2026 SELENGKAP INI?! DARI PROPERTI SAMPAI HIBURAN",
    image: "/video-placeholder.jpg",
    source: "Media Darut Taqwa",
    time: "sejam yang lalu"
  };

  const sideVideos = videos.slice(1, 6);

  return (
    <section style={{ backgroundColor: '#1e2f65', padding: '30px', borderRadius: '20px', color: '#fff', boxShadow: '0 15px 35px rgba(30, 47, 101, 0.2)' }}>
      
      {/* HEADER SECTION - Blue & Gold Edition */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px' }}>
        <div style={{ position: 'relative' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '900', margin: 0, textTransform: 'uppercase', letterSpacing: '1.5px', color: '#fff' }}>
            KONTEN VIDEO
          </h2>
          {/* Garis Aksen Emas Khas Darut Taqwa */}
          <div style={{ position: 'absolute', bottom: '-13px', left: 0, width: '100%', height: '4px', backgroundColor: '#f9c80e', borderRadius: '2px' }}></div>
        </div>
        <Link href="/video" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '14px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '5px' }}>
          Lihat lainnya <ChevronRight size={18} />
        </Link>
      </div>

      {/* MAIN CONTENT GRID */}
      <div className="video-grid-container" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '30px' }}>
        
        {/* LEFT: FEATURED VIDEO */}
        <Link href="#" style={{ textDecoration: 'none', color: 'inherit', position: 'relative', borderRadius: '18px', overflow: 'hidden', display: 'block', height: '100%', border: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '380px' }}>
            <img 
              src={headline.image || "https://via.placeholder.com/800/450/1e2f65/ffffff?text=Video+Utama"} 
              alt={headline.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            {/* Overlay Gradient Lebih Halus */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, transparent 70%)' }}></div>
            
            {/* Play Button Premium dengan Glow */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '70px', height: '70px', backgroundColor: 'rgba(249, 200, 14, 0.9)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 25px rgba(249, 200, 14, 0.4)', transition: '0.3s' }}>
              <Play fill="#1e2f65" color="#1e2f65" size={28} />
            </div>

            {/* Text Overlay */}
            <div style={{ position: 'absolute', bottom: '35px', left: '35px', right: '35px' }}>
              <h3 style={{ fontSize: '24px', fontWeight: '900', marginBottom: '15px', lineHeight: '1.2', color: '#fff' }}>
                {headline.title}
              </h3>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', fontWeight: '600' }}>
                <span style={{ color: '#f9c80e' }}>{headline.source}</span> — {headline.time}
              </div>
            </div>
          </div>
        </Link>

        {/* RIGHT: VIDEO LIST */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {sideVideos.map((vid, i) => (
            <Link key={i} href="#" className="video-list-item" style={{ display: 'flex', gap: '18px', textDecoration: 'none', color: 'inherit', padding: '10px', borderRadius: '15px', transition: '0.3s', border: '1px solid transparent' }}>
              {/* Small Thumb */}
              <div style={{ position: 'relative', width: '150px', height: '85px', borderRadius: '10px', overflow: 'hidden', flexShrink: 0, boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}>
                <img src={vid.image || "https://via.placeholder.com/300/170/1e2f65/ffffff?text=Video"} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(30, 47, 101, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: '30px', height: '30px', backgroundColor: '#f9c80e', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Play fill="#1e2f65" color="#1e2f65" size={12} />
                  </div>
                </div>
              </div>
              {/* Title & Meta */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', justifyContent: 'center' }}>
                <h4 style={{ fontSize: '15px', fontWeight: '800', margin: 0, lineHeight: '1.4', color: '#fff' }}>
                  {vid.title}
                </h4>
                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', fontWeight: '600' }}>{vid.time || 'Baru saja'}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .video-list-item:hover {
          background-color: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.1) !important;
          transform: translateX(5px);
        }
        @media (max-width: 992px) {
          .video-grid-container {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />
    </section>
  );
}