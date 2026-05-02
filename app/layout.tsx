import type { Metadata } from "next";
import { Inter, Amiri } from "next/font/google"; 
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// 1. Konfigurasi Font Latin (Inter)
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

// 2. Konfigurasi Font Arab (Amiri) - Sangat cocok untuk konten Pesantren
const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
});

export const metadata: Metadata = {
  // Menggunakan Nama Institusi dan Tagline Resmi
  title: "Darut Taqwa Banyumas - Generasi Taqwa Yang Mendunia",
  description: "Official Website Pondok Pesantren Darut Taqwa, Alasmalang, Kemranjen, Banyumas. Lembaga pendidikan Islam dengan program unggulan Tahfidz, KMI, dan SMP.",
  metadataBase: new URL("https://daruttaqwabanyumas.com"), //
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Darut Taqwa Banyumas",
    description: "Generasi Taqwa Yang Mendunia - Alasmalang, Kemranjen, Banyumas",
    url: "https://daruttaqwabanyumas.com",
    siteName: "Darut Taqwa Banyumas",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} ${amiri.variable}`}>
      <body 
        className="antialiased" 
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          minHeight: '100vh',
          // Menggunakan font-inter sebagai standar teks latin
          fontFamily: 'var(--font-inter), sans-serif',
          backgroundColor: 'var(--bg-gray)' // Memastikan background mengikuti tema global
        }}
      >
        <Header />
        
        {/* Main section fleksibel agar footer tetap berada di bawah halaman */}
        <main style={{ flex: 1 }}>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}