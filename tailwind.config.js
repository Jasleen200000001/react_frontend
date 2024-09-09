// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        'founders': ['FoundersGrotesk', 'sans-serif'],
        'neue-montreal': ['Neue Montreal', 'sans-serif']
      },
      colors: { 
        'cu-light-gray': '#f1f1f1',
      },
    },
  },
  plugins: [],
}
