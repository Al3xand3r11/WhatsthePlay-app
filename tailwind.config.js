/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{jsx,js}'],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['oswald ', 'sans-serif'],
      },
      backgroundImage: {
        'hero-image': 'url("src/images/InfoSection.png")',
        'member-image': 'url("src/images/MembersBackground.png")',
        'contact-image': 'url("src/images/ContactBackground.png")'
      }
    },
  },
  plugins: [],
}

