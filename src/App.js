import { ThemeProvider } from "styled-components";
import "./App.css";
import GlobalStyle from "./components/styles/GlobalStyle";
import useTheme from "./components/useTheme";

function App() {
	let { theme, handleThemeChange } = useTheme({});

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<div className='App'>
				<button name='darkMode' onClick={handleThemeChange}>
					Set Dark Mode
				</button>

				<button name='lightMode' onClick={handleThemeChange}>
					Set Light Mode
				</button>

				<p style={{ fontSize: "2rem" }}> I AM A THEME SWITCHER</p>
			</div>
		</ThemeProvider>
	);
}

export default App;
