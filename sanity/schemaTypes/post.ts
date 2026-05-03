// schemas/post.ts
export default {
  name: 'post',
  title: 'Konten Utama',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Judul Konten',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'youtubeUrl',
      title: 'URL Video YouTube',
      type: 'url',
      description: 'Masukkan link YouTube untuk embed video dan thumbnail otomatis.',
    },
    {
      name: 'category',
      title: 'Kategori Induk',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Penulis/Narasumber',
      type: 'reference',
      to: [{ type: 'author' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Gambar Utama (Manual)',
      type: 'image',
      description: 'Kosongkan jika menggunakan thumbnail YouTube.',
      options: { hotspot: true },
      // --- PENAMBAHAN UNTUK SEO ---
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text (SEO)',
          description: 'Penting untuk aksesibilitas dan SEO. Jelaskan isi gambar.',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          description: 'Keterangan gambar yang akan muncul di bawah foto.',
        }
      ]
    },
    {
      name: 'publishedAt',
      title: 'Tanggal Terbit',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'body',
      title: 'Isi Konten',
      type: 'array',
      of: [
        { type: 'block' },
        { 
          type: 'image', 
          options: { hotspot: true },
          // --- PENAMBAHAN UNTUK SEO DI DALAM BODY ---
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text (SEO)',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            }
          ]
        },
        {
          name: 'youtube',
          type: 'object',
          title: 'YouTube Embed',
          fields: [
            {
              name: 'url',
              type: 'url',
              title: 'YouTube video URL'
            }
          ]
        }
      ],
    },
    {
      name: 'attachment',
      title: 'Lampiran Materi (PDF/PPT)',
      type: 'file',
      options: { accept: '.pdf,.ppt,.pptx' },
      fields: [
        {
          name: 'description',
          type: 'string',
          title: 'Keterangan File',
        }
      ]
    },
    {
      name: 'views',
      title: 'Jumlah Dilihat',
      type: 'number',
      initialValue: 0,
      readOnly: true,
    },
  ],
}