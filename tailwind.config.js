/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "x-global": "112px",
      },
      colors: {
        "gray-0": "#f2f6f8",
        "gray-1": "#dadddf",
        "gray-2": "#c2c5c6",
        "gray-3": "#a9acae",
        "gray-4": "#919495",
        "gray-5": "#797b7c",
        "gray-6": "#3e3e3e",
        "gray-7": "#2e2e2e",
        "blue-0": "#EAF9FB",
        "blue-1": "#D2F4FB",
        "blue-2": "#0593FF",
        "blue-3": "#0274CA",
        "blue-4": "#005299",
        "orange-0": "#FFF6E8",
        "orange-1": "#FFD697",
        "orange-2": "#FABB1C",
        "orange-3": "#F19020",
        "orange-4": "##c1731a",
        "green-0": "#E6FEF1",
        "green-1": "#D0FDE5",
        "green-2": "#24D674",
        "green-3": "#5FCE8C",
        "green-4": "#50AD75",
        "green-5": "#408a5e",
        "text-primary": "#20415B",
        "text-secondary": "#446883",
      },
    },
  },
  plugins: [],
};
