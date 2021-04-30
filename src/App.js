import "./App.css";
import Card from "./components/Card";
import GlobalStyle from "./components/styles/GlobalStyle";

function App() {
	return (
		<>
			<GlobalStyle />
			<div className='App'>
				<Card></Card>
			</div>
		</>
	);
}

export default App;
