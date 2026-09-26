import React from "react";

import "./styles/socials.css";

const Experience = () => {
	return (
		<div className="experince">
			<div className="company-container">
				<div className="company-inner">
					<img
						src={process.env.PUBLIC_URL + "/oracle.svg"}
						alt="Oracle Logo"
						className="company-logo"
					/>
					<div className="company-details">
						<div className="company-name">Oracle</div>
						<div className="company-dates">December 2025 - Present</div>
						<div className="company-additional">
							<p><b>Senior Software Developer / Engineer</b></p>
							<p>Oracle is a global leader in cloud technology, enterprise software, and mission-critical cloud infrastructure.</p>
							<p className="justifyContent">
								At Oracle, I focus on AI tool development, agentic workflows, and high-scale cloud infrastructure. I ported the Model Context Protocol (MCP) for the Legacy organization and integrated it with an AI agent to seamlessly bridge legacy enterprise systems. To enhance internal development capabilities and operational efficiency, I develop custom AI tools and spearhead AI integration across the team through training and establishing standards for AI-driven development. Additionally, I manage DevOps and development for a high-throughput service handling over 1 trillion calls, utilizing AI tools to proactively address and mitigate security risks, while creating automation pipelines for time-consuming tasks to streamline repetitive manual processes and increase team productivity.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="company-container">
				<div className="company-inner">
					<img
						src={process.env.PUBLIC_URL + "/CT.png"}
						alt="Company Logo"
						className="company-logo"
					/>
					<div className="company-details">
						<div className="company-name">Clothing Tech LLC</div>
						<div className="company-dates">January 2023 - November 2025</div>
						<div className="company-additional">
							<p><b>Software Engineer 2</b></p>
							{/* <p>Clothing Tech is a revolutionary 3D Clothing design software used to design clothing in fashion industry.</p> */}
							<p>Clothing Tech is a revolutionary 3D clothing design software utilized within the fashion
							industry for creating innovative garment designs.</p>
							{/* <p class="justifyContent">
As lead developer, I've spearheaded projects to enhance application performance and functionality, including revamping the local cache system and leveraging API integration and Azure microservices. I managed full stack development for the company website, integrating Stripe API for payments, and seamlessly incorporated Restful APIs. On the backend, I implemented server-side logic and database structures using C#, MVC, SSMS, and Web API for security and performance. I have sucessfully designed and maintaining the AI server for hosting the stable diffusion model, generating photo-realistic images used in the software. I have also improved the performance and the quality of the output by research in photo-realism stable diffusion AI models. </p> */}
							<p className="justifyContent">
							In my role as a software engineer, I have developed applications that integrate linear algebra and scientific principles to optimize garment placement and generation. By redesigning the application's source code with object-oriented programming concepts and adhering to best coding practices, I enhanced its performance and maintainability. Additionally, I worked with LIDAR and camera systems for avatar generation, utilizing OpenCV for fabric color correction. My experience also includes employing machine learning techniques, such as K-means clustering, for image segregation and developing AI-driven image generation for garments. These efforts align with recent advancements in garment digitization and virtual try-on systems, as discussed in the paper "Robust 3D Garment Digitization from Monocular 2D Images for 3D Virtual Try-On Systems
							</p>
						</div>
					</div>
				</div>
			</div>
	<div className="company-container">
        <div className="company-inner">
            <img src={process.env.PUBLIC_URL + "/kick.jpg"} alt="Company Logo" className="company-logo"/>
            <div className="company-details">
                <div className="company-name">Kick Robotics</div>
                <div className="company-dates">June 2022 - December 2022</div>
                <div className="company-additional">
                    <p><b>Robotics Engineer</b></p>
					<p>Kick Robotics is a startup specializing in two rover robots designed for farming and
                    warehouse management.</p>
                    <p className="justifyContent">I've led various projects showcasing expertise in VSLAM implementation using RealSense and OAK-D cameras for perception efficiency, 2D SLAM techniques with LIDAR for navigation optimization, sensor fusion for precise data processing, and localization algorithm refinement for enhanced positioning accuracy. Additionally, I've successfully ported ROS packages for seamless integration between ROS1 and ROS2. These projects reflect my commitment to advancing robotics technology.</p>
                </div>
            </div>
        </div>
    </div>

	<div className="company-container">
        <div className="company-inner">
            <img src={process.env.PUBLIC_URL + "/wipro.png"} alt="Company Logo" className="company-logo"/>
            <div className="company-details">
                <div className="company-name">Wipro Technologies</div>
                <div className="company-dates">June 2019 - August 2021</div>
                <div className="company-additional">
                    <p><b>Software Engineer</b></p>
					<p>Wipro's technology and IT consulting services is a company that enables enterprises to build innovative solutions for addressing the most complex digital transformation needs.</p>
                    <p className="justifyContent">In my experience, I've undertaken various web development projects, encompassing both back-end and front-end aspects. 
                        For back-end development, I've designed and developed websites using the MVC framework and managed databases for Wipro's Cybersecurity portal. 
                        Additionally, I've executed numerous research and development endeavors for diverse clients. 
                        On the front-end, I've led website design and development projects for internal clients, including the porting of the Wipro portal from MVC to AngularJS. 
                        Furthermore, I've specialized in Restful API development, optimizing functionality and performance by converting MVC frameworks to API. These experiences showcase my ability to deliver comprehensive web solutions across a spectrum of technologies and frameworks.</p>
                </div>
            </div>
        </div>
    </div>
    <div className="company-container">
        <div className="company-inner">
            <img src={process.env.PUBLIC_URL + "/UMD.jpg"} alt="Company Logo" className="company-logo"/>
            <div className="company-details">
                <div className="company-name">University of Maryland</div>
                <div className="company-dates">June 2018 - July 2018</div>
                <div className="company-additional">
                    <p><b>Research Assistant</b></p>
					<p>UMD Robotics department is one of the best research facility in the country, where
                    I contributed to the development of an autonomous navigating scooter.</p>
                    <p className="justifyContent">My research was focused on simulation development using Gazebo and Rviz, along with rigorous testing and development of ROS programming. I've also implemented advanced perception techniques, such as object detection and pose estimation with the Realsense D435 camera, particularly for optimizing scooter parking efficiency. My expertise ensures robustness and innovation in robotics solutions.</p>
                </div>
            </div>
        </div>
    </div>
    <div className="company-container">
        <div className="company-inner">
            <img src={process.env.PUBLIC_URL + "/kerns.png"} alt="Company Logo" className="company-logo"/>
            <div className="company-details">
                <div className="company-name">Kerns Aero Products</div>
                <div className="company-dates">June 2018 - July 2018</div>
                <div className="company-additional">
                    <p><b>Software Engineer</b></p>
					<p>Kerns is a world class international manufacturer of products for the Aerospace Industry.</p>
                    <p className="justifyContent">During my internship, I specialized in CAD modeling, CNC programming, and quality control. From crafting precise flight nozzle designs to managing manufacturing processes and conducting rigorous quality testing, I ensure the highest standards of precision and reliability in aerospace components.</p>
                </div>
            </div>
        </div>
    </div>
		</div>
	);
};

export default Experience;
