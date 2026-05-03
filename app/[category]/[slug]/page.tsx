// app/[category]/[slug]/page.tsx

import { getSinglePost, getRelatedPosts, getPopularPosts } from "@/lib/sanity.query"; 
import { PortableText } from "@portabletext/react";
import urlBuilder from "@sanity/image-url";
import { client } from "@/lib/sanity.client";
import Link from "next/link";
import BlogSidebar from "@/components/BlogSidebar"; 
import SocialShare from "@/components/SocialShare"; 
import { Clock, Eye, CalendarDays } from "lucide-react"; 
import RegistrationCTA from "@/components/RegistrationCTA";
import { notFound } from "next/navigation";
import { Metadata } from "next";

const builder = urlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

// Fungsi Helper untuk mendapatkan ID YouTube
function getYoutubeID(url: string) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url?.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getSinglePost(slug);
  if (!post) return { title: "Artikel Tidak Ditemukan" };

  const videoId = post.youtubeUrl ? getYoutubeID(post.youtubeUrl) : null;
  const ogImage = post.image || (videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : "/logo.png");

  return {
    title: `${post.title} - Darut Taqwa Banyumas`,
    description: post.excerpt || `Baca artikel lengkap tentang ${post.title} di website resmi Darut Taqwa Banyumas.`,
    openGraph: {
      title: post.title,
      images: [ogImage],
    },
  };
}

function getReadingTime(body: any[]) {
  if (!body || !Array.isArray(body)) return 0;
  const text = body
    .filter(block => block._type === 'block')
    .map(block => block.children?.map((c: any) => c.text || '').join('') || '')
    .join(' ');
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
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
    // SUPPORT YOUTUBE EMBED DI DALAM BODY
    youtube: ({ value }: any) => {
      const id = getYoutubeID(value.url);
      if (!id) return null;
      return (
        <div style={{ margin: '35px 0', aspectRatio: '16/9', width: '100%' }}>
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${id}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
          ></iframe>
        </div>
      );
    },
  },
  block: {
    normal: ({ children }: any) => {
      const isArabic = Array.isArray(children) && children.some(child => 
        typeof child === 'string' && /[\u0600-\u06FF]/.test(child)
      );

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

  if (!post) return notFound();

  const readingTime = getReadingTime(post.body);
  const shareUrl = `https://daruttaqwabanyumas.com/${category}/${slug}`;
  const publishedDate = post.publishedAt ? new Date(post.publishedAt) : new Date();
  
  // Logika Thumbnail Otomatis
  const videoId = post.youtubeUrl ? getYoutubeID(post.youtubeUrl) : null;
  const headerImage = post.image || (videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null);

  return (
    <div 
      className="detail-layout-container" 
      style={{ 
        maxWidth: '1250px', 
        margin: '40px auto', 
        padding: '0 25px', 
        display: 'grid', 
        gridTemplateColumns: '1fr 340px', 
        gap: '50px',
        alignItems: 'start'
      }}
    >
      
      <article style={{ minWidth: 0 }}>
        <nav style={{ fontSize: '12px', fontWeight: '700', color: '#94a3b8', marginBottom: '25px', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Link href="/" style={{ color: '#94a3b8' }}>Home</Link>
          <span>/</span>
          <Link href={`/${category}`} style={{ color: '#1e2f65' }}>{category}</Link>
        </nav>

        <header style={{ marginBottom: '40px' }}>
          <h1 style={{ fontSize: '38px', fontWeight: '900', lineHeight: '1.2', marginBottom: '25px', color: '#0f172a' }}>
            {post.title}
          </h1>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', paddingBottom: '30px', borderBottom: '2px solid #f1f5f9' }}>
            <img src={post.authorImage || "/logo.png"} alt="Author" style={{ width: '55px', height: '55px', borderRadius: '50%', border: '2px solid #f9c80e', padding: '2px', objectFit: 'cover' }} />
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <span style={{ fontWeight: '800', color: '#1e2f65', fontSize: '17px' }}>{post.authorName || "Admin Darut Taqwa"}</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '15px', color: '#64748b', fontSize: '12px', fontWeight: '600' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <CalendarDays size={14} color="#1e2f65" />
                  <span>{publishedDate.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Clock size={14} color="#1e2f65" />
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

        {/* Gambar Utama / YouTube Thumbnail */}
        {headerImage && (
          <div style={{ marginBottom: '40px', position: 'relative' }}>
            <img 
              src={headerImage} 
              alt={post.title} 
              style={{ width: '100%', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }} 
            />
            {videoId && !post.image && (
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(255,255,255,0.9)', borderRadius: '50%', padding: '15px', boxShadow: '0 0 30px rgba(0,0,0,0.2)' }}>
                    <div style={{ width: 0, height: 0, borderTop: '15px solid transparent', borderBottom: '15px solid transparent', borderLeft: '25px solid #1e2f65', marginLeft: '5px' }}></div>
                </div>
            )}
          </div>
        )}

        <div className="article-content">
          {post.body && <PortableText value={post.body} components={ptComponents} />}
        </div>

        <div style={{ margin: '60px 0' }}>
          <RegistrationCTA />
        </div>

        <SocialShare shareUrl={shareUrl} title={post.title} />

        <hr style={{ margin: '60px 0', border: '0', borderTop: '2px solid #f1f5f9' }} />

        {relatedPosts && relatedPosts.length > 0 && (
          <section style={{ marginBottom: '60px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: '900', color: '#1e2f65', textTransform: 'uppercase', marginBottom: '30px', borderLeft: '5px solid #1e2f65', paddingLeft: '15px' }}>Mungkin Anda Suka</h3>
            <div className="related-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px' }}>
              {relatedPosts.slice(0, 3).map((rel: any) => (
                <Link href={`/${category}/${rel.slug}`} key={rel._id} className="related-card">
                  <div style={{ width: '100%', aspectRatio: '16/10', borderRadius: '15px', overflow: 'hidden', marginBottom: '15px', background: '#f1f5f9' }}>
                    <img src={rel.image || "/logo.png"} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <h4 style={{ fontSize: '15px', fontWeight: '800', lineHeight: '1.4', color: '#334155' }}>{rel.title}</h4>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>

      <aside 
        className="hide-on-mobile"
        style={{ 
          position: 'sticky', 
          top: '100px', 
          alignSelf: 'start',
          height: 'fit-content',
          minWidth: 0,
          zIndex: 10
        }}
      >
        <BlogSidebar popularPosts={popularData} />
      </aside>

      <style dangerouslySetInnerHTML={{ __html: `
        .related-card { transition: 0.3s; text-decoration: none; }
        .related-card:hover { transform: translateY(-8px); }
        .related-card:hover h4 { color: #1e2f65; }
        .article-content img { margin: 2rem 0; }
        @media (max-width: 1024px) {
          .detail-layout-container { grid-template-columns: 1fr !important; }
          .hide-on-mobile { display: none !important; }
        }
        @media (max-width: 768px) {
          .related-grid { grid-template-columns: 1fr !important; }
        }
      `}} />
    </div>
  );
}