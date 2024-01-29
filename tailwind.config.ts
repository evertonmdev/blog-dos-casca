import daisyui, { type Config as daisyuiCOnfig } from "daisyui";
import type { Config } from "tailwindcss";
import { themes } from "./src/utils/themes";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#0096ff",
					secondary: "#4f7b00",
					accent: "#96c600",
					neutral: "#160510",
					"base-100": "#36281c",
					info: "#00abbe",
					success: "#007b00",
					warning: "#c22f00",
					error: "#f53b48",
				},
			},
			...themes,
		],
	} as daisyuiCOnfig,
	// darkMode: "class",
	plugins: [daisyui],
};
export default config;
