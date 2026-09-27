import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../../contexts/ThemeContext";

import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;
	const { isDark, toggleTheme } = useTheme();
	const [showTooltip, setShowTooltip] = useState(true);
	const [isFading, setIsFading] = useState(false);

	useEffect(() => {
		const fadeTimer = setTimeout(() => {
			setIsFading(true);
		}, 4500);

		const removeTimer = setTimeout(() => {
			setShowTooltip(false);
		}, 5000);

		return () => {
			clearTimeout(fadeTimer);
			clearTimeout(removeTimer);
		};
	}, []);

	const handleToggle = () => {
		setShowTooltip(false);
		toggleTheme();
	};

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/MR-Portfolio/Homepage">Home</Link>
							</li>
							<li
								className={
									active === "about"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/MR-Portfolio/work">Work</Link>
							</li>
							<li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/MR-Portfolio/projects">Projects</Link>
							</li>

							<li
								className={
									active === "achievements"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/MR-Portfolio/achievements">Achievements</Link>
							</li>

							<li className="nav-item nav-theme-item">
								<button
									className="theme-toggle-btn"
									onClick={handleToggle}
									aria-label="Toggle dark/light mode"
									title={isDark ? "Switch to light mode" : "Switch to dark mode"}
								>
									<FontAwesomeIcon icon={isDark ? faSun : faMoon} />
								</button>
								{showTooltip && isDark && (
									<div className={`theme-tooltip ${isFading ? "fade-out" : ""}`}>
										<div className="tooltip-arrow"></div>
										<span>if you prefer light mode</span>
									</div>
								)}
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
