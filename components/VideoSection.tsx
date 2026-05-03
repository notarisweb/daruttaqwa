// components/VideoSection.tsx
import React from 'react';
import Link from 'next/link';
import { Play, ChevronRight } from 'lucide-react';
import { formatDistance } from 'date-fns';
import { id } from 'date-fns/locale';

function getYoutubeID(url: string) {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

function getYoutubeThumb(url: string) {
  const id = getYoutubeID(url);
  return id ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg` : null;
}

export default function VideoSection({ videos = [] }: { videos: any[] }) {
  // Jika data belum ada, jangan rendder apa-apa atau tampilkan skeleton
  if (!videos || videos.length === 0) return null;

  const headline = videos[0];
  const sideVideos = videos.slice(1, 6);

  // Helper untuk format waktu relatif (misal: "2 hari yang lalu")
  const formatTime = (date: string) => {
    try {
      return formatDistance(new Date(date), new Date(), { addSuffix: true, locale: id });
    } catch (e) {
      return "Baru saja";
    }
  };

  const headlineThumb = headline.image || getYoutubeThumb(headline.youtubeUrl) || "/logo.png";

  return (
    <section style={{ backgroundColor: '#1e2f65', padding: '30px', borderRadius: '20px', color: '#fff' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px' }}>
        <div style={{ position: 'relative' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '900', margin: 0, textTransform: 'uppercase', color: '#fff' }}>KONTEN VIDEO</h2>
          <div style={{ position: 'absolute', bottom: '-13px', left: 0, width: '100%', height: '4px', backgroundColor: '#f9c80e', borderRadius: '2px' }}></div>
        </div>
        <Link href="/category/video" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '14px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '5px' }}>
          Lihat lainnya <ChevronRight size={18} />
        </Link>
      </div>

      <div className="video-grid-container" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '30px' }}>
        {/* HEADLINE VIDEO */}
        <Link 
          href={`/${headline.category}/${headline.slug}`} 
          style={{ textDecoration: 'none', color: 'inherit', position: 'relative', borderRadius: '18px', overflow: 'hidden', display: 'block' }}
        >
          <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '380px' }}>
            <img src={headlineThumb} alt={headline.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, transparent 70%)' }}></div>
            <div className="play-button" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '70px', height: '70px', backgroundColor: 'rgba(249, 200, 14, 0.9)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Play fill="#1e2f65" color="#1e2f65" size={28} />
            </div>
            <div style={{ position: 'absolute', bottom: '35px', left: '35px', right: '35px' }}>
              <h3 style={{ fontSize: '24px', fontWeight: '900', marginBottom: '15px', lineHeight: '1.2' }}>{headline.title}</h3>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', fontWeight: '600' }}>
                <span style={{ color: '#f9c80e' }}>{headline.source}</span> — {formatTime(headline.time)}
              </div>
            </div>
          </div>
        </Link>

        {/* SIDE VIDEOS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {sideVideos.map((vid) => (
            <Link key={vid._id} href={`/${vid.category}/${vid.slug}`} className="video-list-item" style={{ display: 'flex', gap: '18px', textDecoration: 'none', color: 'inherit', padding: '10px' }}>
              <div style={{ position: 'relative', width: '150px', height: '85px', borderRadius: '10px', overflow: 'hidden', flexShrink: 0 }}>
                <img src={vid.image || getYoutubeThumb(vid.youtubeUrl)} alt={vid.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(30, 47, 101, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: '30px', height: '30px', backgroundColor: '#f9c80e', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Play fill="#1e2f65" color="#1e2f65" size={12} />
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', justifyContent: 'center' }}>
                <h4 style={{ fontSize: '15px', fontWeight: '800', margin: 0, color: '#fff' }}>{vid.title}</h4>
                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>{formatTime(vid.time)}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* ... style ... */}
    </section>
  );
}