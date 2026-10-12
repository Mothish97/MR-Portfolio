import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import About from "./pages/work";
import Projects from "./pages/projects";
import Achievements from "./pages/achievements";
import ChatWidget from "./components/chat/ChatWidget";

import { ThemeProvider } from "./contexts/ThemeContext";

import "./app.css";

function App() {
	return (
		<ThemeProvider>
			<div className="App">
				<Routes>
					<Route path="/MR-Portfolio/homepage" element={<Homepage />} />
					<Route path="/MR-Portfolio/work" element={<About />} />
					<Route path="/MR-Portfolio/projects" element={<Projects />} />
					<Route path="/MR-Portfolio/achievements" element={<Achievements />} />
					<Route path="*" element={<Homepage />} />
				</Routes>
				<ChatWidget />
			</div>
		</ThemeProvider>
	);
}

export default App;
