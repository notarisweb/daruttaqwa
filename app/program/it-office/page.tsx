import Image from 'next/image';
import Link from 'next/link';

/**
 * Halaman IT & Office - Digital Administration 2026
 * Arsitektur: Next.js (Turbopack)
 * Developer: Naufal Hawari Muttawakkil
 */
export default function ITOfficePage() {
  return (
    <div className="home-wrapper" style={{ 
      backgroundColor: '#ffffff', 
      color: '#1e2f65', 
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh'
    }}>
      
      {/* --- FUTURISTIC GRID PATTERN BACKGROUND --- */}
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        zIndex: 0, 
        opacity: 0.04, 
        backgroundImage: `radial-gradient(#1a9c69 0.5px, transparent 0.5px), radial-gradient(#1a9c69 0.5px, #ffffff 0.5px)`,
        backgroundSize: '30px 30px',
        backgroundPosition: '0 0, 15px 15px',
        pointerEvents: 'none'
      }}></div>

      {/* --- HERO SECTION: MODERN OFFICE VIBE --- */}
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
              Digital Excellence 2026
            </div>
            <h1 style={{ 
              fontSize: 'clamp(2.8rem, 8vw, 4.8rem)', 
              fontWeight: 900, 
              lineHeight: 1,
              marginBottom: '32px',
              letterSpacing: '-2px',
              color: '#0f172a'
            }}>
              Manajemen <span style={{ color: '#1a9c69' }}>IT Office</span> <br /> 
              & Sistem Informasi.
            </h1>
            <p style={{ fontSize: '1.3rem', color: '#64748b', lineHeight: 1.6, maxWidth: '650px' }}>
              Membentuk tenaga ahli administrasi digital yang kompeten dalam mengelola infrastruktur IT, automasi perkantoran, dan manajemen data pesantren.
            </p>
          </div>
        </div>
      </section>

      {/* --- FEATURE GRID: CLEAN TECH CARDS --- */}
      <section style={{ paddingBottom: '100px', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '30px' 
          }}>
            {/* Card 1: Office Automation */}
            <div style={{ 
              background: '#ffffff', 
              border: '1px solid #f1f5f9', 
              borderRadius: '24px', 
              padding: '40px',
              boxShadow: '0 15px 40px rgba(0,0,0,0.03)',
              position: 'relative'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>📊</div>
              <h3 style={{ fontWeight: 800, fontSize: '1.5rem', marginBottom: '15px' }}>Automasi Kantor</h3>
              <p style={{ color: '#64748b', fontSize: '15px', lineHeight: 1.6 }}>
                Efisiensi alur kerja administrasi menggunakan platform *cloud* dan alat produktivitas modern untuk manajemen dokumen yang presisi.
              </p>
            </div>

            {/* Card 2: System Administration */}
            <div style={{ 
              background: '#ffffff', 
              border: '1px solid #f1f5f9', 
              borderRadius: '24px', 
              padding: '40px',
              boxShadow: '0 15px 40px rgba(0,0,0,0.03)'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>🖥️</div>
              <h3 style={{ fontWeight: 800, fontSize: '1.5rem', marginBottom: '15px' }}>Manajemen Sistem</h3>
              <p style={{ color: '#64748b', fontSize: '15px', lineHeight: 1.6 }}>
                Penguasaan pengelolaan server, jaringan lokal, dan pemeliharaan perangkat keras untuk menjamin stabilitas operasional pesantren.
              </p>
            </div>

            {/* Card 3: Data Security */}
            <div style={{ 
              background: '#ffffff', 
              border: '1px solid #f1f5f9', 
              borderRadius: '24px', 
              padding: '40px',
              boxShadow: '0 15px 40px rgba(0,0,0,0.03)'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>🛡️</div>
              <h3 style={{ fontWeight: 800, fontSize: '1.5rem', marginBottom: '15px' }}>Keamanan Data</h3>
              <p style={{ color: '#64748b', fontSize: '15px', lineHeight: 1.6 }}>
                Implementasi protokol keamanan informasi digital untuk melindungi aset data dan privasi seluruh ekosistem Darut Taqwa.
              </p>
            </div>
          </div>
        </div>
      </section>

     {/* --- INFO SECTION: THE TECH STACK --- */}
      <section style={{ padding: '100px 0', backgroundColor: '#f8fafc', borderTop: '1px solid #f1f5f9' }}>
        <div className="container">
          <div className="main-grid" style={{ alignItems: 'center', gap: '80px' }}>
            
            {/* Bagian Kiri: Gambar Office Modern */}
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.1)' }}>
              <Image 
                src="/images/office.jpeg" 
                alt="Fasilitas IT Office Darut Taqwa" 
                fill 
                style={{ objectFit: 'cover' }}
                unoptimized 
              />
              {/* Optional Overlay: Sedikit gradasi agar gambar menyatu dengan desain */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15, 23, 42, 0.3), transparent)' }}></div>
            </div>
            
            {/* Bagian Kanan: Teks Filosofi */}
            <div>
              <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '28px', lineHeight: 1.1 }}>
                Sinergi Teknologi <br /> & Nilai Pesantren.
              </h2>
              <p style={{ fontSize: '1.15rem', color: '#64748b', lineHeight: 1.8, marginBottom: '40px' }}>
                Di Darut Taqwa Banyumas, IT Office bukan sekadar urusan teknis. Ini adalah upaya integrasi teknologi informasi untuk mendukung kelancaran pendidikan Islam di era transformasi digital 2026.
              </p>
              <div style={{ 
                padding: '30px', 
                borderRadius: '20px', 
                background: '#ffffff', 
                borderLeft: '6px solid #1a9c69',
                boxShadow: '0 10px 30px rgba(0,0,0,0.03)'
              }}>
                <p style={{ fontWeight: 800, color: '#1e2f65', fontSize: '1.1rem' }}>
                  "Ketepatan data adalah amanah, dan teknologi adalah jembatan untuk kemaslahatan umat."
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- CTA SECTION: THE BREATHING SPACE --- */}
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
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, marginBottom: '24px', letterSpacing: '-2px' }}>
              Masa Depan Digital <br /> Dimulai di Sini.
            </h2>
            
            <p style={{ 
              opacity: 0.9, 
              fontSize: '1.25rem', 
              maxWidth: '750px', 
              margin: '0 auto 64px auto',
              lineHeight: 1.6
            }}>
              Pendaftaran santri baru Pondok Pesantren Darut Taqwa Banyumas tahun 2026 telah dibuka. Mari bergabung dalam ekosistem keilmuan modern kami.
            </p>

            <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
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
                Daftar Jadi Santri
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