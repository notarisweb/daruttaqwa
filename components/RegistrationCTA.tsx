"use client";

import Link from "next/link";
import { UserPlus } from "lucide-react";

export default function RegistrationCTA() {
  return (
    <section 
      className="main-container my-10 animate-fade-up"
      style={{ width: '100%', maxWidth: '1200px', margin: '2.5rem auto', padding: '0 1.25rem' }}
    >
      {/* CONTAINER SLIM LANDSCAPE */}
      <div 
        className="relative overflow-hidden"
        style={{ 
          backgroundColor: '#fdfbf0', 
          borderRadius: '1.25rem', 
          border: '1px solid #f9ebbe',
          padding: '1.5rem 3rem', 
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <div 
          className="flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}
        >

          {/* AREA TEKS - Menggunakan flex-1 agar teks membentang maksimal */}
          <div className="flex-1 text-center md:text-left pr-0 md:pr-4">
            <h3 
              className="text-dt-blue leading-tight"
              style={{ fontSize: '1.75rem', fontWeight: '900', color: '#1e2f65', marginBottom: '0.25rem' }}
            >
              {/* whiteSpace: 'nowrap' MENGUNCI kata "Masa Depan" agar selalu sejajar */}
              Hadiah Terindah Untuk <span style={{ color: '#f9c80e', fontStyle: 'italic', whiteSpace: 'nowrap' }}>Masa Depan</span>
            </h3>

            <p 
              className="text-text-muted font-medium"
              style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.5', maxWidth: '100%' }}
            >
              Dunia mungkin berubah, iman dan adab adalah pegangan selamanya. 
              Titipkan permata hati Anda di <strong>Darut Taqwa Banyumas</strong>.
            </p>
          </div>

          {/* TOMBOL DAFTAR - Ditambah flexShrink: 0 agar ukurannya tidak tergencet teks */}
          <Link
            href="/pendaftaran"
            className="group flex items-center gap-2 transition-all hover:scale-105 shrink-0"
            style={{ 
              backgroundColor: '#121212', 
              color: 'white', 
              padding: '0.75rem 1.5rem', 
              borderRadius: '0.75rem', 
              fontWeight: '800',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              whiteSpace: 'nowrap',
              flexShrink: 0, // Kunci ukuran tombol
              boxShadow: '0 6px 15px rgba(0,0,0,0.15)'
            }}
          >
            <UserPlus size={18} color="white" />
            <span style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.75rem' }}>
              Daftar Sekarang
            </span>
          </Link>

        </div>
      </div>
    </section>
  );
}