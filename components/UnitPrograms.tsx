"use client";

import Link from 'next/link';

/**
 * UnitPrograms - Sophisticated Version 2026
 * Menampilkan Program Unggulan Unit KMI & SMP secara futuristik
 */
export default function UnitPrograms({ units }: { units: any[] }) {
  // Mapping program secara statis sesuai gambar rujukan Mas Naufal
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
    <div className="unit-programs-section">
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#1e2f65', textTransform: 'uppercase' }}>
          Program <span style={{ color: '#f9c80e' }}>Unggulan</span>
        </h2>
        <div style={{ width: '60px', height: '5px', background: '#1a9c69', margin: '15px auto', borderRadius: '10px' }}></div>
      </div>

      <div className="program-grid">
        {/* UNIT KMI */}
        <div className="unit-card glass">
          <div className="unit-header kmi">UNIT KMI</div>
          <div className="unit-content">
            {programKMI.map((p, i) => (
              <ProgramLink key={i} item={p} activeColor="#1a9c69" />
            ))}
          </div>
        </div>

        {/* UNIT SMP */}
        <div className="unit-card glass">
          <div className="unit-header smp">UNIT SMP</div>
          <div className="unit-content">
            {programSMP.map((p, i) => (
              <ProgramLink key={i} item={p} activeColor="#1e2f65" />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .program-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 30px;
        }
        .unit-card {
          border-radius: 30px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(0,0,0,0.05);
          box-shadow: 0 20px 40px rgba(0,0,0,0.04);
          transition: transform 0.4s ease;
        }
        .unit-header {
          padding: 20px;
          text-align: center;
          font-weight: 900;
          font-size: 1.4rem;
          color: white;
          letter-spacing: 2px;
        }
        .kmi { background: #1a9c69; }
        .smp { background: #1e2f65; }
        .unit-content {
          padding: 30px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }
        @media (max-width: 600px) {
          .unit-content { grid-template-columns: 1fr; }
          .program-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}

function ProgramLink({ item, activeColor }: any) {
  return (
    <>
      <Link href={item.href} className="p-item">
        <span className="p-icon">{item.icon}</span>
        <span className="p-title">{item.title}</span>
      </Link>
      <style jsx>{`
        .p-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 15px;
          background: #f8fafc;
          border-radius: 15px;
          border: 1px solid transparent;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .p-icon { font-size: 1.5rem; }
        .p-title { font-weight: 700; color: #475569; font-size: 0.95rem; }
        .p-item:hover {
          transform: translateY(-3px);
          background: white;
          border-color: ${activeColor};
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
        }
      `}</style>
    </>
  );
}