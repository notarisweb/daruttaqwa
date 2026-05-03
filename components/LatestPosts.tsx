// components/LatestPosts.tsx
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Eye, CalendarDays, ArrowRight } from "lucide-react";

// Helper untuk deteksi Thumbnail YouTube (Konsistensi Global)
function getYoutubeThumb(url: string) {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  const id = (match && match[2].length === 11) ? match[2] : null;
  return id ? `https://img.youtube.com/vi/${id}/mqdefault.jpg` : null;
}

async function getPaginatedPosts(page: number) {
  const limit = 5;
  const start = (page - 1) * limit;
  const end = start + limit;

  // QUERY TERBARU: Mendukung Reference Category & YouTube URL
  const query = groq`*[_type == "post"] | order(publishedAt desc) [$start...$end] {
    _id,
    title,
    "slug": slug.current,
    youtubeUrl,
    "image": mainImage.asset->url,
    "publishedAt": publishedAt,
    "category": category->title,
    "categorySlug": category->slug.current,
    "views": coalesce(views, 0)
  }`;

  return client.fetch(query, { start, end: end + 1 }, { next: { revalidate: 0 } });
}

export default async function LatestPosts({ 
  searchParams 
}: { 
  searchParams: any 
}) {
  const sParams = await searchParams;
  const currentPage = Number(sParams?.page) || 1;
  
  const allFetchedPosts = await getPaginatedPosts(currentPage);
  const posts = allFetchedPosts.slice(0, 5);
  const hasNextPage = allFetchedPosts.length > 5;

  return (
    <section className="latest-posts-wrapper">
      <div className="posts-stack-vertical">
        {posts.map((post: any) => {
          // Navigasi URL berdasarkan slug kategori dinamis
          const categoryPath = post.categorySlug || "berita";
          
          // Logika Thumbnail: Gambar Manual > YouTube Thumb > Placeholder
          const displayImage = post.image || getYoutubeThumb(post.youtubeUrl) || "/logo.png";
          
          return (
            <Link 
              href={`/${categoryPath}/${post.slug}`} 
              key={post._id} 
              className="post-item-clean group"
            >
              {/* THUMBNAIL KIRI */}
              <div className="visual-box">
                <Image 
                  src={displayImage} 
                  alt={post.title} 
                  fill
                  sizes="200px"
                  className="object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                {post.youtubeUrl && !post.image && (
                   <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ width: '30px', height: '30px', background: 'rgba(255,255,255,0.9)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                         <div style={{ width: 0, height: 0, borderTop: '6px solid transparent', borderBottom: '6px solid transparent', borderLeft: '10px solid #1e2f65', marginLeft: '2px' }}></div>
                      </div>
                   </div>
                )}
              </div>

              {/* KONTEN KANAN */}
              <div className="text-box">
                <span className="cat-text">{post.category || "Berita"}</span>
                <h3 className="title-text">{post.title}</h3>
                
                <div className="meta-row">
                  <div className="meta-item">
                    <CalendarDays size={14} />
                    <span>
                      {new Date(post.publishedAt).toLocaleDateString('id-ID', {
                        day: 'numeric', month: 'long', year: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="meta-dot"></div>
                  <div className="meta-item views">
                    <Eye size={14} />
                    <span>{post.views} View</span>
                  </div>
                </div>
              </div>
              
              <div className="arrow-box">
                 <ArrowRight size={22} />
              </div>
            </Link>
          );
        })}

        {posts.length === 0 && (
           <div className="empty-box">Belum ada postingan terbaru saat ini.</div>
        )}
      </div>

      {/* PAGINATION */}
      <div className="pagination-wrapper">
        <div className="nav-pill">
          {currentPage > 1 ? (
            <Link href={`?page=${currentPage - 1}`} className="nav-btn active">
              <ChevronLeft size={16} /> Prev
            </Link>
          ) : (
            <div className="nav-btn disabled"><ChevronLeft size={16} /> Prev</div>
          )}

          <div className="page-info">
              <span className="num">{currentPage}</span>
          </div>

          {hasNextPage ? (
            <Link href={`?page=${currentPage + 1}`} className="nav-btn active">
              Next <ChevronRight size={16} />
            </Link>
          ) : (
            <div className="nav-btn disabled">Next <ChevronRight size={16} /></div>
          )}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .latest-posts-wrapper { width: 100%; }
        .posts-stack-vertical { display: flex; flex-direction: column; width: 100%; }
        
        .post-item-clean { 
          display: flex; 
          align-items: center; 
          gap: 25px; 
          padding: 25px 0; 
          border-bottom: 1px solid #f1f5f9; 
          text-decoration: none; 
          transition: all 0.3s ease;
        }

        .post-item-clean:last-child { border-bottom: none; }
        .post-item-clean:hover { padding-left: 10px; }

        .visual-box { 
          width: 180px; height: 115px; 
          border-radius: 14px; overflow: hidden; 
          flex-shrink: 0; position: relative; background: #f8fafc;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }

        .text-box { flex: 1; min-width: 0; }
        
        .cat-text { 
          font-size: 11px; font-weight: 800; color: #1a9c69; 
          text-transform: uppercase; letter-spacing: 0.8px; display: block; margin-bottom: 6px;
        }

        .title-text { 
          font-size: 19px; font-weight: 800; color: #1e2f65; 
          margin-bottom: 10px; line-height: 1.3;
          display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
          transition: color 0.3s ease;
        }

        .post-item-clean:hover .title-text { color: #1a9c69; }

        .meta-row { display: flex; align-items: center; gap: 15px; }
        .meta-item { display: flex; align-items: center; gap: 6px; font-size: 12px; color: #94a3b8; font-weight: 600; }
        .meta-item.views { color: #f9c80e; }
        .meta-dot { width: 4px; height: 4px; background: #cbd5e1; border-radius: 50%; }

        .arrow-box { color: #e2e8f0; transition: 0.3s; margin-right: 10px; }
        .post-item-clean:hover .arrow-box { color: #1e2f65; transform: translateX(5px); }

        .pagination-wrapper { margin-top: 50px; display: flex; justify-content: center; }
        .nav-pill { display: flex; align-items: center; background: #fff; padding: 8px; border-radius: 50px; border: 1px solid #f1f5f9; box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
        .nav-btn { display: flex; align-items: center; gap: 6px; padding: 10px 24px; border-radius: 50px; font-size: 13px; font-weight: 800; text-decoration: none; transition: 0.3s; }
        .nav-btn.active { background: #1e2f65; color: #fff; }
        .nav-btn.active:hover { background: #1a9c69; }
        .nav-btn.disabled { color: #cbd5e1; cursor: not-allowed; }
        .page-info { padding: 0 20px; font-weight: 900; color: #1e2f65; font-size: 16px; border-left: 1px solid #f1f5f9; border-right: 1px solid #f1f5f9; }

        @media (max-width: 600px) {
          .post-item-clean { gap: 15px; padding: 20px 0; }
          .visual-box { width: 110px; height: 75px; border-radius: 10px; }
          .title-text { font-size: 14px; }
          .arrow-box { display: none; }
        }
      `}} />
    </section>
  );
}