"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { client } from "@/lib/sanity.client"; 
import { urlFor } from "@/lib/sanity.image"; 
import { CalendarDays, ArrowRight } from "lucide-react";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage: any;
  publishedAt: string;
}

const UnitNews = () => {
  const [kmiPosts, setKmiPosts] = useState<Post[]>([]);
  const [smpPosts, setSmpPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Query mengambil 4 data terbaru
      const testQuery = `*[_type == "post"] | order(publishedAt desc) [0...4] {
        _id,
        title,
        slug,
        mainImage,
        publishedAt
      }`;

      try {
        const data = await client.fetch(testQuery);
        setKmiPosts(data);
        setSmpPosts(data);
      } catch (error) {
        console.error("Gagal mengambil data Sanity:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const NewsColumn = ({ title, posts, color, slug }: { title: string, posts: Post[], color: string, slug: string }) => {
    if (posts.length === 0 && !loading) {
      return (
        <div style={{ flex: 1, padding: '30px', border: '2px dashed #eee', borderRadius: '16px', textAlign: 'center' }}>
          <p style={{ color: '#94a3b8', fontWeight: '600' }}>Belum ada konten untuk {title}</p>
        </div>
      );
    }

    const featuredPost = posts[0];
    const regularPosts = posts.slice(1);

    return (
      <div style={{ flex: 1, minWidth: '350px' }}>
        {/* HEADER SECTION */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '25px', borderBottom: '2px solid #f1f5f9', paddingBottom: '12px' }}>
          <div style={{ width: '5px', height: '28px', backgroundColor: color, borderRadius: '10px' }}></div>
          <h3 style={{ fontSize: '24px', fontWeight: '900', margin: 0, color: '#1e2f65', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{title}</h3>
        </div>

        {/* FEATURED POST (Berita Utama di Atas) */}
        {featuredPost && (
          <div style={{ marginBottom: '10px' }} className="group">
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: '16px', overflow: 'hidden', marginBottom: '18px', backgroundColor: '#f8fafc', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              {featuredPost.mainImage && (
                <Image 
                  src={urlFor(featuredPost.mainImage).url()} 
                  alt={featuredPost.title} 
                  fill 
                  style={{ objectFit: 'cover' }} 
                  className="transition-transform duration-500 hover:scale-105"
                />
              )}
            </div>
            <Link href={`/post/${featuredPost.slug.current}`} style={{ textDecoration: 'none' }}>
              <h4 style={{ fontSize: '22px', fontWeight: '900', color: '#0f172a', lineHeight: '1.3', margin: '0 0 10px 0' }}>{featuredPost.title}</h4>
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94a3b8', fontSize: '13px', fontWeight: '600', marginBottom: '20px' }}>
              <CalendarDays size={14} />
              <span>{new Date(featuredPost.publishedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            </div>
          </div>
        )}

        {/* REGULAR POSTS (Daftar Berita dengan Garis Pemisah) */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {regularPosts.map((post) => (
            <div 
              key={post._id} 
              style={{ 
                display: 'flex', 
                gap: '20px', 
                padding: '20px 0', 
                borderTop: '1px solid #eee', // GARIS ANTAR JUDUL
                alignItems: 'center' 
              }}
            >
              <div style={{ flexShrink: 0, position: 'relative', width: '120px', height: '85px', borderRadius: '12px', overflow: 'hidden', backgroundColor: '#f8fafc' }}>
                {post.mainImage && (
                  <Image 
                    src={urlFor(post.mainImage).width(240).url()} 
                    alt={post.title} 
                    fill 
                    style={{ objectFit: 'cover' }} 
                  />
                )}
              </div>
              <div style={{ flex: 1 }}>
                <Link href={`/post/${post.slug.current}`} style={{ textDecoration: 'none' }}>
                  <h5 style={{ fontSize: '16px', fontWeight: '800', color: '#334155', lineHeight: '1.4', margin: '0 0 8px 0' }}>{post.title}</h5>
                </Link>
                <div style={{ color: '#94a3b8', fontSize: '12px', fontWeight: '600' }}>
                   {new Date(post.publishedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* TOMBOL SELENGKAPNYA */}
        <div style={{ borderTop: '1px solid #eee', paddingTop: '20px' }}>
          <Link href={`/category/${slug}`} style={{ 
            display: 'inline-flex', 
            alignItems: 'center',
            gap: '8px',
            fontSize: '15px', 
            fontWeight: '900', 
            color: color, 
            textDecoration: 'none',
            padding: '10px 20px',
            backgroundColor: '#f8fafc',
            borderRadius: '50px'
          }}>
            Lihat Semua {title} <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    );
  };

  return (
    <section style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 25px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px' }}>
        <NewsColumn title="Kabar KMI" posts={kmiPosts} color="#1a9c69" slug="unit-kmi" />
        <NewsColumn title="Kabar SMP" posts={smpPosts} color="#1e2f65" slug="unit-smp" />
      </div>
    </section>
  );
};

export default UnitNews;