import React from "react";

import "./styles/socials.css";

const Experience = () => {
	return (
		<div className="experince">

<div class="company-container">
        <div class="company-inner">
            <img src="https://drive.google.com/thumbnail?id=1JfeQwZj0dymn2nrLsyzNB2uXPl1Cb1z9" alt="Company Logo" class="company-logo"/>
            <div class="company-details">
                <div class="company-name">Clothing Tech LLC</div>
                <div class="company-dates">January 2023 - Present</div>
                <div class="company-additional">
                    <p><b>Software Engineer</b></p>
					{/* <p>Clothing Tech is a revolutionary 3D Clothing design software used to design clothing in fashion industry.</p> */}
                    <p>Clothing Tech is a revolutionary 3D clothing design software utilized within the fashion
                    industry for creating innovative garment designs.</p>
                    {/* <p class="justifyContent">
As lead developer, I've spearheaded projects to enhance application performance and functionality, including revamping the local cache system and leveraging API integration and Azure microservices. I managed full stack development for the company website, integrating Stripe API for payments, and seamlessly incorporated Restful APIs. On the backend, I implemented server-side logic and database structures using C#, MVC, SSMS, and Web API for security and performance. I have sucessfully designed and maintaining the AI server for hosting the stable diffusion model, generating photo-realistic images used in the software. I have also improved the performance and the quality of the output by research in photo-realism stable diffusion AI models. </p> */}
               <p class="justifyContent">
               As the lead developer, I have led initiatives aimed at enhancing application performance and
                functionality. This includes overhauling the local cache system and integrating API solutions
                with Azure microservices.
                 I oversaw full-stack development of our company website,
                integrating Restful APIs for smooth communication to the server-side and Stripe API for seamless payments. On the
                backend, I implemented robust server-side logic and database structures using C#, MVC,
                SSMS, and Web API to ensure security and optimize performance.
               Additionally, I have designed and maintain the AI server hosting our stable diffusion model,
                which generates photo-realistic images integral to our software. My research in photo-realism
                stable diffusion AI models has significantly improved both performance and output quality.
               </p>
                </div>
            </div>
        </div>
    </div>
	<div class="company-container">
        <div class="company-inner">
            <img src="https://drive.google.com/thumbnail?id=1SiCISFEV7cYwMCGqMTV8kRP9ed1_dYJO" alt="Company Logo" class="company-logo"/>
            <div class="company-details">
                <div class="company-name">Kick Robotics</div>
                <div class="company-dates">June 2022 - December 2022</div>
                <div class="company-additional">
                    <p><b>Robotics Engineer</b></p>
					<p>Kick Robotics is a startup specializing in two rover robots designed for farming and
                    warehouse management.</p>
                    <p class="justifyContent">I've led various projects showcasing expertise in VSLAM implementation using RealSense and OAK-D cameras for perception efficiency, 2D SLAM techniques with LIDAR for navigation optimization, sensor fusion for precise data processing, and localization algorithm refinement for enhanced positioning accuracy. Additionally, I've successfully ported ROS packages for seamless integration between ROS1 and ROS2. These projects reflect my commitment to advancing robotics technology.</p>
                </div>
            </div>
        </div>
    </div>

	<div class="company-container">
        <div class="company-inner">
            <img src="https://drive.google.com/thumbnail?id=1_yoR8N573sJGyrQFVnK5SqUSCE6HcaTz" alt="Company Logo" class="company-logo"/>
            <div class="company-details">
                <div class="company-name">Wipro Technologies</div>
                <div class="company-dates">June 2019 - August 2021</div>
                <div class="company-additional">
                    <p><b>Software Engineer</b></p>
					<p>Wipro's technology and IT consulting services is a company that enables enterprises to build innovative solutions for addressing the most complex digital transformation needs.</p>
                    <p class="justifyContent">In my experience, I've undertaken various web development projects, encompassing both back-end and front-end aspects. 
                        For back-end development, I've designed and developed websites using the MVC framework and managed databases for Wipro's Cybersecurity portal. 
                        Additionally, I've executed numerous research and development endeavors for diverse clients. 
                        On the front-end, I've led website design and development projects for internal clients, including the porting of the Wipro portal from MVC to AngularJS. 
                        Furthermore, I've specialized in Restful API development, optimizing functionality and performance by converting MVC frameworks to API. These experiences showcase my ability to deliver comprehensive web solutions across a spectrum of technologies and frameworks.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="company-container">
        <div class="company-inner">
            <img src="https://drive.google.com/thumbnail?id=1XvMBc5D7H1r6PWJcWpYedncA8znuqFZU" alt="Company Logo" class="company-logo"/>
            <div class="company-details">
                <div class="company-name">University of Maryland</div>
                <div class="company-dates">June 2018 - July 2018</div>
                <div class="company-additional">
                    <p><b>Research Assistant</b></p>
					<p>UMD Robotics department is one of the best research facility in the country, where
                    I contributed to the development of an autonomous navigating scooter.</p>
                    <p class="justifyContent">My research was focused on simulation development using Gazebo and Rviz, along with rigorous testing and development of ROS programming. I've also implemented advanced perception techniques, such as object detection and pose estimation with the Realsense D435 camera, particularly for optimizing scooter parking efficiency. My expertise ensures robustness and innovation in robotics solutions.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="company-container">
        <div class="company-inner">
            <img src="https://drive.google.com/thumbnail?id=1oKx8bhK4WK89-_0coc9rjDUcfBQnWnJC" alt="Company Logo" class="company-logo"/>
            <div class="company-details">
                <div class="company-name">Kerns Aero Products</div>
                <div class="company-dates">June 2018 - July 2018</div>
                <div class="company-additional">
                    <p><b>Software Engineer</b></p>
					<p>Kerns is a world class international manufacturer of products for the Aerospace Industry.</p>
                    <p class="justifyContent">During my internship, I specialized in CAD modeling, CNC programming, and quality control. From crafting precise flight nozzle designs to managing manufacturing processes and conducting rigorous quality testing, I ensure the highest standards of precision and reliability in aerospace components.</p>
                </div>
            </div>
        </div>
    </div>
		</div>
	);
};

export default Experience;
