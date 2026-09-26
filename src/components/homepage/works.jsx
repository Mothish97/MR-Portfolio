import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
					<Link to="https://www.oracle.com/">
						<div className="work">
							<img
								src={process.env.PUBLIC_URL + "/oracle.svg"}
								alt="Oracle"
								className="work-image"
							/>

							<div className="work-title">Oracle</div>
							<div className="work-subtitle">
								Senior Software Developer
							</div>
							<div className="work-duration">Dec 2025 - Present</div>
						</div>
					</Link>
					<Link to="https://www.clothingtech.com/">
						<div className="work">
							<img
								src={process.env.PUBLIC_URL + "/CT.png"}
								alt="CT"
								className="work-image"
							/>

							<div className="work-title">Clothing Tech LLC</div>
							<div className="work-subtitle">
								Software Engineer 2
							</div>
							<div className="work-duration">Jan 2023 - Nov 2025</div>
							
						</div>
					</Link>
					<Link to="https://kickrobotics.com/">
						<div className="work">
							<img
								src={process.env.PUBLIC_URL + "/kick.jpg"}
								alt="kick"
								className="work-image"
							/>
							<div className="work-title">Kick Robotics</div>
							<div className="work-subtitle">
								Robotics Engineer
							</div>
							<div className="work-duration">June 2022 - Dec 2022</div>
						</div>
					</Link>
					<Link to="https://www.wipro.com/">
						<div className="work">
							<img
								src={process.env.PUBLIC_URL + "/wipro.png"}
								alt="wipro"
								className="work-image"
							/>
							<div className="work-title">Wipro Technologies</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">June 2019 - Aug 2021</div>
						</div>
					</Link>
					<Link to="https://robotics.umd.edu/">
						<div className="work">
							<img
								src={process.env.PUBLIC_URL + "/UMD.jpg"}
								alt="UMD"
								className="work-image"
							/>
							<div className="work-title">University of Maryland</div>
							<div className="work-subtitle">
								Research Assistant
							</div>
							<div className="work-duration">Feb 2022 - Aug 2022 </div>
						</div>
					</Link>
					<Link to="https://www.kernsmfg.com/">
						<div className="work">
							<img
								src={process.env.PUBLIC_URL + "/kerns.png"}
								alt="kerns"
								className="work-image"
							/>
							<div className="work-title">Kerns Aero Products</div>
							<div className="work-subtitle">
							Production Cycle Manager
							</div>
							<div className="work-duration">2018 June - 2019 July</div>
						</div>
					</Link>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
