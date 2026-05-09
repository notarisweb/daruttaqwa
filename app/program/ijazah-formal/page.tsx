import Image from 'next/image';
import Link from 'next/link';

/**
 * Halaman Ijazah Formal SMP - Darut Taqwa Banyumas 2026
 * Konsep: Luminous, Trusted, Futuristic, Clean
 * Developer: Naufal Hawari Muttawakkil
 */
export default function IjazahFormalPage() {
  return (
    <div className="home-wrapper" style={{ 
      backgroundColor: '#ffffff', 
      color: '#1e2f65', 
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh'
    }}>
      
      {/* --- LUMINOUS BACKGROUND ELEMENTS --- */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.02, backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231e2f65' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3C/g%3E%3C/svg%3E")`, pointerEvents: 'none' }}></div>
      <div style={{ position: 'fixed', top: '-5%', right: '-5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(26, 156, 105, 0.07) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none' }}></div>

      {/* --- HERO SECTION: LEGALITY & TRUST --- */}
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
              PROGRAM IJAZAH FORMAL SMP 2026
            </div>
            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 7vw, 4.2rem)', 
              fontWeight: 900, 
              lineHeight: 1.1,
              marginBottom: '32px',
              letterSpacing: '-2px',
              color: '#0f172a'
            }}>
              Legalisasi <span style={{ color: '#1a9c69' }}>Pendidikan</span> <br /> 
              Tingkat Menengah Pertama.
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#64748b', lineHeight: 1.7, maxWidth: '650px' }}>
              Memberikan jaminan legalitas pendidikan bagi santri Darut Taqwa Banyumas melalui pengakuan ijazah formal SMP yang diakui secara nasional untuk melanjutkan ke jenjang SMA/MA/SMK favorit.
            </p>
          </div>
        </div>
      </section>

      {/* --- FEATURE GRID: MODERN CARDS --- */}
      <section style={{ paddingBottom: '100px', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '30px' 
          }}>
            {/* Card 1: Pengakuan Nasional */}
            <div style={{ 
              background: '#ffffff', 
              border: '1px solid #f1f5f9', 
              borderRadius: '24px', 
              padding: '40px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.02)'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>✅</div>
              <h3 style={{ fontWeight: 800, fontSize: '1.4rem', marginBottom: '15px' }}>Kelulusan Resmi</h3>
              <p style={{ color: '#64748b', fontSize: '15px', lineHeight: 1.6 }}>
                Ijazah SMP diterbitkan melalui koordinasi instansi pendidikan resmi, menjamin hak santri untuk mengikuti asesmen nasional dan kelulusan formal tingkat menengah.
              </p>
            </div>

            {/* Card 2: Akses SMA/MA */}
            <div style={{ 
              background: '#ffffff', 
              border: '1px solid #f1f5f9', 
              borderRadius: '24px', 
              padding: '40px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.02)'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>🏛️</div>
              <h3 style={{ fontWeight: 800, fontSize: '1.4rem', marginBottom: '15px' }}>Gerbang SMA/MA</h3>
              <p style={{ color: '#64748b', fontSize: '15px', lineHeight: 1.6 }}>
                Memberikan akses penuh bagi santri untuk melanjutkan pendidikan ke SMA, MA, atau SMK unggulan melalui jalur prestasi maupun reguler secara luas.
              </p>
            </div>

            {/* Card 3: Integrasi Akademik */}
            <div style={{ 
              background: '#ffffff', 
              border: '1px solid #f1f5f9', 
              borderRadius: '24px', 
              padding: '40px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.02)'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>📄</div>
              <h3 style={{ fontWeight: 800, fontSize: '1.4rem', marginBottom: '15px' }}>Double Ijazah</h3>
              <p style={{ color: '#64748b', fontSize: '15px', lineHeight: 1.6 }}>
                Penyelarasan standar nilai nasional dengan penguatan literatur pesantren, memastikan santri unggul secara akademik dan spiritual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- INFO SECTION: IMAGE REPRESENTATION --- */}
      <section style={{ padding: '100px 0', backgroundColor: '#f8fafc', borderTop: '1px solid #f1f5f9' }}>
        <div className="container">
          <div className="main-grid" style={{ alignItems: 'center', gap: '80px' }}>
            
            {/* Bagian Kiri: Ilustrasi Ijazah */}
            <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.06)' }}>
              <Image 
                src="/images/ijazah.jpeg" 
                alt="Dokumen Ijazah SMP Resmi Darut Taqwa" 
                fill 
                style={{ objectFit: 'cover' }}
                unoptimized 
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15, 23, 42, 0.2), transparent)' }}></div>
            </div>
            
            {/* Bagian Kanan: Teks Filosofi */}
            <div>
              <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '28px', lineHeight: 1.1 }}>
                Legalitas SMP, <br /> Langkah Masa Depan.
              </h2>
              <p style={{ fontSize: '1.15rem', color: '#64748b', lineHeight: 1.8, marginBottom: '40px' }}>
                Kami memahami pentingnya pengakuan formal sebagai pondasi pendidikan lanjut. Ijazah SMP di Darut Taqwa menjadi bukti kompetensi santri yang diakui penuh oleh negara untuk transisi jenjang berikutnya.
              </p>
              <div style={{ 
                padding: '30px', 
                borderRadius: '20px', 
                background: '#ffffff', 
                borderLeft: '6px solid #1a9c69',
                boxShadow: '0 10px 30px rgba(0,0,0,0.03)'
              }}>
                <p style={{ fontWeight: 800, color: '#1e2f65', fontSize: '1.1rem', fontStyle: 'italic' }}>
                  "Memastikan transisi akademik santri dari tingkat SMP memiliki landasan hukum yang kuat demi kemudahan akses pendidikan menengah."
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
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
              Langkah SMP Anda di Sini.
            </h2>
            
            <p style={{ 
              opacity: 0.9, 
              fontSize: '1.25rem', 
              maxWidth: '800px', 
              margin: '0 auto 64px auto',
              lineHeight: 1.6
            }}>
              Pendaftaran santri baru tingkat SMP **Pondok Pesantren Darut Taqwa Banyumas** tahun **2026** telah dibuka. Mari bergabung dan raih legalitas masa depan bersama kami.
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
                Daftar Sekarang
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