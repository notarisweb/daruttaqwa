// schemas/siteSettings.ts
export default {
  name: 'siteSettings',
  title: 'Pengaturan Website',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Nama Website/Lembaga',
      type: 'string',
      initialValue: 'Darut Taqwa Banyumas',
    },
    {
      name: 'whatsapp',
      title: 'Nomor WhatsApp Admin',
      type: 'string',
      description: 'Format: 08xxxxxxxxxx',
    },
    {
      name: 'address',
      title: 'Alamat Lengkap',
      type: 'text',
    },
    {
      name: 'runningText',
      title: 'Teks Berjalan',
      type: 'string',
      description: 'Muncul di bagian atas website untuk info penting/darurat',
    },
    {
      name: 'socialMedia',
      title: 'Link Media Sosial',
      type: 'object',
      fields: [
        { name: 'facebook', type: 'url', title: 'Facebook' },
        { name: 'instagram', type: 'url', title: 'Instagram' },
        { name: 'youtube', type: 'url', title: 'YouTube' },
      ],
    },
  ],
};