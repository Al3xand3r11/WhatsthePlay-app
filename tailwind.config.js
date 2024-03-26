/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{jsx,js}'],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['oswald ', 'sans-serif'],
      },
      backgroundImage: {
        'hero-image': 'url("/assets/InfoSection.png")',
        'member-image': 'url("/assets/MembersBackground.png")',
        'contact-image': 'url("/assets/ContactBackground.png")'
      }
    },
  },
  plugins: [],
}

