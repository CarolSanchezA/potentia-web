/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        potentia: {
          bg: '#E4DFD6',      // Original creme
          dark: '#162C35',    // Original azul-petróleo muito escuro (mantido)
          green: '#1A8772',   // Original verde-azulado
          bubble: '#DDF4C7',  // Original verde claro
          chat: '#E5DFD7',    // Original cor de fundo do chat
          // Novos azuis específicos extraídos da logo.jpg
          blue_light: '#9AE5ED',  // Teal mais claro das bordas do anel tecnológico
          blue_main: '#34749D',   // Azul médio e frio do interior do anel
          blue_deep: '#0E1F3F',   // Marinho profundo das mãos e do ícone central
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