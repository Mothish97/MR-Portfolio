import React from "react";
import { Link } from "react-router-dom";

import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link to="/MR-Portfolio/homepage">Home</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/MR-Portfolio/work">Work</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/MR-Portfolio/projects">Projects</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/MR-Portfolio/achievements">Achievements</Link>
						</li>
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
