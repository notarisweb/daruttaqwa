// app/[category]/[slug]/page.tsx

import {
  getSinglePost,
  getRelatedPosts,
  getPopularPosts,
} from "@/lib/sanity.query";

import { PortableText } from "@portabletext/react";
import urlBuilder from "@sanity/image-url";
import { client } from "@/lib/sanity.client";

import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import BlogSidebar from "@/components/BlogSidebar";
import SocialShare from "@/components/SocialShare";
import RegistrationCTA from "@/components/RegistrationCTA";

import {
  Clock,
  Eye,
  CalendarDays,
} from "lucide-react";

// ======================================
// SANITY IMAGE BUILDER
// ======================================
const builder = urlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

// ======================================
// YOUTUBE ID HELPER
// ======================================
function getYoutubeID(url: string) {
  if (!url) return null;

  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;

  const match = url.match(regExp);

  return match && match[2].length === 11
    ? match[2]
    : null;
}

// ======================================
// READING TIME
// ======================================
function getReadingTime(body: any[]) {
  if (!body || !Array.isArray(body)) return 0;

  const text = body
    .filter((block) => block._type === "block")
    .map((block) =>
      block.children
        ?.map((child: any) => child.text || "")
        .join("")
    )
    .join(" ");

  const words = text.trim().split(/\s+/).length;

  const wordsPerMinute = 200;

  return Math.max(
    1,
    Math.ceil(words / wordsPerMinute)
  );
}

// ======================================
// METADATA
// ======================================
export async function generateMetadata({
  params,
}: {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}): Promise<Metadata> {

  const { slug } = await params;

  const post = await getSinglePost(slug);

  if (!post) {
    return {
      title: "Artikel Tidak Ditemukan",
    };
  }

  const videoId = post.youtubeUrl
    ? getYoutubeID(post.youtubeUrl)
    : null;

  const ogImage =
    post.image ||
    (videoId
      ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
      : "/logo.png");

  return {
    title: `${post.title} - Darut Taqwa Banyumas`,

    description:
      post.excerpt ||
      `Baca artikel lengkap tentang ${post.title} di website resmi Darut Taqwa Banyumas.`,

    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [ogImage],
    },
  };
}

