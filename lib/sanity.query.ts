// lib/sanity.query.ts

import { client } from "./sanity.client";
import { groq } from "next-sanity";

// ======================================
// REVALIDATE CONFIG
// ======================================
const revalidateConfig = {
  next: {
    revalidate: 0,
  },
};

// ======================================
// 1. GET ALL POSTS
// ======================================
export async function getAllPosts() {

  return client.fetch(
    groq`
      *[_type == "post"]
      | order(publishedAt desc)[0...15] {

        _id,

        title,

        "slug": slug.current,

        youtubeUrl,

        publishedAt,

        views,

        "image": mainImage.asset->url,

        "imageAlt": mainImage.alt,

        "category": category->title,

        "categorySlug": category->slug.current,

        "authorName": author->name,

        "authorImage": author->image.asset->url
      }
    `,
    {},
    revalidateConfig
  );
}

// ======================================
// 2. GET NEWS POSTS
// ======================================
export async function getNewsPosts() {

  return client.fetch(
    groq`
      *[
        _type == "post" &&
        category->slug.current == "berita"
      ]
      | order(publishedAt desc)[0...6] {

        _id,

        title,

        "slug": slug.current,

        youtubeUrl,

        publishedAt,

        views,

        "image": mainImage.asset->url,

        "category": category->title,

        "categorySlug": category->slug.current
      }
    `,
    {},
    revalidateConfig
  );
}

// ======================================
// 3. GET VIDEO POSTS
// ======================================
export async function getVideoPosts() {

  return client.fetch(
    groq`
      *[
        _type == "post" &&
        defined(youtubeUrl)
      ]
      | order(publishedAt desc)[0...6] {

        _id,

        title,

        "slug": slug.current,

        youtubeUrl,

        publishedAt,

        views,

        "image": mainImage.asset->url,

        "category": category->title,

        "categorySlug": category->slug.current
      }
    `,
    {},
    revalidateConfig
  );
}

// ======================================
// 4. GET SINGLE POST
// ======================================
export async function getSinglePost(
  slug: string
) {

  if (!slug) return null;

  return client.fetch(
    groq`
      *[
        _type == "post" &&
        slug.current == $slug
      ][0] {

        _id,

        title,

        "slug": slug.current,

        excerpt,

        youtubeUrl,

        publishedAt,

        views,

        "image": mainImage.asset->url,

        "imageAlt": mainImage.alt,

        "imageCaption": mainImage.caption,

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

        "attachmentDescription": attachment.description
      }
    `,
    { slug },
    revalidateConfig
  );
}

// ======================================
// 5. GET POSTS BY CATEGORY
// ======================================
export async function getPostsByCategory(
  categorySlug: string
) {

  return client.fetch(
    groq`
      *[
        _type == "post" &&
        category->slug.current == $categorySlug
      ]
      | order(publishedAt desc) {

        _id,

        title,

        "slug": slug.current,

        youtubeUrl,

        publishedAt,

        views,

        "image": mainImage.asset->url,

        "category": category->title,

        "categorySlug": category->slug.current,

        "excerpt":
          array::join(
            string::split(
              pt::text(body),
              ""
            )[0...150],
            ""
          ) + "..."
      }
    `,
    { categorySlug },
    revalidateConfig
  );
}

// ======================================
// 6. GET ARTICLE POSTS
// ======================================
export async function getArticlePosts() {

  return client.fetch(
    groq`
      *[
        _type == "post" &&
        category->slug.current == "artikel"
      ]
      | order(publishedAt desc)[0...5] {

        _id,

        title,

        "slug": slug.current,

        publishedAt,

        views,

        "image": mainImage.asset->url,

        "category": category->title,

        "categorySlug": category->slug.current
      }
    `,
    {},
    revalidateConfig
  );
}

// ======================================
// 7. GET KHUTBAH POSTS
// ======================================
export async function getKhutbahPosts() {

  return client.fetch(
    groq`
      *[
        _type == "post" &&
        category->slug.current == "khutbah"
      ]
      | order(publishedAt desc)[0...5] {

        _id,

        title,

        "slug": slug.current,

        youtubeUrl,

        publishedAt,

        views,

        "image": mainImage.asset->url,

        "category": category->title,

        "categorySlug": category->slug.current
      }
    `,
    {},
    revalidateConfig
  );
}

// ======================================
// 8. GET GALLERY
// ======================================
export async function getGallery() {

  return client.fetch(
    groq`
      *[_type == "gallery"]
      | order(publishedAt desc) {

        _id,

        title,

        description,

        publishedAt,

        "image": mainImage.asset->url
      }
    `,
    {},
    revalidateConfig
  );
}

// ======================================
// 9. GET UNITS
// ======================================
export async function getUnits() {

  return client.fetch(
    groq`
      *[_type == "unit"]
      | order(name asc) {

        _id,

        name,

        "slug": slug.current,

        description,

        features,

        "image": mainImage.asset->url
      }
    `,
    {},
    revalidateConfig
  );
}

// ======================================
// 10. GET SITE SETTINGS
// ======================================
export async function getSiteSettings() {

  return client.fetch(
    groq`
      *[_type == "siteSettings"][0] {

        title,

        whatsapp,

        address,

        runningText,

        socialMedia
      }
    `,
    {},
    revalidateConfig
  );
}

// ======================================
// 11. GET POPULAR POSTS
// ======================================
export async function getPopularPosts() {

  return client.fetch(
    groq`
      *[_type == "post"]
      | order(views desc)[0...5] {

        _id,

        title,

        "slug": slug.current,

        youtubeUrl,

        publishedAt,

        views,

        "image": mainImage.asset->url,

        "category": category->title,

        "categorySlug": category->slug.current
      }
    `,
    {},
    revalidateConfig
  );
}

// ======================================
// 12. GET RELATED POSTS
// ======================================
export async function getRelatedPosts(
  category: string,
  currentSlug: string
) {

  return client.fetch(
    groq`
      *[
        _type == "post" &&
        category->slug.current == $category &&
        slug.current != $currentSlug
      ]
      | order(publishedAt desc)
      [0...3] {

        _id,

        title,

        "slug": slug.current,

        youtubeUrl,

        publishedAt,

        "image": mainImage.asset->url
      }
    `,
    {
      category,
      currentSlug,
    },
    revalidateConfig
  );
}