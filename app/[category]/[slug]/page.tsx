// app/[category]/[slug]/page.tsx
import { getSinglePost, getRelatedPosts, getPopularPosts } from "@/lib/sanity.query"; 
import { PortableText } from "@portabletext/react";
import urlBuilder from "@sanity/image-url";
import { client } from "@/lib/sanity.client";
import Link from "next/link";
import BlogSidebar from "@/components/BlogSidebar"; 
import SocialShare from "@/components/SocialShare"; // Import Komponen Share
import { Clock, Eye, BookOpen, CalendarDays } from "lucide-react"; 

const builder = urlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

/**
 * FUNGSI ESTIMASI DURASI BACA
 */
function getReadingTime(body: any[]) {
  if (!body) return 0;
  const text = body
    .map(block => block._type === 'block' ? block.children.map((c: any) => c.text).join('') : '')
    .join(' ');
  const wordsPerMinute = 200;
  const words = text.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

const ptComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) return null;
      return (
        <div style={{ margin: '35px 0', textAlign: 'center' }}>
          <img
            src={urlFor(value).fit('max').auto('format').url()}
            alt={value.alt || "Gambar Konten"}
            style={{ borderRadius: '15px', maxWidth: '100%', height: 'auto', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}
          />
          {value.caption && (
            <p style={{ fontSize: '14px', color: '#666', marginTop: '15px', fontStyle: 'italic' }}>
              {value.caption}
            </p>
          )}
        </div>
      );
    },
  },
  block: {
    normal: ({ children }: any) => {
      const isArabic = /[\u0600-\u06FF]/.test(children[0]);
      return (
        <p style={{ 
          marginBottom: isArabic ? '2.5rem' : '1.8rem', 
          lineHeight: isArabic ? '2.5' : '1.8', 
          fontSize: isArabic ? '28px' : '18px', 
          color: '#1e293b',
          fontFamily: isArabic ? 'var(--font-amiri), serif' : 'inherit',
          direction: isArabic ? 'rtl' : 'ltr',
          textAlign: isArabic ? 'right' : 'left'
        }}>
          {children}
        </p>
      );
    },
    h2: ({ children }: any) => (
      <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem', color: '#1e2f65', fontSize: '26px', fontWeight: '900' }}>
        {children}
      </h2>
    ),
    blockquote: ({ children }: any) => (
      <blockquote style={{ 
        borderLeft: '5px solid #f9c80e', 
        padding: '30px', 
        backgroundColor: '#f8fafc', 
        margin: '45px 0',
        fontFamily: 'var(--font-amiri), serif',
        fontSize: '30px',
        lineHeight: '2.8',
        direction: 'rtl',
        textAlign: 'center',
        borderRadius: '15px',
        boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)'
      }}>
        {children}
      </blockquote>
    ),
  },
};

