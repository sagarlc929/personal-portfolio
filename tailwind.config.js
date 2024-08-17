
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-white': 'var(--main-white)',
        'main-red': 'var(--main-red)',
        'main-blue': 'var(--main-blue)',
        'main-gray': 'var(--main-gray)',
      },
      fontFamily: {
      sans: ['Poppins', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif']
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
          
        },
      },
    },
  },
  plugins: [
    // Ensure to include the correct plugin or remove if not needed
    // e.g., require('tailwindcss-plugin') or your custom plugin
  ],
};

