"use client";

import Link from "next/link";
import { UserPlus } from "lucide-react";

/**
 * RegistrationCTA - Final Optimized Version
 * Proyek: Darut Taqwa Banyumas
 * Developer: Naufal Hawari Muttawakkil
 */
export default function RegistrationCTA() {
  return (
    <section 
      className="main-container my-10 animate-fade-up"
      style={{ width: '100%', maxWidth: '1200px', margin: '3rem auto', padding: '0 1.25rem' }}
    >
      {/* KOTAK RAMPING (SLIM LANDSCAPE) */}
      <div 
        style={{ 
          backgroundColor: '#fdfbf0', 
          borderRadius: '1.5rem', 
          border: '1px solid #f9ebbe',
          padding: '1.5rem 2.5rem', 
          boxShadow: '0 12px 30px rgba(0,0,0,0.03)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* AKSEN CAHAYA (SOFT GLOW) */}
        <div style={{ position: 'absolute', top: '-15%', right: '-5%', width: '220px', height: '220px', background: 'radial-gradient(circle, rgba(26, 156, 105, 0.06) 0%, transparent 75%)', pointerEvents: 'none' }}></div>

        <div 
          className="flex flex-col items-start justify-center" 
          style={{ width: '100%', position: 'relative', zIndex: 2 }}
        >
          
          {/* AREA TEKS */}
          <div style={{ width: '100%' }}>
            <h3 
              style={{ 
                fontSize: 'clamp(1.6rem, 3.2vw, 2.2rem)', 
                fontWeight: '900', 
                color: '#1e2f65', 
                lineHeight: '1.1',
                marginBottom: '0.6rem',
                letterSpacing: '-1.2px'
              }}
            >
              Hadiah Terindah Untuk <span style={{ color: '#f9c80e', fontStyle: 'italic' }}>Masa Depan</span>
            </h3>

            <p 
              style={{ 
                color: '#555', 
                fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)', 
                lineHeight: '1.5',
                maxWidth: '750px',
                fontWeight: '500'
              }}
            >
              Dunia mungkin berubah, iman dan adab adalah pegangan selamanya. 
              Titipkan permata hati Anda di <strong style={{ color: '#1a9c69' }}>Darut Taqwa Banyumas</strong>.
            </p>
          </div>

          {/* AREA TOMBOL - JEDA SUDAH SEMPURNA */}
          <div style={{ marginTop: '1.8rem', flexShrink: 0 }}> 
            <Link
              href="/pendaftaran"
              className="group transition-all hover:scale-105 active:scale-95"
              style={{ 
                backgroundColor: '#1a9c69', 
                color: 'white', 
                padding: '0.7rem 1.6rem', 
                borderRadius: '0.8rem', 
                fontWeight: '800',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                width: 'fit-content',
                boxShadow: '0 8px 20px rgba(26, 156, 105, 0.2)',
                whiteSpace: 'nowrap'
              }}
            >
              <UserPlus size={18} color="white" strokeWidth={3} />
              <span style={{ textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.75rem' }}>
                Daftar Sekarang
              </span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}