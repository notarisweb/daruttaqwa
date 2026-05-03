// lib/sanity.query.ts
import { client } from "./sanity.client";
import { groq } from "next-sanity";

/**
 * Konfigurasi revalidate agar data selalu fresh di web (Production)
 */
const revalidateConfig = { next: { revalidate: 0 } };

/**
 * 1. Ambil Semua Postingan Terbaru
 */
export async function getAllPosts() {
  return client.fetch(
    groq`*[_type == "post"] | order(publishedAt desc)[0...15] {
      _id,
      title,
      "slug": slug.current,
      "image": mainImage.asset->url,
      youtubeUrl,
      publishedAt,
      "category": category->title,
      "categorySlug": category->slug.current
    }`,
    {},
    revalidateConfig
  );
}

/**
 * 2. Ambil Berita Terbaru (Untuk Headline)
 * PERBAIKAN: Menambahkan fungsi getNewsPosts yang hilang untuk memperbaiki build error
 */
export async function getNewsPosts() {
  return client.fetch(
    groq`*[_type == "post" && category->slug.current == "berita"] | order(publishedAt desc)[0...6] {
      _id,
      title,
      "slug": slug.current,
      "image": mainImage.asset->url,
      youtubeUrl,
      publishedAt,
      "category": "Berita"
    }`,
    {},
    revalidateConfig
  );
}

/**
 * 3. Ambil Konten Video (Untuk VideoSection)
 */
export async function getVideoPosts() {
  return client.fetch(
    groq`*[_type == "post" && defined(youtubeUrl)] | order(publishedAt desc)[0...6] {
      _id,
      title,
      "slug": slug.current,
      youtubeUrl,
      "image": mainImage.asset->url,
      "source": category->title,
      "categorySlug": category->slug.current,
      "time": publishedAt
    }`,
    {},
    revalidateConfig
  );
}

/**
 * 4. Detail Postingan Lengkap
 */
export async function getSinglePost(slug: string) {
  if (!slug) return null;
  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      youtubeUrl,
      "image": mainImage.asset->url,
      "imageAlt": mainImage.alt,
      "imageCaption": mainImage.caption,
      publishedAt,
      "category": category->title,
      "categorySlug": category->slug.current,
      body[] {
        ...,
        _type == "image" => {
          ...,
          asset->
        }
      },
      "authorName": author->name,
      "authorImage": author->image.asset->url,
      "attachmentUrl": attachment.asset->url,
      "attachmentDescription": attachment.description,
      views
    }`,
    { slug },
    revalidateConfig
  );
}

/**
 * 5. Fungsi Dinamis Rubrik (Halaman Kategori)
 */
export async function getPostsByCategory(categorySlug: string) {
  return client.fetch(
    groq`*[_type == "post" && category->slug.current == $categorySlug] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      "image": mainImage.asset->url,
      youtubeUrl,
      publishedAt,
      "categoryName": category->title,
      "excerpt": array::join(string::split(pt::text(body), "")[0...150], "") + "..."
    }`,
    { categorySlug },
    revalidateConfig
  );
}

/**
 * 6. Ambil Postingan Artikel (Sidebar Artikel)
 */
export async function getArticlePosts() {
  return client.fetch(
    groq`*[_type == "post" && category->slug.current == "artikel"] | order(publishedAt desc)[0...5] {
      _id,
      title,
      "slug": slug.current,
      "image": mainImage.asset->url,
      publishedAt,
      "category": "Artikel"
    }`,
    {},
    revalidateConfig
  );
}

/**
 * 7. Ambil Khutbah Terbaru (Sidebar Khutbah)
 */
export async function getKhutbahPosts() {
  return client.fetch(
    groq`*[_type == "post" && category->slug.current == "khutbah"] | order(publishedAt desc)[0...5] {
      _id,
      title,
      "slug": slug.current,
      "image": mainImage.asset->url,
      youtubeUrl,
      publishedAt,
      "category": "Khutbah"
    }`,
    {},
    revalidateConfig
  );
}

/**
 * 8. Galeri Kegiatan (Dokumentasi)
 */
export async function getGallery() {
  return client.fetch(
    groq`*[_type == "gallery"] | order(publishedAt desc) {
      _id,
      title,
      "image": mainImage.asset->url,
      description,
      publishedAt
    }`,
    {},
    revalidateConfig
  );
}

/**
 * 9. Unit Pendidikan (Profil Sekolah)
 */
export async function getUnits() {
  return client.fetch(
    groq`*[_type == "unit"] | order(name asc) {
      _id,
      name,
      "slug": slug.current,
      description,
      "image": mainImage.asset->url,
      features
    }`,
    {},
    revalidateConfig
  );
}

/**
 * 10. Pengaturan Website Global (Site Settings)
 */
export async function getSiteSettings() {
  return client.fetch(
    groq`*[_type == "siteSettings"][0] {
      title,
      whatsapp,
      address,
      runningText,
      socialMedia
    }`,
    {},
    revalidateConfig
  );
}

/**
 * 11. Postingan Terpopuler (Berdasarkan Views)
 */
export async function getPopularPosts() {
  return client.fetch(
    groq`*[_type == "post"] | order(views desc)[0...5] {
      _id,
      title,
      "slug": slug.current,
      "image": mainImage.asset->url,
      youtubeUrl,
      publishedAt,
      views,
      "category": category->title
    }`,
    {},
    revalidateConfig
  );
}

/**
 * 12. Postingan Terkait (Bawah Artikel)
 */
export async function getRelatedPosts(categorySlug: string, currentSlug: string) {
  return client.fetch(
    groq`*[_type == "post" && category->slug.current == $categorySlug && slug.current != $currentSlug][0...3] {
      _id,
      title,
      "slug": slug.current,
      "image": mainImage.asset->url,
      youtubeUrl
    }`,
    { categorySlug, currentSlug },
    revalidateConfig
  );
}