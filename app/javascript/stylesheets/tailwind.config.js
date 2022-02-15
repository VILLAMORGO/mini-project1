module.exports = {
  purge: [
    "./app/**/*.html.erb",
    "./app/helpers/**/*.rb",
    "./app/javascript/**/*.js",
    "./app/javascript/**/*.vue",
  ],
  content: ["./app/**/*.{html,js,erb}"],
  theme: {
    container: {
      center: false,
    },
    // padding: {
    //   DEFAULT: '1rem',
    //   sm: '2rem',
    //   lg: '4rem',
    //   xl: '5rem',
    //   '2xl': '6rem',
    // }, 
    extend: {
      colors: {
        'peach': '#bf7772',
      },s
    }
    
  },
  plugins: [],
}
