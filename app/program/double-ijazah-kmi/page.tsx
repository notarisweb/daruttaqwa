import Image from 'next/image';
import Link from 'next/link';

/**
 * Halaman Double Ijazah KMI - Edisi Modern 2026
 * Dikembangkan untuk: Pondok Pesantren Darut Taqwa Banyumas
 */
export default function DoubleIjazahKMIPage() {
  return (
    <div className="home-wrapper" style={{ 
      backgroundColor: '#ffffff', 
      color: '#1e293b', 
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* --- FUTURISTIC BACKGROUND PATTERN --- */}
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        zIndex: 0, 
        opacity: 0.05, 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a9c69' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        pointerEvents: 'none'
      }}></div>

      {/* --- HERO SECTION: DUAL ACCREDITATION --- */}
      <section style={{ padding: '100px 0 60px', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center',
              padding: '6px 16px', 
              borderRadius: '12px', 
              background: 'rgba(26, 156, 105, 0.1)', 
              color: '#166534',
              fontSize: '12px',
              fontWeight: 800,
              marginBottom: '24px',
              border: '1px solid rgba(26, 156, 105, 0.2)'
            }}>
              DUAL ACCREDITATION PROGRAM 2026
            </div>
            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', 
              fontWeight: 900, 
              color: '#1e2f65',
              lineHeight: 1,
              marginBottom: '32px',
              letterSpacing: '-2px'
            }}>
              Double Ijazah <span style={{ color: '#1a9c69' }}>KMI</span> <br /> 
              & Kurikulum Nasional.
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#64748b', lineHeight: 1.6, maxWidth: '700px', margin: '0 auto' }}>
              Mempersiapkan santri Darut Taqwa Banyumas dengan kualifikasi ganda: Kedalaman ilmu agama standar KMI dan legalitas formal ijazah Nasional.
            </p>
          </div>
        </div>
      </section>

      {/* --- KEUNGGULAN: GLASS CARDS --- */}
      <section style={{ paddingBottom: '100px', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '30px' 
          }}>
            {/* Card 1: KMI Gontor Style */}
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.8)', 
              backdropFilter: 'blur(10px)',
              border: '1px solid #f1f5f9', 
              borderRadius: '32px', 
              padding: '40px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.03)'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>📖</div>
              <h3 style={{ color: '#1e2f65', fontWeight: 800, fontSize: '1.5rem', marginBottom: '12px' }}>Standar KMI</h3>
              <p style={{ color: '#64748b', fontSize: '15px', lineHeight: 1.6 }}>
                Kurikulum Kulliyatul Mu'allimin al-Islamiyyah (KMI) yang berfokus pada penguasaan bahasa Arab dan Inggris aktif serta ilmu syari'ah yang mendalam.
              </p>
            </div>

            {/* Card 2: National Education */}
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.8)', 
              backdropFilter: 'blur(10px)',
              border: '1px solid #f1f5f9', 
              borderRadius: '32px', 
              padding: '40px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.03)'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🎓</div>
              <h3 style={{ color: '#1e2f65', fontWeight: 800, fontSize: '1.5rem', marginBottom: '12px' }}>Ijazah Nasional</h3>
              <p style={{ color: '#64748b', fontSize: '15px', lineHeight: 1.6 }}>
                Santri tetap mendapatkan ijazah resmi dari Kemendikbud/Kemenag untuk melanjutkan pendidikan ke universitas umum di dalam maupun luar negeri.
              </p>
            </div>

            {/* Card 3: Global Opportunity */}
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.8)', 
              backdropFilter: 'blur(10px)',
              border: '1px solid #f1f5f9', 
              borderRadius: '32px', 
              padding: '40px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.03)'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🌍</div>
              <h3 style={{ color: '#1e2f65', fontWeight: 800, fontSize: '1.5rem', marginBottom: '12px' }}>Akses Global</h3>
              <p style={{ color: '#64748b', fontSize: '15px', lineHeight: 1.6 }}>
                Lulusan dibekali sertifikasi kompetensi yang diakui secara internasional, membuka peluang beasiswa di Timur Tengah, Eropa, dan Asia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION: CONVERSION --- */}
      <section style={{ padding: '100px 0 140px' }}>
        <div className="container">
          <div style={{ 
            background: 'linear-gradient(135deg, #1e2f65 0%, #1a9c69 100%)', 
            borderRadius: '50px', 
            padding: '80px 40px', 
            textAlign: 'center',
            color: '#ffffff',
            boxShadow: '0 30px 60px rgba(26, 156, 105, 0.2)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Light Glow Effect */}
            <div style={{ position: 'absolute', top: '-100px', left: '-100px', width: '300px', height: '300px', background: 'rgba(255,255,255,0.1)', filter: 'blur(80px)', borderRadius: '50%' }}></div>

            <h2 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '20px', letterSpacing: '-2px' }}>
              Masa Depan Cerah <br /> Dimulai di Sini.
            </h2>
            <p style={{ opacity: 0.9, fontSize: '1.2rem', marginBottom: '48px', maxWidth: '600px', margin: '0 auto' }}>
              Pendaftaran santri baru Pondok Pesantren Darut Taqwa Banyumas tahun 2026 telah dibuka. Pastikan putra-putri Anda mendapatkan pendidikan terbaik.
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/pendaftaran" style={{ 
                background: '#f9c80e',
                color: '#1e2f65',
                padding: '20px 50px', 
                borderRadius: '16px',
                fontWeight: 800,
                fontSize: '15px',
                textTransform: 'uppercase',
                boxShadow: '0 10px 30px rgba(249, 200, 14, 0.3)'
              }}>
                Daftar Jadi Santri
              </Link>
              
              <Link href="https://wa.me/0895324383400" style={{ 
                background: 'rgba(255, 255, 255, 0.1)', 
                backdropFilter: 'blur(10px)',
                color: '#ffffff', 
                padding: '20px 50px', 
                borderRadius: '16px', 
                fontWeight: 800,
                fontSize: '15px',
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