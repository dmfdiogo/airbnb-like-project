/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f43f5e", // text-gray-500
        "primary-light": "#f57187",
        "primary-dark": "#c2324a",
        pagewhite: "#f8fafc",
        error: "#dc2626",
        "error-light": "#fee2e2",
        darkgray: "#4b5563", // text-gray-600
        grayicon: "#6b7280",
        link: "#2563eb",
      },
    },
  },
  plugins: [],
}
