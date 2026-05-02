// components/LatestPosts.tsx
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Eye, CalendarDays, ArrowRight } from "lucide-react";

async function getPaginatedPosts(page: number) {
  const limit = 5;
  const start = (page - 1) * limit;
  const end = start + limit;

  const query = groq`*[_type in ["post", "jadwalKajian"]] | order(coalesce(publishedAt, _createdAt) desc) [$start...$end] {
    _id,
    "title": coalesce(title, tema), 
    "slug": slug.current,
    "image": coalesce(flyerImage.asset->url, mainImage.asset->url),
    "publishedAt": coalesce(publishedAt, _createdAt),
    "category": coalesce(category, categories[0]->title, "Jadwal Kajian"),
    "views": coalesce(views, 0)
  }`;

  return client.fetch(query, { start, end: end + 1 }, { cache: 'no-store' });
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
          const categoryPath = post.category?.toLowerCase().replace(/\s+/g, '-') || "artikel";
          
          return (
            <Link 
              href={`/${categoryPath}/${post.slug}`} 
              key={post._id} 
              className="post-item-clean group"
            >
              {/* THUMBNAIL KIRI - UKURAN DIPERBESAR */}
              <div className="visual-box">
                <Image 
                  src={post.image || "/logo-md.png"} 
                  alt={post.title} 
                  fill
                  sizes="200px"
                  className="object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>

              {/* KONTEN KANAN */}
              <div className="text-box">
                <span className="cat-text">{post.category}</span>
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
                    <span>{post.views || 0} View</span>
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
           <div className="empty-box">Belum ada postingan terbaru.</div>
        )}
      </div>

      {/* PAGINATION PILL */}
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

        /* UKURAN VISUAL BOX DIPERBESAR */
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

        /* FONT JUDUL DIPERBESAR */
        .title-text { 
          font-size: 20px; font-weight: 800; color: #1e2f65; 
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

        .empty-box { text-align: center; padding: 50px; color: #94a3b8; border: 2px dashed #f1f5f9; border-radius: 16px; }

        @media (max-width: 600px) {
          .post-item-clean { gap: 15px; padding: 20px 0; }
          .visual-box { width: 120px; height: 85px; }
          .title-text { font-size: 15px; }
          .arrow-box { display: none; }
        }
      `}} />
    </section>
  );
}