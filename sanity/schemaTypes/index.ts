import { type SchemaTypeDefinition } from 'sanity'
import post from './post'
import category from './category'
import author from './author'
import gallery from './gallery'
import unit from './unit'
import siteSettings from './siteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,         // Menu Konten Utama (Berita, Khutbah, dll)
    category,     // Menu Kelola Kategori
    author,       // Menu Kelola Penulis/Narasumber
    gallery,      // Menu Dokumentasi Kegiatan
    unit,         // Menu Profil Unit Pendidikan
    siteSettings, // Menu Pengaturan Global Website
  ],
}