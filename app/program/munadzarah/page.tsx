import Image from 'next/image';
import Link from 'next/link';

export default function MunadzarahPage() {
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
              Latihan <span style={{ color: 'var(--dt-green)' }}>Munadzarah</span> Ilmiah Santri.
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Mengasah ketajaman berpikir dan seni beradu argumen santri Darut Taqwa melalui forum diskusi ilmiah yang berlandaskan kitab-kitab muktabar.
            </p>
          </div>
        </div>
      </section>

      {/* --- FEATURE CARDS SECTION --- */}
      <section style={{ paddingBottom: '80px' }}>
        <div className="container">
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '30px',
            justifyContent: 'center' 
          }}>
            {/* Card 1: Analisis Kritis */}
            <div className="card-clean" style={{ flex: '1 1 300px', padding: '30px', textAlign: 'center' }}>
              <div style={{ position: 'relative', width: '100%', height: '200px', borderRadius: '15px', overflow: 'hidden', marginBottom: '20px' }}>
                <Image 
                  src="/images/munadzarah.jpeg" 
                  alt="Analisis Kritis" 
                  fill 
                  style={{ objectFit: 'cover', opacity: 0.9 }}
                  unoptimized 
                />
              </div>
              <h3 style={{ color: 'var(--dt-blue)', fontWeight: 800, marginBottom: '10px' }}>Analisis Kritis</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Melatih santri untuk membedah masalah hukum dari berbagai sudut pandang ibarat ulama mujtahid.</p>
            </div>

            {/* Card 2: Retorika Santun */}
            <div className="card-clean" style={{ flex: '1 1 300px', padding: '30px', textAlign: 'center' }}>
              <div style={{ position: 'relative', width: '100%', height: '200px', borderRadius: '15px', overflow: 'hidden', marginBottom: '20px' }}>
                <Image 
                  src="/images/adab.jpg" 
                  alt="Retorika Santun" 
                  fill 
                  style={{ objectFit: 'cover' }}
                  unoptimized 
                />
              </div>
              <h3 style={{ color: 'var(--dt-blue)', fontWeight: 800, marginBottom: '10px' }}>Retorika Santun</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Seni menyampaikan argumen dengan bahasa yang fasih, logis, dan tetap menjaga adab kesantunan.</p>
            </div>

            {/* Card 3: Keluasan Wawasan */}
            <div className="card-clean" style={{ flex: '1 1 300px', padding: '30px', textAlign: 'center' }}>
              <div style={{ position: 'relative', width: '100%', height: '200px', borderRadius: '15px', overflow: 'hidden', marginBottom: '20px' }}>
                <Image 
                  src="/images/SANTRIWATI.JPG" 
                  alt="Wawasan Luas" 
                  fill 
                  style={{ objectFit: 'cover', opacity: 0.8 }}
                  unoptimized 
                />
              </div>
              <h3 style={{ color: 'var(--dt-blue)', fontWeight: 800, marginBottom: '10px' }}>Keluasan Wawasan</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Mendorong santri mengeksplorasi berbagai referensi kitab untuk memperkuat basis argumentasi.</p>
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
                Membentuk Mental <br /> Intelektual yang Tangguh.
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '30px', lineHeight: 1.8 }}>
                Munadzarah bukan sekadar debat, melainkan forum pencarian kebenaran. Di Darut Taqwa, santri dilatih untuk berani mempertahankan pendapat namun rendah hati dalam menerima kebenaran dari pihak lawan.
              </p>
              <div style={{ 
                borderLeft: '4px solid var(--dt-green)', 
                padding: '20px', 
                backgroundColor: 'white', 
                borderRadius: '0 15px 15px 0',
                boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                fontStyle: 'italic'
              }}>
                "Perbedaan pendapat di meja diskusi adalah rahmat. Adabul Ikhtilaf adalah mahkota utama setiap santri dalam ber-munadzarah."
              </div>
            </div>
            
            <div style={{ position: 'relative', width: '100%', aspectRatio: '1/1', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
              <Image 
                src="/images/debat.avif" 
                alt="Forum Munadzarah" 
                fill 
                style={{ objectFit: 'cover' }}
                unoptimized 
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION (Pendaftaran Santri) --- */}
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
              Daftarkan diri Anda sekarang untuk bergabung bersama keluarga besar Pondok Pesantren Darut Taqwa Banyumas dan kuasai literatur Islam klasik.
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