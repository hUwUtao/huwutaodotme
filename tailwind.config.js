module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        margin: {
          'havatar': '-4.5rem',
        }
      },
      colors: {
        "discord-gray": "#36393f",
        "discord-dark": "#32353b",
        "discord-black": "#18191c",
        "discord-secondary": "#b9bbbe"
      }
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
  }