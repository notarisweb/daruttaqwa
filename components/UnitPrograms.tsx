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

// Definisikan interface agar sinkron dengan app/page.tsx
interface Unit {
  _id?: string;
  name: string;
  slug?: string;
  color?: string;
  bodyBg?: string;
  programs?: Array<{ label: string; slug: string; icon: React.ReactNode }>;
}

export default function UnitPrograms({ units: sanityUnits }: { units?: Unit[] }) {
  // Data default jika data props kosong atau untuk fallback identitas visual
  const defaultUnits = [
    {
      name: "UNIT KMI",
      color: "#1a9c69", // Hijau Darut Taqwa
      bodyBg: "#f0fdf4",
      programs: [
        { label: "Tahfidzul Qur'an", slug: "tahfidz-kmi", icon: <BookOpen size={18} /> },
        { label: "Munadzarah", slug: "munadzarah", icon: <MessagesSquare size={18} /> },
        { label: "Bahtsul Kutub", slug: "bahtsul-kutub", icon: <Library size={18} /> },
        { label: "Ta'limul Quro'", slug: "talimul-quro", icon: <Mic2 size={18} /> },
        { label: "Desain Grafis", slug: "desain-canva", icon: <Monitor size={18} /> },
        { label: "Double Ijazah", slug: "double-ijazah-kmi", icon: <GraduationCap size={18} /> },
      ],
    },
    {
      name: "UNIT SMP",
      color: "#1e2f65", // Biru Navy Darut Taqwa
      bodyBg: "#f0f7ff",
      programs: [
        { label: "Tahfidzul Qur'an", slug: "tahfidz-smp", icon: <BookOpen size={18} /> },
        { label: "Bahasa Bilingual", slug: "bilingual-smp", icon: <Languages size={18} /> },
        { label: "Microsoft Office", slug: "it-office", icon: <FileSpreadsheet size={18} /> },
        { label: "Ijazah Formal", slug: "ijazah-formal", icon: <Award size={18} /> },
      ],
    },
  ];

  // Gunakan data dari Sanity jika tersedia, jika tidak gunakan default
  const displayUnits = sanityUnits && sanityUnits.length > 0 ? sanityUnits : defaultUnits;

  return (
    <section className="dt-outer-wrapper">
      <h2 className="dt-section-title">
        PROGRAM <span className="dt-gold-span">UNGGULAN</span>
      </h2>

      <div className="dt-main-grid">
        {displayUnits.map((unit) => (
          <div key={unit.name} className="dt-unit-box" style={{ backgroundColor: unit.bodyBg || "#f8fafc" }}>
            <div className="dt-unit-header" style={{ backgroundColor: unit.color || "#1e2f65" }}>
              <h3>{unit.name}</h3>
            </div>

            <div className="dt-program-flex">
              {unit.programs?.map((prog, i) => (
                <Link
                  key={`${unit.name}-${i}`}
                  href={`/program/${prog.slug}`}
                  className="dt-sultan-button"
                  style={{ "--unit-color": unit.color || "#1e2f65" } as React.CSSProperties}
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
        
        .dt-section-title { 
          text-align: center; 
          font-size: clamp(22px, 5vw, 28px); 
          font-weight: 900; 
          margin-bottom: 40px; 
          color: #1e2f65; 
          text-transform: uppercase; 
        }
        .dt-gold-span { color: #f9c80e; }

        .dt-main-grid { 
          display: grid; 
          grid-template-columns: repeat(2, 1fr); 
          gap: 30px; 
          align-items: stretch; 
        }

        .dt-unit-box { 
          border-radius: 24px; 
          overflow: hidden; 
          border: 1px solid #e2e8f0; 
          display: flex; 
          flex-direction: column; 
          height: 100%; 
          box-shadow: 0 12px 35px rgba(30, 47, 101, 0.07); 
        }

        .dt-unit-header { 
          padding: 22px; 
          text-align: center; 
          border-bottom: 4px solid #f9c80e; 
        }
        .dt-unit-header h3 { 
          color: #fff; 
          margin: 0; 
          font-weight: 900; 
          letter-spacing: 2px; 
          font-size: 19px; 
          text-shadow: 0 2px 4px rgba(0,0,0,0.2); 
        }

        .dt-program-flex { 
          padding: 30px; 
          display: grid; 
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); 
          gap: 15px; 
          flex-grow: 1; 
          align-content: start; 
        }

        /* === TOMBOL SULTAN === */
        .dt-sultan-button {
          position: relative;
          display: flex;
          align-items: center;
          min-height: 56px;
          border-radius: 16px;
          background-color: #ffffff;
          text-decoration: none;
          border: 1.5px solid #e2e8f0;
          border-left: 5px solid var(--unit-color);
          box-shadow: 0 4px 6px rgba(0,0,0,0.02);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          overflow: hidden;
          z-index: 1;
        }

        .dt-sultan-button::after {
          content: "";
          position: absolute;
          inset: 0;
          background-color: var(--unit-color);
          opacity: 0;
          z-index: -1;
          transition: opacity 0.3s ease;
        }

        .dt-btn-content {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          width: 100%;
        }

        .dt-btn-icon {
          margin-right: 12px;
          color: var(--unit-color);
          display: flex;
          align-items: center;
          transition: color 0.3s ease;
        }

        .dt-btn-label {
          color: #334155;
          font-weight: 800;
          font-size: 13px;
          text-align: left;
          line-height: 1.2;
          transition: color 0.3s ease;
        }

        .dt-sultan-button:hover { 
          transform: translateY(-3px); 
          border-color: var(--unit-color);
          box-shadow: 0 8px 20px rgba(0,0,0,0.1); 
        }

        .dt-sultan-button:hover .dt-btn-label,
        .dt-sultan-button:hover .dt-btn-icon {
          color: var(--unit-color);
        }

        @media (max-width: 992px) { 
          .dt-main-grid { grid-template-columns: 1fr; } 
        }
        @media (max-width: 600px) { 
          .dt-program-flex { grid-template-columns: 1fr; }
          .dt-outer-wrapper { margin: 40px 0; }
        }
      `}</style>
    </section>
  );
}