// ======================================
// PORTABLE TEXT COMPONENTS
// ======================================
const ptComponents = {

  types: {

    // ==================================
    // IMAGE
    // ==================================
    image: ({ value }: any) => {

      if (!value?.asset?._ref) return null;

      return (
        <div
          style={{
            margin: "40px 0",
          }}
        >

          {/* LANDSCAPE WRAPPER */}
          <div
            style={{
              width: "100%",
              aspectRatio: "16 / 9",

              overflow: "hidden",

              borderRadius: "20px",

              background: "#f1f5f9",

              boxShadow:
                "0 15px 35px rgba(0,0,0,0.06)",
            }}
          >
            <img
              src={urlFor(value)
                .width(1200)
                .height(675)
                .fit("crop")
                .auto("format")
                .url()}
              alt={
                value.alt ||
                "Gambar Artikel"
              }
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",

                objectFit: "cover",

                display: "block",
              }}
            />
          </div>

          {value.caption && (
            <p
              style={{
                marginTop: "14px",

                fontSize: "14px",

                color: "#64748b",

                textAlign: "center",

                fontStyle: "italic",

                lineHeight: "1.7",
              }}
            >
              {value.caption}
            </p>
          )}
        </div>
      );
    },

    // ==================================
    // YOUTUBE EMBED
    // ==================================
    youtube: ({ value }: any) => {

      const id = getYoutubeID(value?.url);

      if (!id) return null;

      return (
        <div
          style={{
            margin: "40px 0",

            width: "100%",

            aspectRatio: "16 / 9",
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${id}`}
            title="YouTube Video Player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              borderRadius: "20px",

              boxShadow:
                "0 15px 35px rgba(0,0,0,0.08)",
            }}
          />
        </div>
      );
    },
  },

  // ======================================
  // BLOCKS
  // ======================================
  block: {

    // ====================================
    // PARAGRAPH
    // ====================================
    normal: ({ children }: any) => {

      const isArabic =
        Array.isArray(children) &&
        children.some(
          (child: any) =>
            typeof child?.props?.children ===
              "string" &&
            /[\u0600-\u06FF]/.test(
              child.props.children
            )
        );

      return (
        <p
          style={{
            marginBottom: isArabic
              ? "2.8rem"
              : "1.9rem",

            lineHeight: isArabic
              ? "2.5"
              : "1.9",

            fontSize: isArabic
              ? "30px"
              : "18px",

            color: "#1e293b",

            fontFamily: isArabic
              ? "var(--font-amiri), serif"
              : "inherit",

            direction: isArabic
              ? "rtl"
              : "ltr",

            textAlign: isArabic
              ? "right"
              : "left",
          }}
        >
          {children}
        </p>
      );
    },

    // ====================================
    // H2
    // ====================================
    h2: ({ children }: any) => (
      <h2
        style={{
          marginTop: "3rem",
          marginBottom: "1.5rem",

          fontSize: "28px",

          fontWeight: "900",

          lineHeight: "1.3",

          color: "#1e2f65",
        }}
      >
        {children}
      </h2>
    ),
  },
};

// ======================================
// PAGE
// ======================================
export default async function PostDetail({
  params,
}: {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}) {

  const { category, slug } =
    await params;

  // ====================================
  // FETCH POST + POPULAR
  // ====================================
  const [
    post,
    popularPosts,
  ] = await Promise.all([
    getSinglePost(slug),
    getPopularPosts(),
  ]);

  // ====================================
  // NOT FOUND
  // ====================================
  if (!post) {
    return notFound();
  }

  // ====================================
  // RELATED POSTS
  // ====================================
  const relatedPosts =
    await getRelatedPosts(
      post.categorySlug,
      slug
    );

  // ====================================
  // READING TIME
  // ====================================
  const readingTime = getReadingTime(
    post.body
  );

  // ====================================
  // SHARE URL
  // ====================================
  const shareUrl = `https://daruttaqwabanyumas.com/${category}/${slug}`;

  // ====================================
  // DATE
  // ====================================
  const publishedDate = post.publishedAt
    ? new Date(post.publishedAt)
    : new Date();

  // ====================================
  // HEADER IMAGE
  // ====================================
  const videoId = post.youtubeUrl
    ? getYoutubeID(post.youtubeUrl)
    : null;

  const headerImage =
    post.image ||
    (videoId
      ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
      : null);

  return (
    <div
      className="detail-layout-container"
      style={{
        maxWidth: "1250px",

        margin: "40px auto",

        padding: "0 24px",

        display: "grid",

        gridTemplateColumns:
          "1fr 340px",

        gap: "50px",

        alignItems: "start",
      }}
    >

      {/* ================================= */}
      {/* ARTICLE */}
      {/* ================================= */}
      <article style={{ minWidth: 0 }}>

        {/* BREADCRUMB */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",

            marginBottom: "25px",

            fontSize: "12px",

            fontWeight: "700",

            textTransform: "uppercase",

            color: "#94a3b8",
          }}
        >
          <Link
            href="/"
            style={{
              color: "#94a3b8",
            }}
          >
            Home
          </Link>

          <span>/</span>

          <Link
            href={`/${category}`}
            style={{
              color: "#1e2f65",
            }}
          >
            {category}
          </Link>
        </nav>

        {/* HEADER */}
        <header
          style={{
            marginBottom: "40px",
          }}
        >

          <h1
            style={{
              fontSize: "42px",

              fontWeight: "900",

              lineHeight: "1.2",

              marginBottom: "25px",

              color: "#0f172a",
            }}
          >
            {post.title}
          </h1>

          {/* AUTHOR */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",

              paddingBottom: "30px",

              borderBottom:
                "2px solid #f1f5f9",
            }}
          >

            <img
              src={
                post.authorImage ||
                "/logo.png"
              }
              alt="Author"
              style={{
                width: "55px",
                height: "55px",

                borderRadius: "50%",

                border:
                  "2px solid #f9c80e",

                padding: "2px",

                objectFit: "cover",
              }}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >

              <span
                style={{
                  fontSize: "17px",

                  fontWeight: "800",

                  color: "#1e2f65",
                }}
              >
                {post.authorName ||
                  "Admin Darut Taqwa"}
              </span>

              {/* META */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",

                  alignItems: "center",

                  gap: "15px",

                  fontSize: "12px",

                  fontWeight: "600",

                  color: "#64748b",
                }}
              >

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <CalendarDays
                    size={14}
                    color="#1e2f65"
                  />

                  <span>
                    {publishedDate.toLocaleDateString(
                      "id-ID",
                      {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      }
                    )}
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <Clock
                    size={14}
                    color="#1e2f65"
                  />

                  <span>
                    {readingTime} Menit
                    Baca
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <Eye
                    size={14}
                    color="#f9c80e"
                  />

                  <span
                    style={{
                      color: "#1e2f65",
                    }}
                  >
                    {post.views || 0} Dilihat
                  </span>
                </div>

              </div>
            </div>
          </div>
        </header>

        {/* HERO IMAGE */}
        {headerImage && (

          <div
            style={{
              marginBottom: "45px",

              position: "relative",
            }}
          >

            <div
              style={{
                width: "100%",

                aspectRatio: "16 / 9",

                overflow: "hidden",

                borderRadius: "24px",

                background: "#f1f5f9",

                boxShadow:
                  "0 20px 45px rgba(0,0,0,0.08)",
              }}
            >
              <img
                src={headerImage}
                alt={post.title}
                style={{
                  width: "100%",

                  height: "100%",

                  objectFit: "cover",

                  display: "block",
                }}
              />
            </div>

            {videoId && !post.image && (
              <div
                style={{
                  position: "absolute",

                  top: "50%",
                  left: "50%",

                  transform:
                    "translate(-50%, -50%)",

                  background:
                    "rgba(255,255,255,0.92)",

                  borderRadius: "999px",

                  padding: "18px",

                  backdropFilter:
                    "blur(10px)",

                  boxShadow:
                    "0 0 40px rgba(0,0,0,0.25)",
                }}
              >
                <div
                  style={{
                    width: 0,
                    height: 0,

                    borderTop:
                      "16px solid transparent",

                    borderBottom:
                      "16px solid transparent",

                    borderLeft:
                      "28px solid #1e2f65",

                    marginLeft: "6px",
                  }}
                />
              </div>
            )}
          </div>
        )}

        {/* ARTICLE CONTENT */}
        <div className="article-content">
          {post.body && (
            <PortableText
              value={post.body}
              components={ptComponents}
            />
          )}
        </div>

        {/* CTA */}
        <div
          style={{
            margin: "60px 0",
          }}
        >
          <RegistrationCTA />
        </div>

        {/* SHARE */}
        <SocialShare
          shareUrl={shareUrl}
          title={post.title}
        />

        {/* DIVIDER */}
        <hr
          style={{
            margin: "60px 0",

            border: 0,

            borderTop:
              "2px solid #f1f5f9",
          }}
        />

        {/* RELATED POSTS */}
        {relatedPosts &&
          relatedPosts.length > 0 && (

          <section
            style={{
              marginBottom: "60px",
            }}
          >

            <h3
              style={{
                fontSize: "20px",

                fontWeight: "900",

                color: "#1e2f65",

                textTransform: "uppercase",

                marginBottom: "30px",

                borderLeft:
                  "5px solid #1e2f65",

                paddingLeft: "15px",
              }}
            >
              Mungkin Anda Suka
            </h3>

            <div
              className="related-grid"
              style={{
                display: "grid",

                gridTemplateColumns:
                  "repeat(3, 1fr)",

                gap: "25px",
              }}
            >

              {relatedPosts
                .slice(0, 3)
                .map((rel: any) => (

                  <Link
                    key={rel._id}
                    href={`/${post.categorySlug}/${rel.slug}`}
                    className="related-card"
                  >

                    <div
                      style={{
                        width: "100%",

                        aspectRatio:
                          "16 / 10",

                        overflow: "hidden",

                        borderRadius:
                          "18px",

                        background:
                          "#f1f5f9",

                        marginBottom:
                          "15px",
                      }}
                    >
                      <img
                        src={
                          rel.image ||
                          "/logo.png"
                        }
                        alt={rel.title}
                        style={{
                          width: "100%",
                          height: "100%",

                          objectFit:
                            "cover",

                          display:
                            "block",
                        }}
                      />
                    </div>

                    <h4
                      style={{
                        fontSize: "15px",

                        fontWeight: "800",

                        lineHeight: "1.5",

                        color: "#334155",
                      }}
                    >
                      {rel.title}
                    </h4>

                  </Link>
                ))}
            </div>
          </section>
        )}
      </article>

      {/* SIDEBAR */}
      <aside
        className="hide-on-mobile"
        style={{
          position: "sticky",

          top: "100px",

          alignSelf: "start",

          height: "fit-content",

          minWidth: 0,

          zIndex: 10,
        }}
      >
        <BlogSidebar
          popularPosts={popularPosts}
        />
      </aside>

      {/* CUSTOM STYLES */}
      <style
        dangerouslySetInnerHTML={{
          __html: `

            .related-card{
              text-decoration:none;
              transition:.3s;
            }

            .related-card:hover{
              transform:translateY(-8px);
            }

            .related-card:hover h4{
              color:#1e2f65;
            }

            @media (max-width:1024px){

              .detail-layout-container{
                grid-template-columns:1fr !important;
              }

              .hide-on-mobile{
                display:none !important;
              }
            }

            @media (max-width:768px){

              .detail-layout-container{
                padding:0 18px !important;
              }

              .related-grid{
                grid-template-columns:1fr !important;
              }

              article h1{
                font-size:32px !important;
              }
            }

          `,
        }}
      />
    </div>
  );
}