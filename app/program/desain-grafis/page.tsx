import Image from 'next/image';
import Link from 'next/link';

/**
 * Halaman Desain Grafis - Luminous Edition 2026
 * Developer: Naufal Hawari Muttawakkil
 */
export default function DesainGrafisPage() {
  return (
    <div className="home-wrapper" style={{ backgroundColor: '#ffffff', color: '#1e293b', overflow: 'hidden' }}>
      
      {/* --- LUMINOUS BACKGROUND DECORATION --- */}
      <div style={{ position: 'fixed', top: '-10%', right: '-5%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(26, 156, 105, 0.08) 0%, transparent 70%)', zIndex: 0 }}></div>
      <div style={{ position: 'fixed', bottom: '-10%', left: '-5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(249, 200, 14, 0.06) 0%, transparent 70%)', zIndex: 0 }}></div>

      {/* --- HERO SECTION --- */}
      <section style={{ padding: '120px 0 80px', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center',
              gap: '10px',
              padding: '6px 16px', 
              borderRadius: '99px', 
              background: '#f0fdf4', 
              border: '1px solid #dcfce7',
              color: '#166534',
              fontSize: '12px',
              fontWeight: 800,
              marginBottom: '24px',
              letterSpacing: '1px'
            }}>
              <span className="signal-indicator" style={{ backgroundColor: '#1a9c69' }}></span> 
              CREATIVE HUB DARUT TAQWA 2026
            </div>
            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', 
              fontWeight: 900, 
              color: '#1e2f65',
              lineHeight: 1.1,
              marginBottom: '32px',
              letterSpacing: '-2px'
            }}>
              Estetika <span style={{ color: '#1a9c69' }}>Visual</span> <br /> 
              Dakwah Masa Depan.
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#64748b', lineHeight: 1.6, maxWidth: '600px' }}>
              Membentuk generasi santri kreatif yang menguasai teknologi desain modern, AI, dan multimedia untuk kemandirian syiar digital.
            </p>
          </div>
        </div>
      </section>

      {/* --- FEATURE CARDS --- */}
      <section style={{ paddingBottom: '100px', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '30px' 
          }}>
            <div style={{ 
              background: '#ffffff', 
              border: '1px solid #f1f5f9', 
              borderRadius: '32px', 
              padding: '32px',
              boxShadow: '0 20px 50px rgba(0,0,0,0.04)',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{ position: 'relative', width: '100%', height: '220px', borderRadius: '24px', overflow: 'hidden', marginBottom: '24px' }}>
                <Image src="/images/santri.jpg" alt="Branding" fill style={{ objectFit: 'cover' }} unoptimized />
              </div>
              <h3 style={{ color: '#1e2f65', fontWeight: 800, fontSize: '1.5rem', marginBottom: '12px' }}>Strategic Branding</h3>
              <p style={{ color: '#64748b', fontSize: '15px', lineHeight: 1.6 }}>
                Pengembangan identitas visual yang mu'tabar, mulai dari filosofi logo hingga aplikasi branding produk profesional.
              </p>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid #f1f5f9', borderRadius: '32px', padding: '32px', boxShadow: '0 20px 50px rgba(0,0,0,0.04)' }}>
              <div style={{ position: 'relative', width: '100%', height: '220px', borderRadius: '24px', overflow: 'hidden', marginBottom: '24px' }}>
                <Image src="/images/creator.webp" alt="Multimedia" fill style={{ objectFit: 'cover', filter: 'sepia(0.2)' }} unoptimized />
              </div>
              <h3 style={{ color: '#1e2f65', fontWeight: 800, fontSize: '1.5rem', marginBottom: '12px' }}>Digital Content</h3>
              <p style={{ color: '#64748b', fontSize: '15px', lineHeight: 1.6 }}>
                Produksi konten kreatif TikTok dan aset promosi multimedia yang dioptimasi secara efektif.
              </p>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid #f1f5f9', borderRadius: '32px', padding: '32px', boxShadow: '0 20px 50px rgba(0,0,0,0.04)' }}>
              <div style={{ position: 'relative', width: '100%', height: '220px', borderRadius: '24px', overflow: 'hidden', marginBottom: '24px' }}>
                <Image src="/images/internet.jpeg" alt="AI" fill style={{ objectFit: 'cover', filter: 'brightness(1.1)' }} unoptimized />
              </div>
              <h3 style={{ color: '#1e2f65', fontWeight: 800, fontSize: '1.5rem', marginBottom: '12px' }}>AI Creative Lab</h3>
              <p style={{ color: '#64748b', fontSize: '15px', lineHeight: 1.6 }}>
                Integrasi Artificial Intelligence (AI) dalam alur kerja kreatif untuk hasil yang inovatif.
              </p>
            </div>
          </div>
        </div>
      </section>

   {/* --- CTA SECTION: ELEGAN & LEGA --- */}
<section style={{ padding: '120px 0' }}>
  <div className="container">
    <div style={{ 
      background: 'linear-gradient(135deg, #0f172a 0%, #1a9c69 100%)', 
      borderRadius: '50px', 
      padding: '100px 40px', 
      textAlign: 'center',
      color: '#ffffff',
      boxShadow: '0 40px 100px rgba(26, 156, 105, 0.25)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Efek Cahaya Halus di Latar Belakang */}
      <div style={{ position: 'absolute', top: '-100px', left: '-100px', width: '300px', height: '300px', background: 'rgba(255,255,255,0.05)', filter: 'blur(80px)', borderRadius: '50%' }}></div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <h2 style={{ 
          fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', 
          fontWeight: 900, 
          marginBottom: '32px', 
          letterSpacing: '-2px',
          lineHeight: 1.1
        }}>
          Masa Depan Cerah <br /> Dimulai di Sini.
        </h2>
        
        <p style={{ 
          opacity: 0.9, 
          fontSize: '1.25rem', 
          maxWidth: '800px', 
          margin: '0 auto 64px auto', // JARAK DITINGKATKAN: Memberikan ruang lega sebelum tombol
          lineHeight: 1.6,
        }}>
          Pendaftaran santri baru **Pondok Pesantren Darut Taqwa Banyumas** tahun **2026** telah dibuka. Pastikan putra-putri Anda mendapatkan pendidikan terbaik.
        </p>

        <div style={{ 
          display: 'flex', 
          gap: '24px', 
          justifyContent: 'center', 
          flexWrap: 'wrap',
          alignItems: 'center'
        }}>
          {/* Tombol Utama: Emas Luminous */}
          <Link href="/pendaftaran" style={{ 
            background: '#f9c80e',
            color: '#1e2f65',
            padding: '22px 56px', 
            borderRadius: '16px',
            fontWeight: 800,
            fontSize: '16px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            boxShadow: '0 15px 35px rgba(249, 200, 14, 0.4)',
            transition: 'all 0.3s ease'
          }}>
            Daftar Jadi Santri
          </Link>
          
          {/* Tombol Sekunder: Glassmorphism Modern */}
          <Link href="https://wa.me/0895324383400" style={{ // Update nomor WhatsApp terbaru
            background: 'rgba(255, 255, 255, 0.1)', 
            backdropFilter: 'blur(12px)',
            color: '#ffffff', 
            padding: '21px 55px', 
            borderRadius: '16px', 
            fontWeight: 800,
            fontSize: '16px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            transition: 'all 0.3s ease'
          }}>
            Hubungi Panitia
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}