/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  reactStrictMode: true,
}

// const withPWA = require("next-pwa");

// module.exports = withPWA({
// 	pwa: {
// 		dest: "public",
// 		register: true,
//     disable: process.env.NODE_ENV === 'development',
// 		skipWaiting: true,
// 	},
// });