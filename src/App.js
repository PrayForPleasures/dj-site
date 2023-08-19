import Header from "./components/header/Header";
import Line from "./components/line/Line";
import About from "./components/about/About";
import backImage from "./images/backimg.jpg";

function App() {
	return (
		<div className="back_image">
			<div className="container">
				<Line></Line>
				<Header></Header>
				<Line></Line>
				<About></About>
			</div>
		</div>
	);
}

export default App;