export default async function PostDetail({ 
  params 
}: { 
  params: Promise<{ category: string, slug: string }> 
}) {
  const { category, slug } = await params;

  const [post, relatedPosts, popularData] = await Promise.all([
    getSinglePost(slug),
    getRelatedPosts(category, slug),
    getPopularPosts() 
  ]);

  if (!post) return <div style={{ padding: '100px', textAlign: 'center', fontWeight: 'bold' }}>Halaman tidak ditemukan.</div>;

  const readingTime = getReadingTime(post.body);
  const shareUrl = `https://daruttaqwabanyumas.com/${category}/${slug}`;
  const fileUrl = post.attachmentUrl;
  const isPdf = fileUrl?.toLowerCase().endsWith('.pdf');

  return (
    <div className="detail-layout-container" style={{ maxWidth: '1250px', margin: '40px auto', padding: '0 25px', display: 'grid', gridTemplateColumns: '1fr 350px', gap: '50px' }}>
      
      <article>
        {/* BREADCRUMB */}
        <nav style={{ fontSize: '12px', fontWeight: '700', color: '#94a3b8', marginBottom: '25px', textTransform: 'uppercase', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Link href="/" style={{ textDecoration: 'none', color: '#94a3b8' }}>Home</Link>
          <span>/</span>
          <Link href={`/${category}`} style={{ textDecoration: 'none', color: '#1e2f65' }}>{category}</Link>
        </nav>

        <header style={{ marginBottom: '40px' }}>
          <h1 style={{ fontSize: '38px', fontWeight: '900', lineHeight: '1.2', marginBottom: '25px', color: '#0f172a', letterSpacing: '-0.5px' }}>
            {post.title}
          </h1>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', paddingBottom: '30px', borderBottom: '2px solid #f1f5f9' }}>
            <img src="/logo.png" alt="Admin" style={{ width: '55px', height: '55px', borderRadius: '50%', border: '2px solid #f9c80e', padding: '2px' }} />
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <span style={{ fontWeight: '800', color: '#1e2f65', fontSize: '17px' }}>{post.author || "Admin"}</span>
              
              {/* METADATA ROW */}
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '15px', color: '#64748b', fontSize: '12px', fontWeight: '600' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <CalendarDays size={14} color="#1e2f65" />
                  <span>{new Date(post.publishedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Clock size={14} color="#1e2f65" />
                  <span>Pukul {new Date(post.publishedAt).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })} WIB</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <BookOpen size={14} color="#1e2f65" />
                  <span>{readingTime} Menit Baca</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Eye size={14} color="#f9c80e" />
                  <span style={{ color: '#1e2f65' }}>{post.views || 0} Dilihat</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {post.image && (
          <img src={post.image} alt="" style={{ width: '100%', borderRadius: '20px', marginBottom: '40px', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }} />
        )}

        <div className="article-content">
          {post.body && <PortableText value={post.body} components={ptComponents} />}
        </div>

        {/* WIDGET SHARE: Taruh di sini Aris */}
        <SocialShare shareUrl={shareUrl} title={post.title} />

        {/* ATTACHMENT SECTION */}
        {fileUrl && (
          <div style={{ margin: '50px 0', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }}>
            <div style={{ padding: '20px 25px', background: '#f8fafc', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: '800', color: '#1e2f65' }}>📄 {post.attachmentDescription || "Lampiran Materi"}</span>
              <a href={fileUrl} className="btn-sultan" style={{ background: '#1a9c69', color: '#fff', padding: '10px 20px', borderRadius: '10px', textDecoration: 'none', fontWeight: '800', fontSize: '13px' }}>DOWNLOAD</a>
            </div>
            <iframe src={isPdf ? fileUrl : `https://docs.google.com/gview?url=${fileUrl}&embedded=true`} width="100%" height="600px" style={{ border: 'none' }} />
          </div>
        )}

        <hr style={{ margin: '60px 0', border: '0', borderTop: '2px solid #f1f5f9' }} />

        {/* POSTINGAN TERKAIT */}
        {relatedPosts && relatedPosts.length > 0 && (
          <section style={{ marginBottom: '60px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
               <div style={{ width: '5px', height: '25px', background: '#1e2f65', borderRadius: '10px' }}></div>
               <h3 style={{ fontSize: '20px', fontWeight: '900', color: '#1e2f65', textTransform: 'uppercase', margin: 0 }}>Mungkin Anda Suka</h3>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px' }}>
              {relatedPosts.slice(0, 3).map((rel: any) => (
                <Link href={`/${category}/${rel.slug}`} key={rel._id} className="related-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ width: '100%', aspectRatio: '16/10', borderRadius: '15px', overflow: 'hidden', marginBottom: '15px', background: '#f1f5f9' }}>
                    <img src={rel.image || "/logo.png"} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: '0.5s' }} className="rel-img" />
                  </div>
                  <h4 style={{ fontSize: '15px', fontWeight: '800', lineHeight: '1.4', color: '#334155', margin: 0 }}>{rel.title}</h4>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>

      {/* SIDEBAR STICKY */}
      <aside style={{ position: 'sticky', top: '40px', alignSelf: 'start' }} className="hide-on-mobile">
        <BlogSidebar popularPosts={popularData} />
      </aside>

      <style dangerouslySetInnerHTML={{ __html: `
        .related-card { transition: 0.3s; }
        .related-card:hover { transform: translateY(-8px); }
        .related-card:hover h4 { color: #1e2f65; }
        .related-card:hover .rel-img { transform: scale(1.1); }
        .btn-sultan:hover { background: #158055 !important; box-shadow: 0 10px 20px rgba(26,156,105,0.2); }
        @media (max-width: 1024px) {
          .detail-layout-container { grid-template-columns: 1fr !important; }
          .hide-on-mobile { display: none; }
        }
        @media (max-width: 768px) {
          h1 { fontSize: 28px !important; }
          div[style*="gridTemplateColumns: repeat(3, 1fr)"] { grid-template-columns: 1fr !important; }
          iframe { height: 400px !important; }
        }
      `}} />
    </div>
  );
}