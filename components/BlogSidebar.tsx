// components/BlogSidebar.tsx

import React from "react";
import Link from "next/link";

export default function BlogSidebar({
  popularPosts = [],
}: {
  popularPosts?: any[];
}) {
  const headerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "20px",
  };

  const accentBarStyle = (
    color: string
  ): React.CSSProperties => ({
    width: "5px",
    height: "24px",
    backgroundColor: color,
    borderRadius: "2px",
  });

  const socialIconBase: React.CSSProperties = {
    width: "48px",
    height: "48px",
    borderRadius: "14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
    cursor: "pointer",
    border: "none",
    boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
    textDecoration: "none",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "25px",
        fontFamily: "Arial, sans-serif",
        width: "100%",
        marginTop: "100px",
      }}
    >
      {/* ====================================== */}
      {/* WIDGET 1: IKUTI KAMI */}
      {/* ====================================== */}
      <div
        style={{
          backgroundColor: "#fff",
          padding: "25px",
          borderRadius: "25px",
          border: "1px solid #f1f5f9",
          boxShadow: "0 10px 25px rgba(0,0,0,0.03)",
        }}
      >
        <div style={headerStyle}>
          <div style={accentBarStyle("#f9c80e")}></div>

          <h3
            style={{
              fontSize: "16px",
              fontWeight: "900",
              margin: 0,
              color: "#634211",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Ikuti Kami
          </h3>
        </div>

        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          {/* FACEBOOK */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            style={{
              ...socialIconBase,
              backgroundColor: "#1877F2",
            }}
          >
            <svg
              width="24"
              height="24"
              fill="#fff"
              viewBox="0 0 24 24"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>

          {/* INSTAGRAM */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            style={{
              ...socialIconBase,
              background:
                "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
            }}
          >
            <svg
              width="24"
              height="24"
              fill="#fff"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.627.074-2.736.331-3.708 1.304-.974.974-1.231 2.081-1.305 3.708C.014 8.332 0 8.741 0 12s.014 3.668.072 4.948c.074 1.627.331 2.735 1.305 3.708.973.973 2.081 1.231 3.708 1.305 1.279.058 1.688.072 4.947.072s3.668-.014 4.948-.072c1.627-.074 2.735-.331 3.708-1.305.973-.973 1.23-2.081 1.305-3.708.058-1.279.072-1.688.072-4.947s-.014-3.668-.072-4.947c-.074-1.627-.331-2.735-1.305-3.708-.973-.973-2.081-1.231-3.708-1.305-1.28-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          {/* TIKTOK */}
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            style={{
              ...socialIconBase,
              backgroundColor: "#000",
            }}
          >
            <svg
              width="22"
              height="22"
              fill="#fff"
              viewBox="0 0 24 24"
            >
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.33-.85.51-1.44 1.43-1.58 2.41-.14.96.13 1.92.7 2.63.61.8 1.53 1.3 2.5 1.39 1.12.13 2.27-.19 3.11-.97.7-.63 1.12-1.55 1.17-2.47.05-2.86.01-5.71.01-8.57 0-4.66 0-9.33 0-14z" />
            </svg>
          </a>

          {/* YOUTUBE */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            style={{
              ...socialIconBase,
              backgroundColor: "#FF0000",
            }}
          >
            <svg
              width="24"
              height="24"
              fill="#fff"
              viewBox="0 0 24 24"
            >
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.5-5.8zM9.6 15.5v-7l6.2 3.5-6.2 3.5z" />
            </svg>
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/628123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            style={{
              ...socialIconBase,
              backgroundColor: "#25D366",
            }}
          >
            <svg
              width="24"
              height="24"
              fill="#fff"
              viewBox="0 0 24 24"
            >
              <path d="M20.52 3.48A11.8 11.8 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.33-1.66a11.84 11.84 0 0 0 5.73 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.16-3.45-8.42zM12.07 21.8h-.01a9.8 9.8 0 0 1-4.99-1.36l-.36-.21-3.76.99 1-3.67-.24-.38a9.8 9.8 0 0 1-1.5-5.26c0-5.42 4.41-9.83 9.84-9.83 2.63 0 5.1 1.02 6.96 2.88a9.79 9.79 0 0 1 2.88 6.95c0 5.43-4.41 9.84-9.83 9.84zm5.39-7.36c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.79-1.68-2.09-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.08 4.49.71.3 1.27.48 1.7.62.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
            </svg>
          </a>
        </div>
      </div>

      {/* ====================================== */}
      {/* WIDGET 2: POPULER */}
      {/* ====================================== */}
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "15px",
          border: "1px solid #f0f0f0",
        }}
      >
        <div
          style={{
            ...headerStyle,
            borderBottom: "1px solid #eee",
            paddingBottom: "12px",
          }}
        >
          <div style={accentBarStyle("#1e2f65")}></div>

          <h3
            style={{
              fontSize: "15px",
              fontWeight: "900",
              margin: 0,
              color: "#1e2f65",
              textTransform: "uppercase",
            }}
          >
            Populer
          </h3>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          {popularPosts.length > 0 ? (
            popularPosts
              .slice(0, 5)
              .map((post: any, i: number) => (
                <Link
                  key={i}
                  href={`/${post.category}/${post.slug}`}
                  style={{
                    display: "flex",
                    gap: "12px",
                    textDecoration: "none",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "65px",
                      height: "65px",
                      borderRadius: "10px",
                      overflow: "hidden",
                      backgroundColor: "#f1f5f9",
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={post.image || "/logo.png"}
                      alt={post.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  <div style={{ minWidth: 0 }}>
                    <h4
                      style={{
                        fontSize: "13px",
                        fontWeight: "700",
                        color: "#334155",
                        margin: "0 0 4px 0",
                        lineHeight: "1.4",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {post.title}
                    </h4>

                    <span
                      style={{
                        fontSize: "11px",
                        color: "#94a3b8",
                      }}
                    >
                      {post.publishedAt
                        ? new Date(
                            post.publishedAt
                          ).toLocaleDateString(
                            "id-ID",
                            {
                              day: "numeric",
                              month: "short",
                            }
                          )
                        : "Terbaru"}
                    </span>
                  </div>
                </Link>
              ))
          ) : (
            <p
              style={{
                fontSize: "12px",
                color: "#999",
                fontStyle: "italic",
              }}
            >
              Belum ada data populer.
            </p>
          )}
        </div>
      </div>

      {/* ====================================== */}
      {/* WIDGET 3: DONASI */}
      {/* ====================================== */}
      <div
        style={{
          background:
            "linear-gradient(135deg, #1e2f65 0%, #15234d 100%)",
          padding: "25px",
          borderRadius: "20px",
          color: "#fff",
          textAlign: "center",
          boxShadow:
            "0 10px 20px rgba(30,47,101,0.2)",
        }}
      >
        <div
          style={{
            fontSize: "30px",
            marginBottom: "10px",
          }}
        >
          💛
        </div>

        <h3
          style={{
            fontSize: "18px",
            fontWeight: "800",
            marginBottom: "10px",
            color: "#f9c80e",
          }}
        >
          Infaq Jariyah
        </h3>

        <p
          style={{
            fontSize: "12px",
            lineHeight: "1.5",
            marginBottom: "20px",
            opacity: 0.9,
          }}
        >
          Dukung dakwah & pembangunan santri
          Darut Taqwa.
        </p>

        <Link
          href="/donasi"
          style={{
            display: "block",
            padding: "12px",
            backgroundColor: "#f9c80e",
            color: "#1e2f65",
            fontWeight: "800",
            borderRadius: "10px",
            textDecoration: "none",
            fontSize: "13px",
          }}
        >
          DONASI SEKARANG
        </Link>
      </div>

      {/* ====================================== */}
      {/* HOVER EFFECT */}
      {/* ====================================== */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          
          .social-btn:hover{
            transform:translateY(-6px) scale(1.05);
            filter:brightness(1.08);
            box-shadow:0 14px 24px rgba(0,0,0,0.18);
          }

        `,
        }}
      />
    </div>
  );
}