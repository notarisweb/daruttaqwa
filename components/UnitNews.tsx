// components/UnitNews.tsx
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
  categorySlug?: string; // Menampung slug kategori untuk link dinamis
}

const UnitNews = () => {
  const [kmiPosts, setKmiPosts] = useState<Post[]>([]);
  const [smpPosts, setSmpPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Query dinamis: Mencari post yang kategorinya memiliki slug 'kmi' atau 'smp'
      const kmiQuery = `*[_type == "post" && category->slug.current == "kmi"] | order(publishedAt desc) [0...4] {
        _id, title, slug, mainImage, publishedAt, "categorySlug": category->slug.current
      }`;
      const smpQuery = `*[_type == "post" && category->slug.current == "smp"] | order(publishedAt desc) [0...4] {
        _id, title, slug, mainImage, publishedAt, "categorySlug": category->slug.current
      }`;

      try {
        const [kmiData, smpData] = await Promise.all([
          client.fetch(kmiQuery),
          client.fetch(smpQuery)
        ]);
        setKmiPosts(kmiData);
        setSmpPosts(smpData);
      } catch (error) {
        console.error("Gagal mengambil data Kabar Unit:", error);
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
          <p style={{ color: '#94a3b8', fontWeight: '600' }}>Belum ada kabar terbaru untuk {title}</p>
        </div>
      );
    }

    const featuredPost = posts[0];
    const regularPosts = posts.slice(1);

    return (
      <div style={{ flex: 1, minWidth: '320px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '25px', borderBottom: '2px solid #f1f5f9', paddingBottom: '12px' }}>
          <div style={{ width: '5px', height: '28px', backgroundColor: color, borderRadius: '10px' }}></div>
          <h3 style={{ fontSize: '24px', fontWeight: '900', margin: 0, color: '#1e2f65', textTransform: 'uppercase' }}>{title}</h3>
        </div>

        {featuredPost && (
          <div style={{ marginBottom: '25px' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: '16px', overflow: 'hidden', marginBottom: '18px', backgroundColor: '#f8fafc' }}>
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
            <Link href={`/${featuredPost.categorySlug || 'berita'}/${featuredPost.slug.current}`} style={{ textDecoration: 'none' }}>
              <h4 style={{ fontSize: '20px', fontWeight: '900', color: '#0f172a', lineHeight: '1.3', margin: '0 0 10px 0' }}>{featuredPost.title}</h4>
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94a3b8', fontSize: '13px', fontWeight: '600' }}>
              <CalendarDays size={14} />
              <span>{new Date(featuredPost.publishedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            </div>
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {regularPosts.map((post) => (
            <Link 
              key={post._id} 
              href={`/${post.categorySlug || 'berita'}/${post.slug.current}`} 
              style={{ display: 'flex', gap: '15px', textDecoration: 'none', alignItems: 'center', paddingBottom: '20px', borderBottom: '1px solid #f1f5f9' }}
            >
              <div style={{ flexShrink: 0, position: 'relative', width: '100px', height: '70px', borderRadius: '10px', overflow: 'hidden' }}>
                {post.mainImage && (
                  <Image src={urlFor(post.mainImage).width(200).url()} alt={post.title} fill style={{ objectFit: 'cover' }} />
                )}
              </div>
              <h5 style={{ fontSize: '15px', fontWeight: '800', color: '#334155', lineHeight: '1.4', margin: 0 }}>{post.title}</h5>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: '25px' }}>
          <Link href={`/${slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '900', color: color, textDecoration: 'none' }}>
            Indeks {title} <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    );
  };

  return (
    <section style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 25px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px' }}>
        <NewsColumn title="Kabar KMI" posts={kmiPosts} color="#1a9c69" slug="kmi" />
        <NewsColumn title="Kabar SMP" posts={smpPosts} color="#1e2f65" slug="smp" />
      </div>
    </section>
  );
};

export default UnitNews;