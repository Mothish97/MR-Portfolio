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
					<Link to="https://www.clothingtech.com/">
						<div className="work">
							<img
								src="https://drive.google.com/thumbnail?id=1JfeQwZj0dymn2nrLsyzNB2uXPl1Cb1z9"
								alt="CT"
								className="work-image"
							/>

							<div className="work-title">Clothing Tech LLC</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2023 Jan - Present</div>
							
						</div>
					</Link>
					<Link to="https://kickrobotics.com/">
						<div className="work">
							<img
								src="https://drive.google.com/thumbnail?id=1SiCISFEV7cYwMCGqMTV8kRP9ed1_dYJO"
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
								src="https://drive.google.com/thumbnail?id=1_yoR8N573sJGyrQFVnK5SqUSCE6HcaTz"
								alt="wipro"
								className="work-image"
							/>
							<div className="work-title">Wipro Technologies</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2019 June - 2021 Aug</div>
						</div>
					</Link>
					<Link to="https://robotics.umd.edu/">
						<div className="work">
							<img
								src="https://drive.google.com/thumbnail?id=1XvMBc5D7H1r6PWJcWpYedncA8znuqFZU"
								alt="UMD"
								className="work-image"
							/>
							<div className="work-title">University of Maryland</div>
							<div className="work-subtitle">
								Research Assistant
							</div>
							<div className="work-duration">2022 Feb - 2022 Augt</div>
						</div>
					</Link>
					<Link to="https://www.kernsmfg.com/">
						<div className="work">
							<img
								src="https://drive.google.com/thumbnail?id=1oKx8bhK4WK89-_0coc9rjDUcfBQnWnJC"
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
