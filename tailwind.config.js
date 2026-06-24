/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        potentia: {
          bg: '#E4DFD6',      
          dark: '#162C35',    
          green: '#1A8772',   
          bubble: '#DDF4C7',  
          chat: '#E5DFD7',    
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}