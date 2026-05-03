// app/page.tsx
import { 
  getKhutbahPosts, 
  getVideoPosts, 
  getNewsPosts,
  getPopularPosts,
  getUnits,
  getAllPosts
} from "@/lib/sanity.query";
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

export const dynamic = 'force-dynamic';
export const revalidate = 0; 

export default async function Home({ 
  searchParams 
}: { 
  searchParams: Promise<any> 
}) {
  // 1. Ambil data secara paralel untuk mempercepat loading server
  const [
    khutbahData, 
    videoData, 
    newsData, 
    popularData, 
    unitData, 
    allPosts,
    sParams
  ] = await Promise.all([
    getKhutbahPosts(),
    getVideoPosts(),   // Data untuk VideoSection
    getNewsPosts(),
    getPopularPosts(),
    getUnits(),        // Data untuk UnitPrograms
    getAllPosts(),
    searchParams
  ]);

  return (
    <div className="home-wrapper">
      <div className="container">
        
        {/* 1. TOP NEWS */}
        <section style={{ marginTop: '20px' }}>
          <TopNews posts={newsData} />
        </section>

        {/* 2. MAIN GRID */}
        <div className="main-grid">
          <main className="main-content">
            {/* Headline biasanya mengambil data dari News terbaru */}
            <Headline posts={newsData} />
          </main>
          
          <aside className="hide-on-mobile">
            {/* PopularSidebar sekarang menerima data dinamis dari Sanity */}
            <PopularSidebar popularPosts={popularData} />
          </aside>
        </div>

        {/* 3. REKOMENDASI SECTION */}
        <section style={{ marginTop: '40px' }}>
          <RecommendationSection posts={allPosts} />
        </section>

        {/* 4. PROGRAM UNGGULAN */}
        <section style={{ marginTop: '50px' }}>
          {/* Mengirimkan data unit pendidikan (KMI, SMP, dll) */}
          <UnitPrograms units={unitData} />
        </section>

        {/* 5. KABAR UNIT (KMI & SMP) */}
        <section style={{ marginTop: '50px' }}>
          <UnitNews />
        </section>

        {/* 6. KONTEN VIDEO */}
        <section style={{ marginTop: '50px', marginBottom: '20px' }}>
          {/* FIX: Mengirimkan videoData untuk mencegah build error */}
          <VideoSection videos={videoData || []} />
        </section>

        {/* 7. BOTTOM LAYOUT */}
        <div className="bottom-layout-grid" style={{ marginTop: '50px' }}>
          <section className="main-content">
            <h2 className="section-title">
              Postingan <span style={{ color: 'var(--dt-gold)' }}>Terbaru</span>
            </h2>
            <LatestPosts searchParams={sParams} />
          </section>

          <aside className="sidebar-dakwah">
            {/* Khutbah ditarik secara dinamis dari kategori 'khutbah' */}
            <KhutbahSidebar articles={khutbahData || []} />
            <InfoDakwah />
          </aside>
        </div>

      </div>
    </div>
  );
}