import('tailwindcss').Config
module.exports = {
    content: [
      './src/**/*.{js,ts,jsx,tsx,mdx}',
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: "#f13a01",
          secondary: "#00ff00",
          tertiary: "#0000ff",
        },
      },
    },
    plugins: [],
  }