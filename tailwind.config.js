import flowbite from "flowbite/plugin";
/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: false, // Disable dark mode completely
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbite],
};
export default config;
