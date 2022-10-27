/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: true,
  },
  important: true,
  content: ["./pages/**/*.{vue,js}", "./components/**/*.{vue,js}", "./layouts/**/*.{vue,js}"],
  theme: {
    extend: {
      fontFamily: {

      }
    },
  },
  plugins: [],
}
