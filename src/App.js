import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import About from "./pages/work";
import Projects from "./pages/projects";
import Achievements from "./pages/achievements";
import Notfound from "./pages/404";

import "./app.css";

function App() {


	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/work" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/achievements" element={<Achievements />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;
