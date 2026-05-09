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

// ======================================
// FORCE DYNAMIC
// ======================================
export const dynamic = "force-dynamic";

// ======================================
// PAGE
// ======================================
export default async function Home({
  searchParams,
}: {
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
}) {

  // ======================================
  // FETCH DATA PARALEL
  // ======================================
  const [
    khutbahData,
    videoData,
    newsData,
    popularData,
    unitData,
    allPosts,
  ] = await Promise.all([
    getKhutbahPosts(),
    getVideoPosts(),
    getNewsPosts(),
    getPopularPosts(),
    getUnits(),
    getAllPosts(),
  ]);

  return (
    <div className="home-wrapper">

      <div className="container">

        {/* ================================= */}
        {/* TOP NEWS */}
        {/* ================================= */}
        <section
          style={{
            marginTop: "20px",
          }}
        >
          <TopNews posts={newsData || []} />
        </section>

        {/* ================================= */}
        {/* MAIN GRID */}
        {/* ================================= */}
        <div className="main-grid">

          {/* MAIN */}
          <main className="main-content">
            <Headline posts={newsData || []} />
          </main>

          {/* SIDEBAR */}
          <aside className="hide-on-mobile">
            <PopularSidebar
              popularPosts={popularData || []}
            />
          </aside>

        </div>

        {/* ================================= */}
        {/* REKOMENDASI */}
        {/* ================================= */}
        <section
          style={{
            marginTop: "40px",
          }}
        >
          <RecommendationSection
            posts={allPosts || []}
          />
        </section>

        {/* ================================= */}
        {/* UNIT PROGRAMS */}
        {/* ================================= */}
        <section
          style={{
            marginTop: "60px",
            marginBottom: "60px",
          }}
        >
          <UnitPrograms
            units={unitData || []}
          />
        </section>

        {/* ================================= */}
        {/* UNIT NEWS */}
        {/* ================================= */}
        <section
          style={{
            marginTop: "50px",
          }}
        >
          <UnitNews />
        </section>

        {/* ================================= */}
        {/* VIDEO SECTION */}
        {/* ================================= */}
        <section
          style={{
            marginTop: "50px",
            marginBottom: "20px",
          }}
        >
          <VideoSection
            videos={videoData || []}
          />
        </section>

        {/* ================================= */}
        {/* BOTTOM GRID */}
        {/* ================================= */}
        <div
          className="bottom-layout-grid"
          style={{
            marginTop: "50px",
          }}
        >

          {/* LEFT */}
          <section className="main-content">

            <h2 className="section-title">
              Postingan{" "}
              <span
                style={{
                  color: "var(--dt-gold)",
                }}
              >
                Terbaru
              </span>
            </h2>

            <LatestPosts
              searchParams={searchParams}
            />

          </section>

          {/* RIGHT */}
          <aside className="sidebar-dakwah">

            <KhutbahSidebar
              articles={khutbahData || []}
            />

            <InfoDakwah />

          </aside>

        </div>

      </div>

    </div>
  );
}