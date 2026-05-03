// schemas/gallery.ts
export default {
  name: 'gallery',
  title: 'Galeri Kegiatan',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Judul Kegiatan',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Foto Utama',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Keterangan Kegiatan',
      type: 'text',
    },
    {
      name: 'publishedAt',
      title: 'Tanggal Kegiatan',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
  ],
};