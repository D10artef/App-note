/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"header-card-dark": "#272732",
				"main-card-dark": "#21212b",
			},
			fontSize: {
				tiny: ".95rem",
				xtiny: ".85rem",
				xxtiny: ".8rem",
			},
		},
		screens: {
			xs: "400px",
			...defaultTheme.screens,
		},
	},
	plugins: [],
};
