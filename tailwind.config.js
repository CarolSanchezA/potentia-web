/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        potentia: {
          bg: '#F6F4EE',      // O bege quente do fundo
          dark: '#162C35',    // O azul/verde escuro dos textos e botão
          green: '#1A8772',   // O verde do cabeçalho do WhatsApp
          bubble: '#DDF4C7',  // O verde clarinho do balão do utilizador
          chat: '#E5DFD7',    // O fundo da área de chat
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