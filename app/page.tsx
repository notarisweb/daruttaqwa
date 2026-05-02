// app/page.tsx
import { getKhutbahPosts } from "@/lib/sanity.query";
import Headline from "@/components/Headline";
import TopNews from "@/components/TopNews";
import PopularSidebar from "@/components/PopularSidebar";
import RecommendationSection from "@/components/RecommendationSection";
import LatestPosts from "@/components/LatestPosts";
import KhutbahSidebar from "@/components/KhutbahSidebar";
import InfoDakwah from "@/components/InfoDakwah";
import UnitPrograms from "@/components/UnitPrograms";
import UnitNews from "@/components/UnitNews"; 
import VideoSection from "@/components/VideoSection";

// Konfigurasi agar data selalu fresh (Penting untuk portal berita sekolah)
export const dynamic = 'force-dynamic';
export const revalidate = 0; 

export default async function Home({ 
  searchParams 
}: { 
  searchParams: Promise<any> 
}) {
  // 1. Mengambil data Khutbah untuk sidebar secara Server-side
  const khutbahData = await getKhutbahPosts() || [];

  // 2. Await searchParams untuk kebutuhan paginasi di LatestPosts
  const sParams = await searchParams;

  return (
    <div className="home-wrapper">
      <div className="container">
        
        {/* 1. TOP NEWS - Flash News atau Berita Utama Terkini */}
        <section className="hide-on-mobile" style={{ marginTop: '20px' }}>
          <TopNews />
        </section>

        {/* 2. MAIN GRID - Headline Utama & Sidebar Populer */}
        <div className="main-grid">
          <main className="main-content">
            <Headline />
          </main>
          
          <aside className="hide-on-mobile">
            <PopularSidebar />
          </aside>
        </div>

        {/* 3. REKOMENDASI SECTION - Grid 4 Kolom Berita Pilihan */}
        <section className="hide-on-mobile">
          <RecommendationSection />
        </section>

        {/* 4. PROGRAM UNGGULAN - Visualisasi Unit KMI & SMP IT */}
        <section style={{ marginTop: '50px' }}>
          <UnitPrograms />
        </section>

        {/* 5. KABAR UNIT - Berita Spesifik dari Sanity (KMI & SMP) */}
        <section>
          <UnitNews />
        </section>

        {/* 6. KONTEN VIDEO - Aksen Biru-Emas Khas Darut Taqwa */}
        <section style={{ marginTop: '50px', marginBottom: '20px' }}>
          <VideoSection />
        </section>

        {/* 7. BOTTOM LAYOUT - Postingan Terbaru & Sidebar Dakwah */}
        <div className="bottom-layout-grid" style={{ marginTop: '50px' }}>
          <section className="main-content">
            <h2 className="section-title">
              Postingan <span style={{ color: 'var(--dt-gold)' }}>Terbaru</span>
            </h2>
            
            {/* Mengirimkan sParams agar paginasi di LatestPosts berfungsi */}
            <LatestPosts searchParams={sParams} />
          </section>

          <aside className="sidebar-dakwah">
            <KhutbahSidebar articles={khutbahData} />
            <InfoDakwah />
          </aside>
        </div>

      </div>
    </div>
  );
}