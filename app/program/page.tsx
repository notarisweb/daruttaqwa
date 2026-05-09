"use client"; // <--- WAJIB ditambahkan agar styled-jsx bisa jalan

import Link from 'next/link';

/**
 * Halaman Induk Program Unggulan - Darut Taqwa 2026
 * Fix: Client Component untuk mendukung styled-jsx & interaksi hover
 * Developer: Naufal Hawari Muttawakkil
 */
export default function ProgramUtamaPage() {
  
  const programKMI = [
    { title: "Tahfidzul Qur'an", icon: "📖", href: "/program/tahfidz-kmi" },
    { title: "Munadzarah", icon: "💬", href: "/program/munadzarah" },
    { title: "Bahtsul Kutub", icon: "📚", href: "/program/bahtsul-kutub" },
    { title: "Ta'limul Quro'", icon: "🎙️", href: "/program/talimul-quro" },
    { title: "Desain Grafis", icon: "💻", href: "/program/desain-grafis" },
    { title: "Double Ijazah", icon: "🎓", href: "/program/double-ijazah-kmi" },
  ];

  const programSMP = [
    { title: "Tahfidzul Qur'an", icon: "📖", href: "/program/tahfidz-smp" },
    { title: "Bahasa Bilingual", icon: "🌐", href: "/program/bilingual-smp" },
    { title: "Microsoft Office", icon: "📊", href: "/program/it-office" },
    { title: "Ijazah Formal", icon: "📄", href: "/program/ijazah-formal" },
  ];

  return (
    <div className="home-wrapper" style={{ 
      backgroundColor: '#ffffff', 
      color: '#1e2f65', 
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      padding: '80px 0'
    }}>
      
      {/* --- BACKGROUND PATTERN --- */}
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        zIndex: 0, 
        opacity: 0.05, 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10h80v80h-80z' fill='none' stroke='%231a9c69' stroke-width='0.5'/%3E%3Ccircle cx='10' cy='10' r='2' fill='%231a9c69'/%3E%3Ccircle cx='90' cy='10' r='2' fill='%231a9c69'/%3E%3Ccircle cx='90' cy='90' r='2' fill='%231a9c69'/%3E%3Ccircle cx='10' cy='90' r='2' fill='%231a9c69'/%3E%3C/svg%3E")`,
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 4rem)', 
            fontWeight: 900, 
            letterSpacing: '-2px',
            marginBottom: '16px'
          }}>
            PROGRAM <span style={{ color: '#1a9c69' }}>UNGGULAN</span>
          </h1>
          <div style={{ width: '80px', height: '6px', background: '#f9c80e', margin: '0 auto', borderRadius: '10px' }}></div>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
          gap: '40px' 
        }}>
          
          {/* --- UNIT KMI --- */}
          <div className="unit-card">
            <div className="unit-header kmi">
              <h2>UNIT KMI</h2>
            </div>
            <div className="unit-grid">
              {programKMI.map((item, idx) => (
                <ProgramButton key={idx} item={item} color="#1a9c69" />
              ))}
            </div>
          </div>

          {/* --- UNIT SMP --- */}
          <div className="unit-card">
            <div className="unit-header smp">
              <h2>UNIT SMP</h2>
            </div>
            <div className="unit-grid">
              {programSMP.map((item, idx) => (
                <ProgramButton key={idx} item={item} color="#1e2f65" />
              ))}
            </div>
          </div>

        </div>

        <div style={{ textAlign: 'center', marginTop: '100px', opacity: 0.5, fontSize: '0.9rem', fontWeight: 700, letterSpacing: '2px' }}>
          DARUT TAQWA BANYUMAS &bull; ECOSYSTEM 2026
        </div>
      </div>

      <style jsx>{`
        .unit-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          border-radius: 40px;
          border: 1px solid #f1f5f9;
          box-shadow: 0 30px 60px rgba(0,0,0,0.05);
          overflow: hidden;
        }
        .unit-header {
          padding: 24px;
          text-align: center;
        }
        .unit-header h2 {
          color: #fff;
          font-size: 1.8rem;
          font-weight: 800;
          letter-spacing: 1px;
          margin: 0;
        }
        .kmi { background: #1a9c69; }
        .smp { background: #1e2f65; }
        .unit-grid {
          padding: 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        @media (max-width: 600px) {
          .unit-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}

function ProgramButton({ item, color }: { item: any, color: string }) {
  return (
    <>
      <Link href={item.href} style={{ textDecoration: 'none' }}>
        <div className="program-btn">
          <span className="icon">{item.icon}</span>
          <span className="title">{item.title}</span>
        </div>
      </Link>

      <style jsx>{`
        .program-btn {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 20px;
          border-radius: 20px;
          background: #f8fafc;
          border: 1px solid #f1f5f9;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          height: 100%;
        }
        .icon { font-size: 1.8rem; }
        .title {
          font-size: 1rem;
          font-weight: 700;
          color: #334155;
          line-height: 1.2;
        }
        .program-btn:hover {
          background: #ffffff;
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 15px 30px rgba(0,0,0,0.08);
          border-color: ${color};
        }
        .program-btn:active {
          transform: scale(0.98);
        }
      `}</style>
    </>
  );
}