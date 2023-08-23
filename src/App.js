import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Line from "./components/line/Line";
import About from "./components/about/About";
import backImage from "./images/backimg.jpg";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="about" element={<About />}></Route>
				<Route path="packages" element={<About />}></Route>
				<Route path="video" element={<About />}></Route>
				<Route path="contact" element={<About />}></Route>
			</Routes>
			<div className="back_image">
				<Line></Line>
				<Header className="container" />
				<Line></Line>
				<About className="container" />
			</div>
		</BrowserRouter>
	);
}

export default App;
