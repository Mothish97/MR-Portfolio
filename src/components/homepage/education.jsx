import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/education.css";

const Education = () => {
	return (
		<div className="education">
			<Card
				icon={faBriefcase}
				title="education"
				body={
					<div className="education-body">
						<div className="education">
							<img
								src="./UMD.jpg"
								alt="UMD "
								className="education-image"
							/>
							<div className="education-title">University of Maryland College Park</div>
							<div className="education-subtitle">
								Master's Robotics Engineering
							</div>
							<div className="education-duration"> 2021 -  2023</div>
						</div>

						<div className="education">
							<img
								src="./VIT.png"
								alt="VIT"
								className="education-image"
							/>
							<div className="education-title">Vellore Institute of Technology</div>
							<div className="education-subtitle">
								Bachelor's Mechanical Engineering
							</div>
							<div className="education-duration"> 2015 - 2019</div>
						</div>

					</div>
				}
			/>
		</div>
	);
};

export default Education;
