import Image from 'next/image';
import Link from 'next/link';

/**
 * Halaman SMP Bilingual - Darut Taqwa Banyumas 2026
 * Konsep: Bright, Futuristic, Clean, Global Education
 * Developer: Naufal Hawari Muttawakkil
 */
export default function SMPBilingualPage() {
  return (
    <div className="home-wrapper" style={{ 
      backgroundColor: '#ffffff', 
      color: '#1e2f65', 
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh'
    }}>
      
      {/* --- LUMINOUS & PATTERN BACKGROUND --- */}
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        zIndex: 0, 
        opacity: 0.03, 
        backgroundImage: `radial-gradient(#1e2f65 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
        pointerEvents: 'none'
      }}></div>
      <div style={{ position: 'fixed', top: '-10%', right: '-5%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(26, 156, 105, 0.08) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none' }}></div>
      <div style={{ position: 'fixed', bottom: '10%', left: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(56, 189, 248, 0.06) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none' }}></div>

      {/* --- HERO SECTION: GLOBAL VISION --- */}
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
              fontSize: '12px',
              fontWeight: 800,
              marginBottom: '24px',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              border: '1px solid rgba(26, 156, 105, 0.2)'
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#1a9c69' }}></span>
              SMP BILINGUAL DARUT TAQWA 2026
            </div>
            <h1 style={{ 
              fontSize: 'clamp(2.8rem, 8vw, 4.8rem)', 
              fontWeight: 900, 
              lineHeight: 1.05,
              marginBottom: '32px',
              letterSpacing: '-2px',
              color: '#0f172a'
            }}>
              Generasi <span style={{ color: '#1a9c69' }}>Global</span> <br /> 
              Berakhlak Qur'ani.
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#64748b', lineHeight: 1.6, maxWidth: '700px' }}>
              Memadukan kurikulum pendidikan nasional dengan program penguasaan bahasa Arab dan Inggris aktif, mencetak pemimpin masa depan yang berwawasan internasional dan berakar pada tradisi pesantren.
            </p>
          </div>
        </div>
      </section>

      {/* --- FEATURE GRID: CLEAN EDUCATION CARDS --- */}
      <section style={{ paddingBottom: '100px', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '30px' 
          }}>
            {/* Card 1: Penguasaan Dua Bahasa */}
            <div style={{ 
              background: '#ffffff', 
              border: '1px solid #f1f5f9', 
              borderRadius: '24px', 
              padding: '40px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.03)',
              transition: 'transform 0.3s ease, boxShadow 0.3s ease'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🌐</div>
              <h3 style={{ color: '#1e2f65', fontWeight: 800, fontSize: '1.5rem', marginBottom: '15px' }}>Bilingual Environment</h3>
              <p style={{ color: '#64748b', fontSize: '15px', lineHeight: 1.6 }}>
                Penerapan kawasan wajib berbahasa (Arab & Inggris) dalam keseharian santri untuk melatih kecakapan komunikasi aktif secara natural.
              </p>
            </div>

            {/* Card 2: Kurikulum Terintegrasi */}
            <div style={{ 
              background: '#ffffff', 
              border: '1px solid #f1f5f9', 
              borderRadius: '24px', 
              padding: '40px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.03)'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>📚</div>
              <h3 style={{ color: '#1e2f65', fontWeight: 800, fontSize: '1.5rem', marginBottom: '15px' }}>Integrasi Kurikulum</h3>
              <p style={{ color: '#64748b', fontSize: '15px', lineHeight: 1.6 }}>
                Sinergi antara kurikulum Kemendikbud untuk kesiapan akademik, dan kurikulum kepesantrenan (KMI) untuk kedalaman ilmu syari'ah.
              </p>
            </div>

            {/* Card 3: Character Building */}
            <div style={{ 
              background: '#ffffff', 
              border: '1px solid #f1f5f9', 
              borderRadius: '24px', 
              padding: '40px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.03)'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🌱</div>
              <h3 style={{ color: '#1e2f65', fontWeight: 800, fontSize: '1.5rem', marginBottom: '15px' }}>Character Building</h3>
              <p style={{ color: '#64748b', fontSize: '15px', lineHeight: 1.6 }}>
                Pembinaan karakter Islami yang kuat melalui penanaman adab, kedisiplinan, dan kepemimpinan dalam asrama 24 jam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- INFO SECTION: PHILOSOPHY IMAGE + TEXT --- */}
      <section style={{ padding: '100px 0', backgroundColor: '#f8fafc', borderTop: '1px solid #f1f5f9' }}>
        <div className="container">
          <div className="main-grid" style={{ alignItems: 'center', gap: '80px' }}>
            
            {/* Bagian Kiri: Gambar Representasi SMP */}
            <div style={{ position: 'relative', width: '100%', aspectRatio: '4/5', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.08)' }}>
              {/* Pastikan gambar /images/smp-bilingual.jpeg tersedia di folder public kamu */}
              <Image 
                src="/images/bilingual.jpeg" 
                alt="Kegiatan Belajar SMP Bilingual Darut Taqwa" 
                fill 
                style={{ objectFit: 'cover' }}
                unoptimized 
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15, 23, 42, 0.4), transparent)' }}></div>
            </div>
            
            {/* Bagian Kanan: Teks Filosofi */}
            <div>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '28px', lineHeight: 1.1, color: '#0f172a' }}>
                Bahasa Sebagai <br /> Jendela Dunia & Akhirat.
              </h2>
              <p style={{ fontSize: '1.15rem', color: '#64748b', lineHeight: 1.8, marginBottom: '40px' }}>
                Fase usia SMP adalah masa emas untuk menyerap bahasa dan membentuk pola pikir. Program Bilingual kami dirancang agar santri tidak canggung bersaing di kancah global, sekaligus fasih mendaras kitab kuning peninggalan para ulama.
              </p>
              <div style={{ 
                padding: '30px', 
                borderRadius: '20px', 
                background: '#ffffff', 
                borderLeft: '6px solid #1a9c69',
                boxShadow: '0 10px 30px rgba(0,0,0,0.03)'
              }}>
                <p style={{ fontWeight: 800, color: '#1e2f65', fontSize: '1.1rem', fontStyle: 'italic' }}>
                  "Menguasai bahasa asing adalah kunci memahami peradaban dunia, dengan iman dan adab sebagai kompas utamanya."
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
                Siapkan Langkah Emas <br /> Putra-Putri Anda.
              </h2>
              
              <p style={{ 
                opacity: 0.9, 
                fontSize: '1.25rem', 
                maxWidth: '800px', 
                margin: '0 auto 64px auto', /* Jarak yang luas agar lega */
                lineHeight: 1.6,
              }}>
                Pendaftaran santri baru tingkat SMP **Pondok Pesantren Darut Taqwa Banyumas** tahun **2026** telah dibuka secara resmi. Berikan mereka pendidikan terbaik yang seimbang.
              </p>

              <div style={{ 
                display: 'flex', 
                gap: '24px', 
                justifyContent: 'center', 
                flexWrap: 'wrap',
                alignItems: 'center'
              }}>
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
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  transition: 'all 0.3s ease'
                }}>
                  Konsultasi Panitia
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}