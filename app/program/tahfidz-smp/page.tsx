import Image from 'next/image';
import Link from 'next/link';

/**
 * Halaman Tahfidz SMP - Darut Taqwa Banyumas 2026
 * Arsitektur: Next.js (Turbopack)
 * Developer: Naufal Hawari Muttawakkil
 */
export default function TahfidzSMPPage() {
  return (
    <div className="home-wrapper" style={{ 
      backgroundColor: '#ffffff', 
      color: '#1e2f65', 
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh'
    }}>
      
      {/* --- FUTURISTIC DOT PATTERN BACKGROUND --- */}
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        zIndex: 0, 
        opacity: 0.04, 
        backgroundImage: `radial-gradient(#1e2f65 0.8px, transparent 0.8px)`,
        backgroundSize: '30px 30px',
        pointerEvents: 'none'
      }}></div>
      <div style={{ position: 'fixed', top: '-10%', right: '-5%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(26, 156, 105, 0.08) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none' }}></div>

      {/* --- HERO SECTION: FOUNDATIONAL TAHFIDZ --- */}
      <section style={{ padding: '120px 0 80px', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{ maxWidth: '850px' }}>
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center',
              gap: '10px',
              padding: '6px 16px', 
              borderRadius: '8px', 
              background: 'rgba(26, 156, 105, 0.1)', 
              color: '#1a9c69',
              fontSize: '11px',
              fontWeight: 800,
              marginBottom: '24px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              border: '1px solid rgba(26, 156, 105, 0.2)'
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#1a9c69' }}></span>
              PROGRAM UNGGULAN SMP 2026
            </div>
            <h1 style={{ 
              fontSize: 'clamp(2.8rem, 8vw, 4.5rem)', 
              fontWeight: 900, 
              lineHeight: 1.05,
              marginBottom: '32px',
              letterSpacing: '-2px',
              color: '#0f172a'
            }}>
              Tahfidz Qur'an <br /> 
              <span style={{ color: '#1a9c69' }}>Masa Keemasan</span> SMP.
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#64748b', lineHeight: 1.6, maxWidth: '700px' }}>
              Membentuk pondasi spiritual santri tingkat menengah pertama di Darut Taqwa Banyumas melalui metode tahfidz yang menyenangkan, terukur, dan mutqin.
            </p>
          </div>
        </div>
      </section>

      {/* --- CORE FEATURES: BRIGHT CARDS --- */}
      <section style={{ paddingBottom: '100px', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '30px' 
          }}>
            {/* Card 1: Tahsin Berjenjang */}
            <div style={{ background: '#ffffff', border: '1px solid #f1f5f9', borderRadius: '24px', padding: '40px', boxShadow: '0 20px 40px rgba(0,0,0,0.03)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>✨</div>
              <h3 style={{ color: '#1e2f65', fontWeight: 800, fontSize: '1.5rem', marginBottom: '15px' }}>Tahsinul Qiro'ah</h3>
              <p style={{ color: '#64748b', fontSize: '15px', lineHeight: 1.6 }}>
                Perbaikan bacaan Al-Qur'an secara intensif untuk memastikan santri memiliki tajwid yang benar sebelum memulai proses hafalan.
              </p>
            </div>

            {/* Card 2: Metode Setoran Cerah */}
            <div style={{ background: '#ffffff', border: '1px solid #f1f5f9', borderRadius: '24px', padding: '40px', boxShadow: '0 20px 40px rgba(0,0,0,0.03)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>📢</div>
              <h3 style={{ color: '#1e2f65', fontWeight: 800, fontSize: '1.5rem', marginBottom: '15px' }}>Sistem Talaqqi</h3>
              <p style={{ color: '#64748b', fontSize: '15px', lineHeight: 1.6 }}>
                Metode tatap muka langsung dengan pembimbing berpengalaman untuk menjaga kualitas setiap ayat yang dihafalkan oleh santri.
              </p>
            </div>

            {/* Card 3: Integrasi Kurikulum */}
            <div style={{ background: '#ffffff', border: '1px solid #f1f5f9', borderRadius: '24px', padding: '40px', boxShadow: '0 20px 40px rgba(0,0,0,0.03)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🎓</div>
              <h3 style={{ color: '#1e2f65', fontWeight: 800, fontSize: '1.5rem', marginBottom: '15px' }}>Keseimbangan Akademik</h3>
              <p style={{ color: '#64748b', fontSize: '15px', lineHeight: 1.6 }}>
                Penyelarasan jadwal tahfidz dengan kurikulum SMP Nasional agar santri unggul dalam hafalan dan kompetensi akademik umum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PHILOSOPHY SECTION: IMAGE & QUOTE --- */}
      <section style={{ padding: '100px 0', backgroundColor: '#f8fafc', borderTop: '1px solid #f1f5f9' }}>
        <div className="container">
          <div className="main-grid" style={{ alignItems: 'center', gap: '80px' }}>
            
            <div style={{ position: 'relative', width: '100%', aspectRatio: '1/1', borderRadius: '40px', overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.08)' }}>
              <Image 
                src="/images/tahfidz2.jpeg" 
                alt="Kegiatan Tahfidz SMP Darut Taqwa" 
                fill 
                style={{ objectFit: 'cover' }}
                unoptimized 
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15, 23, 42, 0.4), transparent)' }}></div>
            </div>
            
            <div>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '28px', lineHeight: 1.1, color: '#0f172a' }}>
                Menanam Benih <br /> Cinta Al-Qur'an.
              </h2>
              <p style={{ fontSize: '1.15rem', color: '#64748b', lineHeight: 1.8, marginBottom: '40px' }}>
                Program Tahfidz SMP di Darut Taqwa Banyumas dirancang untuk membangun kebiasaan mulia sejak dini. Di usia ini, santri memiliki daya ingat yang kuat dan semangat belajar yang tinggi untuk menjaga Kalamullah.
              </p>
              <div style={{ 
                padding: '30px', 
                borderRadius: '20px', 
                background: '#ffffff', 
                borderLeft: '6px solid #1a9c69',
                boxShadow: '0 10px 30px rgba(0,0,0,0.03)'
              }}>
                <p style={{ fontWeight: 800, color: '#1e2f65', fontSize: '1.1rem', fontStyle: 'italic' }}>
                  "Hafalan Al-Qur'an di waktu muda laksana mengukir di atas batu, abadi dan tak lekang oleh waktu."
                </p>
              </div>
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
            <h2 style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', 
              fontWeight: 900, 
              marginBottom: '32px', 
              letterSpacing: '-2px',
              lineHeight: 1.1
            }}>
              Mulai Perjalanan <br /> Hafidz Cilik Anda.
            </h2>
            
            <p style={{ 
              opacity: 0.9, 
              fontSize: '1.25rem', 
              maxWidth: '800px', 
              margin: '0 auto 64px auto', 
              lineHeight: 1.6,
            }}>
              Pendaftaran santri baru program **Tahfidz SMP** Pondok Pesantren Darut Taqwa Banyumas tahun **2026** telah dibuka secara resmi.
            </p>

            <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
              <Link href="/pendaftaran" style={{ 
                background: '#f9c80e',
                color: '#1e2f65',
                padding: '22px 56px', 
                borderRadius: '16px',
                fontWeight: 800,
                fontSize: '16px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                boxShadow: '0 15px 35px rgba(249, 200, 14, 0.4)'
              }}>
                Daftar SMP Sekarang
              </Link>
              
              <Link href="https://wa.me/0895324383400" style={{ 
                background: 'rgba(255, 255, 255, 0.1)', 
                backdropFilter: 'blur(12px)',
                color: '#ffffff', 
                padding: '21px 55px', 
                borderRadius: '16px', 
                fontWeight: 800,
                fontSize: '16px', 
                textTransform: 'uppercase',
                letterSpacing: '1px',
                border: '1px solid rgba(255, 255, 255, 0.3)'
              }}>
                Hubungi Panitia
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}