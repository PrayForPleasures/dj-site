import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Line from "./components/line/Line";
import About from "./components/about/About";
import backImage from "./images/backimg.jpg";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="header" element={<Header className="container" />}></Route>
				<Route path="about" element={<About className="container" />}></Route>
			</Routes>
			<div className="back_image">
				<div>
					<Line></Line>
					<Header className="container" />
					<Line></Line>
					<About className="container" />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
