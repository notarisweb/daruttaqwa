import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "u9n0ne1d", // Ganti dengan Project ID Sanity Anda
  dataset: "production",        // Biasanya "production"
  apiVersion: "2026-05-03",     // Gunakan tanggal hari ini atau versi terbaru
  useCdn: false,                // Set ke false agar data selalu terbaru (fresh)
});