"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Pengunci ukuran ikon agar tetap proporsional
  const iconCircleStyle = (bgColor: string) => ({
    width: '36px',
    height: '36px',
    minWidth: '36px',
    maxWidth: '36px',
    borderRadius: '50%',
    backgroundColor: bgColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s',
  });

  return (
    <footer style={{ backgroundColor: '#fff', borderTop: '4px solid #f9c80e', padding: '60px 0 0 0', marginTop: '60px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* KOLOM 1: BRAND & SOSIAL MEDIA */}
        <div>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', marginBottom: '20px' }}>
            <Image src="/logo.png" alt="Logo Darut Taqwa" width={60} height={60} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '22px', fontWeight: '900', color: '#1e2f65', lineHeight: '1.1' }}>
                DARUT <span style={{ color: '#1a9c69' }}>TAQWA</span>
              </span>
              <span style={{ fontSize: '10px', color: '#666', fontWeight: '800', marginTop: '2px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Generasi Taqwa Yang Mendunia
              </span>
            </div>
          </Link>
          <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.8', marginBottom: '25px', textAlign: 'justify' }}>
            Lembaga pendidikan Islam yang berdedikasi mencetak generasi rabbani yang unggul dalam ilmu, iman, dan amal, serta siap menjawab tantangan global dengan karakter Qur'ani.
          </p>
          
          {/* SOSIAL MEDIA */}
          <div style={{ display: 'flex', gap: '12px' }}>
            <Link href="#" style={iconCircleStyle('#1877F2')} aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </Link>
            <Link href="#" style={iconCircleStyle('#000000')} aria-label="X">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </Link>
            <Link href="#" style={{ ...iconCircleStyle(''), background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)' }} aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </Link>
            <Link href="#" style={iconCircleStyle('#ff0000')} aria-label="YouTube">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </Link>
          </div>
        </div>

        {/* KOLOM 2: UNIT PENDIDIKAN */}
        <div>
          <h4 style={{ fontSize: '15px', fontWeight: '800', borderLeft: '4px solid #1a9c69', paddingLeft: '10px', marginBottom: '20px', color: '#1e2f65', textTransform: 'uppercase' }}>Unit & Program</h4>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px', color: '#666', lineHeight: '2.4' }}>
            <li><Link href="/unit-kmi" style={{ textDecoration: 'none', color: 'inherit' }}>Unit KMI (Pesantren)</Link></li>
            <li><Link href="/unit-smp" style={{ textDecoration: 'none', color: 'inherit' }}>Unit SMP IT</Link></li>
            <li><Link href="/tahfidz" style={{ textDecoration: 'none', color: 'inherit' }}>Tahfidzul Qur'an</Link></li>
            <li><Link href="/kajian-hari-ini" style={{ textDecoration: 'none', color: 'inherit' }}>Kajian Hari Ini</Link></li>
            <li><Link href="/video" style={{ textDecoration: 'none', color: 'inherit' }}>Galeri Video Dakwah</Link></li>
          </ul>
        </div>

        {/* KOLOM 3: KELEMBAGAAN */}
        <div>
          <h4 style={{ fontSize: '15px', fontWeight: '800', borderLeft: '4px solid #f9c80e', paddingLeft: '10px', marginBottom: '20px', color: '#1e2f65', textTransform: 'uppercase' }}>Informasi Lembaga</h4>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px', color: '#666', lineHeight: '2.4' }}>
            <li><Link href="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>Profil Pesantren</Link></li>
            <li><Link href="/pimpinan" style={{ textDecoration: 'none', color: 'inherit' }}>Struktur Pimpinan</Link></li>
            <li><Link href="/kontak" style={{ textDecoration: 'none', color: 'inherit' }}>Hubungi Kami</Link></li>
            <li><Link href="/download" style={{ textDecoration: 'none', color: 'inherit' }}>Pusat Unduhan</Link></li>
            <li><Link href="/galeri" style={{ textDecoration: 'none', color: 'inherit' }}>Galeri Foto</Link></li>
          </ul>
        </div>

        {/* KOLOM 4: JARINGAN & SOSIAL */}
        <div>
          <h4 style={{ fontSize: '15px', fontWeight: '800', borderLeft: '4px solid #1e2f65', paddingLeft: '10px', marginBottom: '20px', color: '#1e2f65', textTransform: 'uppercase' }}>Jaringan Umat</h4>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px', color: '#666', lineHeight: '2.4' }}>
            <li><Link href="https://herbanos.id" style={{ textDecoration: 'none', color: 'inherit' }}>Kesehatan</Link></li>
            <li><Link href="https://jasaqiqah.my.id" style={{ textDecoration: 'none', color: 'inherit' }}>Jasa Aqiqah</Link></li>
            <li><Link href="https://onislam.web.id" style={{ textDecoration: 'none', color: 'inherit' }}>Media Islam</Link></li>
            <li style={{ marginTop: '12px' }}>
              <Link href="/donasi" style={{ backgroundColor: '#1e2f65', color: '#fff', padding: '8px 15px', borderRadius: '4px', fontWeight: 'bold', textDecoration: 'none', fontSize: '12px' }}>
                INFAQ & DONASI
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT AREA */}
      <div style={{ backgroundColor: '#f1f3f5', marginTop: '50px', padding: '25px 0', borderTop: '1px solid #e9ecef', textAlign: 'center', fontSize: '12px', color: '#777' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <p style={{ margin: 0, letterSpacing: '0.5px' }}>
            © {currentYear} <strong>DARUT TAQWA BANYUMAS</strong>. Seluruh Hak Cipta Dilindungi.
          </p>
          <p style={{ margin: '5px 0 0 0', fontSize: '11px', color: '#999' }}>
            Membangun Peradaban dengan Ilmu dan Taqwa.
          </p>
        </div>
      </div>
    </footer>
  );
}