const plugin = require('tailwindcss/plugin')

module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{js,jsx,ts,tsx}', './docs/**/*.{md,mdx}'],
    // media: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
            pearl: "#CEB7B7",
            darkPearl: "#5E4726",
            darkGray1: "#0b0a09",
            darkGray2: "#2D2925",
            darkGray3: "#4f4740",
            darkGray4: "#70655c",
            darkGray5: "#918378",
            skinTan: "#F5E8D4",
            red: "#8500ff",
            red1: "#b54dff",
            green: "#97ad11",
            gray: "#D1C5B9",
            whiteOpacity: "rgba(255, 255, 255, 0.1)",
            blackOpacity: "rgba(0, 0, 0, 0.6)",
            grayOpacity: "rgba(0, 0, 0, 0.05)",
          },

      },
    },
    variants: {
      extend: {},
    },
  plugins: [plugin(function({ addBase, theme }) {
    addBase({
      'h1': { fontSize: theme('fontSize.4xl'), fontWeight: theme('fontWeight.bold'), },
      'h2': { fontSize: theme('fontSize.3xl'), fontWeight: theme('fontWeight.bold'), },
      'h3': { fontSize: theme('fontSize.2xl'), fontWeight: theme('fontWeight.bold'), },
      'h4': { fontSize: theme('fontSize.xl'), fontWeight: theme('fontWeight.bold'), },
    })
  })],
};
