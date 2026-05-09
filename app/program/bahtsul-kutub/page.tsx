import Image from 'next/image';
import Link from 'next/link';

export default function BahtsulKutubPage() {
  return (
    <div className="home-wrapper" style={{ backgroundColor: 'var(--bg-white)' }}>
      {/* --- HERO SECTION --- */}
      <section style={{ padding: '80px 0 60px' }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', 
              fontWeight: 900, 
              color: 'var(--dt-blue)',
              lineHeight: 1.1,
              marginBottom: '24px'
            }}>
              Solusi <span style={{ color: 'var(--dt-green)' }}>Literasi Kitab</span> yang Terpercaya.
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Darut Taqwa hadir sebagai mitra dalam perjalanan keilmuan Anda, menggabungkan tradisi sanad klasik dengan metode pembelajaran modern.
            </p>
          </div>
        </div>
      </section>

      {/* --- 3 CARDS SECTION --- */}
      <section style={{ paddingBottom: '80px' }}>
        <div className="container">
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '30px',
            justifyContent: 'center' 
          }}>
            <div className="card-clean" style={{ flex: '1 1 300px', padding: '30px', textAlign: 'center' }}>
              <div style={{ position: 'relative', width: '100%', height: '200px', borderRadius: '15px', overflow: 'hidden', marginBottom: '20px' }}>
                <Image 
                  src="/images/ngaji.jpg" 
                  alt="Bimbingan Personal" 
                  fill 
                  style={{ objectFit: 'cover' }}
                  unoptimized 
                />
              </div>
              <h3 style={{ color: 'var(--dt-blue)', fontWeight: 800, marginBottom: '10px' }}>Bimbingan Personal</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Layanan bimbingan kitab kuning yang disesuaikan dengan kemampuan dasar santri secara mendalam.</p>
            </div>

            <div className="card-clean" style={{ flex: '1 1 300px', padding: '30px', textAlign: 'center' }}>
              <div style={{ position: 'relative', width: '100%', height: '200px', borderRadius: '15px', overflow: 'hidden', marginBottom: '20px' }}>
                <Image 
                  src="/images/kitab-kuning.jpg" 
                  alt="Metode Unggulan" 
                  fill 
                  style={{ objectFit: 'cover' }}
                  unoptimized 
                />
              </div>
              <h3 style={{ color: 'var(--dt-blue)', fontWeight: 800, marginBottom: '10px' }}>Metode Unggulan</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Teknik baca cepat yang telah teruji kualitasnya untuk membedah naskah-naskah klasik.</p>
            </div>

            <div className="card-clean" style={{ flex: '1 1 300px', padding: '30px', textAlign: 'center' }}>
              <div style={{ position: 'relative', width: '100%', height: '200px', borderRadius: '15px', overflow: 'hidden', marginBottom: '20px' }}>
                <Image 
                  src="/images/kuning.webp" 
                  alt="Informasi Akurat" 
                  fill 
                  style={{ objectFit: 'cover' }}
                  unoptimized 
                />
              </div>
              <h3 style={{ color: 'var(--dt-blue)', fontWeight: 800, marginBottom: '10px' }}>Informasi Akurat</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Edukasi mengenai sanad dan matan kitab untuk mendukung pemahaman yang komprehensif.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- DETAIL SECTION --- */}
      <section style={{ padding: '100px 0', backgroundColor: '#f9fafb' }}>
        <div className="container">
          <div className="main-grid" style={{ alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '32px', fontWeight: 900, color: 'var(--dt-blue)', marginBottom: '25px' }}>
                Fokus Pada Pemahaman <br /> Nahwu & Shorof Mendalam.
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '30px', lineHeight: 1.8 }}>
                Program Bahtsul Kutub menjadi instrumen inti untuk membantu santri menguasai naskah-naskah sulit secara alami melalui kaidah bahasa yang kuat.
              </p>
              <div style={{ 
                borderLeft: '4px solid var(--dt-green)', 
                padding: '20px', 
                backgroundColor: 'white', 
                borderRadius: '0 15px 15px 0',
                boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                fontStyle: 'italic'
              }}>
                "Kualitas pemahaman adalah investasi jangka panjang. Memilih metode yang tepat adalah langkah awal penguasaan literatur yang aman."
              </div>
            </div>
            
            <div style={{ position: 'relative', width: '100%', aspectRatio: '1/1', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
              <Image 
                src="/images/kutub.jpeg" 
                alt="Detail Nahwu Shorof" 
                fill 
                style={{ objectFit: 'cover' }}
                unoptimized 
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <div style={{ 
            backgroundColor: 'var(--dt-blue-dark)', 
            borderRadius: '40px', 
            padding: '80px 40px', 
            textAlign: 'center',
            color: 'white'
          }}>
            <h2 style={{ fontSize: '40px', fontWeight: 900, marginBottom: '20px' }}>Siap Menjadi Santri Darut Taqwa?</h2>
            <p style={{ opacity: 0.8, marginBottom: '40px', maxWidth: '600px', marginInline: 'auto' }}>
              Bergabunglah bersama keluarga besar Pondok Pesantren Darut Taqwa Banyumas untuk mendalami ilmu agama dan kitab turats secara komprehensif.
            </p>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/pendaftaran" style={{ 
                backgroundColor: 'var(--dt-green)',
                color: 'white',
                padding: '15px 40px', 
                borderRadius: '6px',
                fontWeight: 800,
                fontSize: '14px',
                textTransform: 'uppercase'
              }}>
                Daftar Jadi Santri
              </Link>
              
              <Link href="https://wa.me/0895324383400" style={{ 
                backgroundColor: 'white', 
                color: 'var(--dt-blue)', 
                padding: '15px 40px', 
                borderRadius: '6px', 
                fontWeight: 800,
                fontSize: '14px',
                textTransform: 'uppercase'
              }}>
                Hubungi Panitia (WA)
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}