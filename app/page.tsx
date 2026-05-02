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
import VideoSection from "@/components/VideoSection"; // IMPORT KOMPONEN VIDEO

// Konfigurasi agar data selalu fresh
export const dynamic = 'force-dynamic';
export const revalidate = 0; 

export default async function Home() {
  // Mengambil data Khutbah untuk sidebar
  const khutbahData = await getKhutbahPosts() || [];

  return (
    <div className="home-wrapper">
      <div className="container">
        
        {/* 1. TOP NEWS */}
        <section className="hide-on-mobile" style={{ marginTop: '20px' }}>
          <TopNews />
        </section>

        {/* 2. MAIN GRID */}
        <div className="main-grid">
          <main className="main-content">
            <Headline />
          </main>
          <aside className="hide-on-mobile">
            <PopularSidebar />
          </aside>
        </div>

        {/* 3. REKOMENDASI SECTION */}
        <section className="hide-on-mobile">
          <RecommendationSection />
        </section>

        {/* 4. PROGRAM UNGGULAN */}
        <section style={{ marginTop: '50px' }}>
          <UnitPrograms />
        </section>

        {/* 5. KABAR UNIT */}
        <section>
          <UnitNews />
        </section>

        {/* 6. KONTEN VIDEO - Diletakkan tepat di bawah Kabar Unit */}
        <section style={{ marginTop: '50px', marginBottom: '20px' }}>
          <VideoSection />
        </section>

        {/* 7. BOTTOM LAYOUT */}
        <div className="bottom-layout-grid" style={{ marginTop: '50px' }}>
          <section className="main-content">
            <h2 className="section-title">
              Postingan <span style={{ color: 'var(--dt-gold)' }}>Terbaru</span>
            </h2>
            <LatestPosts />
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