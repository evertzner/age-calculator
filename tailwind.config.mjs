/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        purple: '#854dff',
        'light-red': '#ff5757',
        white: '#ffffff',
        'off-white': '#f0f0f0',
        'light-grey': '#dbdbdb',
        'smokey-grey': '#716f6f',
        'off-black': '#141414'
      },
      screens: {
        xs: '376px'
      }
    }
  },
  plugins: []
};
