import Header from "./components/header/Header";
import Line from "./components/line/Line";
import About from "./components/about/About";
import backImage from "./images/backimg.jpg";

function App() {
	return (
		<div className="back_image">
			<div>
				<Line></Line>
				<Header className="container"></Header>
				<Line></Line>
				<About className="container"></About>
			</div>
		</div>
	);
}

export default App;
