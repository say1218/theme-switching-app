import { ThemeProvider } from "styled-components";
import "./App.css";
import GlobalStyle from "./components/styles/GlobalStyle";

function App() {
	let darkMode = {
		background: "black",
		color: "white",
	};

	let lightMode = {
		background: "white",
		color: "dark",
	};

	return (
		<ThemeProvider theme={lightMode}>
			<GlobalStyle />
			<div className='App'>
				<p> This is the mode</p>
			</div>
		</ThemeProvider>
	);
}

export default App;
