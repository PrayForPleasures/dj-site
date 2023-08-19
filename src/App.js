import Header from "./components/header/Header";
import Line from "./components/line/Line";
import About from "./components/about/About";

function App() {
	return (
		<div className="container">
			<Line></Line>
			<Header></Header>
			<Line></Line>
			<About></About>
		</div>
	);
}

export default App;
