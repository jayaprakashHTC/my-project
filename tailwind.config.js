/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    
  ],
  theme: {
    container: {
      center: true,
      width:"1200px",
      padding:"16px"
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Caveat', 'cursive'],
      serif: ['Merriweather', 'serif'],
    },
    borderRadius:{
      'lg':"0px",
    },
    screens: {
      'xsm':{ 'max': '640px'},
      //@media small mobile devices

      'sm': {'min': '641px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      transformOrigin:{
        'top-left-1/3-3/4': '50% 20%',
      }
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("tw-elements/dist/plugin.cjs")
  ],
}

