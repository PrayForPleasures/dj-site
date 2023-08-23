import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Line from "./components/line/Line";
import About from "./components/about/About";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="about" element={<About />}></Route>
				<Route path="packages" element={<About />}></Route>
				<Route path="video" element={<About />}></Route>
				<Route path="contact" element={<About />}></Route>
			</Routes>
			<div className="back_image1">
				<Line></Line>
				<Header className="container" />
				<Line></Line>
				<About className="container" />
				<Line></Line>
			</div>
			<div className="pulse_animation_box">
				<div className="pulse_animation">
					<div class="line_1"></div>
					<div class="line_2"></div>
					<div class="line_3"></div>
					<div class="line_4"></div>
					<div class="line_5"></div>
					<div class="line_6"></div>
					<div class="line_7"></div>
				</div>
			</div>

			<div className="back_image2">
				<Line></Line>
				<About className="container" />
			</div>
		</BrowserRouter>
	);
}

export default App;
