import { useState } from "react";

let data = {
	darkMode: {
		background: "black",
		color: "white",
	},
	lightMode: {
		background: "white",
		color: "dark",
	},
};
export default function useTheme() {
	const [theme, setTheme] = useState(data.lightMode);

	const handleThemeChange = (e) => {
		console.log(e.target.name);
		setTheme(data[e.target.name]);
	};

	return {
		theme,
		handleThemeChange,
	};
}
