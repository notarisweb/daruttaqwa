"use client";

import React from "react";
import Link from "next/link";
import { 
  BookOpen, 
  MessagesSquare, 
  Library, 
  Mic2, 
  Monitor, 
  GraduationCap, 
  Languages, 
  FileSpreadsheet, 
  Award 
} from "lucide-react";

export default function UnitPrograms() {
  const units = [
    {
      name: "UNIT KMI",
      color: "#1a9c69",
      bodyBg: "#e8f5e9",
      programs: [
        { label: "Tahfidzul Qur'an", slug: "tahfidz-kmi", icon: <BookOpen size={18} /> },
        { label: "Munadzarah", slug: "munadzarah", icon: <MessagesSquare size={18} /> },
        { label: "Bahtsul Kutub", slug: "bahtsul-putub", icon: <Library size={18} /> },
        { label: "Ta'limul Quro'", slug: "talimul-quro", icon: <Mic2 size={18} /> },
        { label: "Canva", slug: "desain-canva", icon: <Monitor size={18} /> },
        { label: "Double Ijazah", slug: "double-ijazah-kmi", icon: <GraduationCap size={18} /> },
      ],
    },
    {
      name: "UNIT SMP",
      color: "#1e2f65",
      bodyBg: "#e3f2fd",
      programs: [
        { label: "Tahfidzul Qur'an", slug: "tahfidz-smp", icon: <BookOpen size={18} /> },
        { label: "Bahasa Bilingual", slug: "bilingual-smp", icon: <Languages size={18} /> },
        { label: "Microsoft Office", slug: "it-office", icon: <FileSpreadsheet size={18} /> },
        { label: "Ijazah Formal", slug: "ijazah-formal", icon: <Award size={18} /> },
      ],
    },
  ];

  return (
    <section className="dt-outer-wrapper">
      <h2 className="dt-section-title">
        PROGRAM <span className="dt-gold-span">UNGGULAN</span>
      </h2>

      <div className="dt-main-grid">
        {units.map((unit) => (
          <div key={unit.name} className="dt-unit-box" style={{ backgroundColor: unit.bodyBg }}>
            <div className="dt-unit-header" style={{ backgroundColor: unit.color }}>
              <h3>{unit.name}</h3>
            </div>

            <div className="dt-program-flex">
              {unit.programs.map((prog, i) => (
                <Link
                  key={i}
                  href={`/program/${prog.slug}`}
                  className="dt-sultan-button"
                  style={{ "--unit-color": unit.color } as React.CSSProperties}
                >
                  <div className="dt-btn-content">
                    <div className="dt-btn-icon">{prog.icon}</div>
                    <span className="dt-btn-label">{prog.label}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .dt-outer-wrapper { 
          margin: 60px 0; 
          padding: 0 10px; 
          isolation: isolate; 
        }
        
        .dt-section-title { text-align: center; font-size: 28px; font-weight: 900; margin-bottom: 40px; color: #1e2f65; text-transform: uppercase; }
        .dt-gold-span { color: #f9c80e; }

        .dt-main-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 30px; align-items: stretch; }

        .dt-unit-box { border-radius: 20px; overflow: hidden; border: 1px solid #e2e8f0; display: flex; flex-direction: column; height: 100%; box-shadow: 0 8px 25px rgba(0,0,0,0.05); }

        .dt-unit-header { padding: 20px; text-align: center; border-bottom: 4px solid #f9c80e; }
        .dt-unit-header h3 { color: #fff; margin: 0; font-weight: 900; letter-spacing: 2px; font-size: 19px; text-shadow: 0 2px 4px rgba(0,0,0,0.2); }

        .dt-program-flex { padding: 30px; display: grid; grid-template-columns: 1fr 1fr; gap: 15px; flex-grow: 1; align-content: start; }

        /* === TOMBOL SULTAN: VERSI ANTI-BOCOR === */
        .dt-sultan-button {
          position: relative;
          display: flex;
          align-items: center;
          min-height: 52px;
          border-radius: 50px;
          background-color: #ffffff;
          text-decoration: none;
          border: 2px solid var(--unit-color);
          box-shadow: 0 4px 10px rgba(0,0,0,0.1), inset 0 2px 4px rgba(255,255,255,1);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          
          /* KUNCI KRUSIAL */
          overflow: hidden;
          contain: paint; /* Memaksa browser mengunci render di dalam box ini saja */
          z-index: 1;
          transform: translateZ(0); 
        }

        /* EFEK KACA (GLARE) - Menggunakan Pseudo-element agar tidak loncat */
        .dt-sultan-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 45%;
          background: linear-gradient(to bottom, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 100%);
          pointer-events: none;
          z-index: 2;
        }

        /* EFEK KILAT (SHIMMER) - Menggunakan Pseudo-element agar stabil */
        .dt-sultan-button::after {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 60%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          z-index: 3;
          pointer-events: none;
        }

        .dt-sultan-button:hover::after {
          left: 140%;
          transition: all 0.7s ease-in-out;
        }

        .dt-btn-content {
          position: relative;
          z-index: 10; /* Berada di atas kaca dan kilat */
          display: flex;
          align-items: center;
          padding: 12px 18px;
          width: 100%;
        }

        .dt-btn-icon {
          margin-right: 12px;
          color: var(--unit-color);
          display: flex;
          align-items: center;
        }

        .dt-sultan-button:hover { transform: translateY(-4px) translateZ(0); box-shadow: 0 8px 15px rgba(0,0,0,0.15); }

        .dt-btn-label {
          color: var(--unit-color);
          font-weight: 800;
          font-size: 13px;
          text-align: left;
          line-height: 1.2;
        }

        @media (max-width: 992px) { .dt-main-grid { grid-template-columns: 1fr; } }
        @media (max-width: 600px) { .dt-program-flex { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}