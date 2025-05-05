module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#10B981',
        dark: '#111827',
        darker: '#0D1321',
      },
      zIndex: {
        '0': '0',
        '1': '1',
        '10': '10',
      }
    }
  },
  plugins: [],
}