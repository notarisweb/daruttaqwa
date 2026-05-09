import React from 'react';
import Link from 'next/link';

// Mock data untuk keperluan demonstrasi
const videoPosts = Array.from({ length: 11 }).map((_, i) => ({
  id: i,
  title: `Judul Postingan Video Ke-${i + 1}`,
  description: "Deskripsi singkat mengenai konten video yang menarik untuk dilihat.",
  thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800",
  category: "Video",
  date: "7 Mei 2026"
}));

export default function VideoPage() {
  const featuredPost = videoPosts[0];
  const remainingPosts = videoPosts.slice(1, 11); // Mengambil 10 post berikutnya

  // Membagi postingan menjadi dua kolom (5 kiri, 5 kanan)
  const leftColumn = remainingPosts.slice(0, 5);
  const rightColumn = remainingPosts.slice(5, 10);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Kategori Video</h1>
        <div className="h-1 w-20 bg-blue-600 rounded"></div>
      </header>

      {/* --- Bagian Atas: Card Video Besar --- */}
      <section className="mb-12">
        <Link href={`/video/${featuredPost.id}`} className="group">
          <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-2xl shadow-xl">
            <img 
              src={featuredPost.thumbnail} 
              alt={featuredPost.title}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-10">
              <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-4 uppercase tracking-wider">
                Video Pilihan
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {featuredPost.title}
              </h2>
              <p className="text-gray-200 text-lg max-w-2xl line-clamp-2">
                {featuredPost.description}
              </p>
            </div>
          </div>
        </Link>
      </section>

      {/* --- Bagian Bawah: Grid 2 Kolom (5 Kiri, 5 Kanan) --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Kolom Kiri */}
        <div className="space-y-8">
          {leftColumn.map((post) => (
            <SmallVideoCard key={post.id} post={post} />
          ))}
        </div>

        {/* Kolom Kanan */}
        <div className="space-y-8">
          {rightColumn.map((post) => (
            <SmallVideoCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Sub-komponen untuk Card Video Kecil
function SmallVideoCard({ post }: { post: any }) {
  return (
    <Link href={`/video/${post.id}`} className="flex gap-4 group items-start bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="relative w-32 h-24 md:w-48 md:h-28 flex-shrink-0 overflow-hidden rounded-lg">
        <img 
          src={post.thumbnail} 
          alt={post.title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6 ml-1">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.841z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight md:text-lg">
          {post.title}
        </h3>
        <p className="text-sm text-gray-500 mt-2 line-clamp-2 md:block hidden">
          {post.description}
        </p>
        <span className="text-[10px] uppercase tracking-widest text-gray-400 mt-auto pt-2">
          {post.date}
        </span>
      </div>
    </Link>
  );
}