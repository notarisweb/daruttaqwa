// schemas/unit.ts
export default {
  name: 'unit',
  title: 'Unit Pendidikan',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nama Unit',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Deskripsi Program',
      type: 'text',
    },
    {
      name: 'mainImage',
      title: 'Foto Utama Unit',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'features',
      title: 'Program Unggulan',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Daftar keunggulan unit (misal: Tahfidz 30 Juz, Bahasa Arab)'
    },
  ],
};