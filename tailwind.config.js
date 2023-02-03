/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "bg-btn": "rgba(246, 246, 246, 0.5)",
      },
      height: {
        200: "50rem",
        99: "49rem",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
