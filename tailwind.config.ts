import type { Config } from "tailwindcss";

const config: Config = {
  // Turbopack membutuhkan path yang jelas agar bisa men-scan class di folder components
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}", 
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warna identitas Darut Taqwa agar konsisten
        'pesantren-blue': '#1e2f65',
        'pesantren-green': '#1a9c69',
      },
      // Tambahkan animasi untuk modal pendaftaran agar lebih halus
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'zoom-in': 'zoomIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;