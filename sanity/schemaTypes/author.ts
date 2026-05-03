// schemas/author.ts
export default {
  name: 'author',
  title: 'Penulis',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nama Lengkap',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Foto Profil',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bio',
      title: 'Bio Singkat',
      type: 'text',
    },
  ],
};