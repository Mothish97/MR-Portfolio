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
								src="https://drive.google.com/thumbnail?id=1XvMBc5D7H1r6PWJcWpYedncA8znuqFZU"
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
								src="https://drive.google.com/thumbnail?id=1m_jggNGGbTsRwplWcDVW0aRU7R4EMoaY"
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
