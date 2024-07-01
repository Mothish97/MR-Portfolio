import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const ProjectList = () => {
	return (
		<div class="container">
        <div class="project project1">
            <div class="project-video project-video1">
                <iframe src="./lineRobot.mp4" frameborder="0" allowfullscreen></iframe>
            </div>
            <div class="project-info project-info1">
                <h2>Autonomous Navigating Robot.</h2>
                <p>
Introducing our innovative robot car model for robotics portfolios. This model features autonomous line-following, real-time traffic signal detection using YOLOv3, and effective obstacle avoidance with LIDAR sensor fusion. Experience a comprehensive solution for robotics perception projects.</p>
            </div>
        </div>
        <div class="project projec6">
            <div class="project-video project-video6">
                <iframe src="./handSignal.mp4" frameborder="0" allowfullscreen></iframe>
            </div>
            <div class="project-info project-info2">
                <h2>Signal controlled robot simulation</h2>
                <p>Successfully developed a robot simulation in RVIZ using ROS with a pub-sub architecture. The project included integrating hand sign recognition using the YOLOv3 algorithm to control the robot. Remarkably, it was completed this entire system in just two days.</p>
            </div>
        </div>
        <div class="project project3">
            <div class="project-video project-video3">
                <iframe src="./flight.mp4" frameborder="0" allowfullscreen></iframe>
            </div>
            <div class="project-info project-info2">
                <h2>Flight Simulation</h2>
                <p>This is a cool project I recently worked on after my experience with clothing tech. I delved into the unknown territory of Unity game development to create a flight simulation. The experience I gained from this project helped me earn the Best Employer Award.</p>
            </div>
        </div>
        <div class="project project4">
            <div class="project-video project-video4">
                <iframe src="./rrt.mp4" frameborder="0" allowfullscreen></iframe>
            </div>
            <div class="project-info project-info4">
                <h2>Improved RRT-Connect and GT-RRT</h2>
                <p>To expedite the exploration of random spanning trees, a novel approach using dichotomous points was implemented. This method generates a third node to efficiently produce four spanning trees, significantly enhancing search speed. Additionally, to address the blind search characteristic of conventional RRT-Connect algorithms, the guiding force towards the target point during node expansion was increased. These enhancements streamline the search process, enabling more efficient exploration of the solution space.</p>
            </div>
        </div>
        <div class="project project7">
            <div class="project-video project-video7">
                <iframe src="./astar.mp4" frameborder="0" allowfullscreen></iframe>
            </div>
            <div class="project-info project-info4">
                <h2>A-star Search Algorithm Path Planning</h2>
                <p>Implemented the A* algorithm to find a path between the start and end points on a given map for a mobile robot and Turtlebot3 with differential drive, accounting for non-holonomic constraints. This was done within the ROS and Gazebo simulation environments.</p>
            </div>
        </div>
        <div class="project project2">
            <div class="project-video project-video2">
            <img src="./haptap.png" class="imgProj" alt="UMD"/>
            </div>
            <div class="project-info project-info2">
                <h2> HAPTAP (Best Project of the Year 2018 VIT)</h2>
                <p>Led the design, fabrication, and integration of sensors into a wristwatch, enabling communication, health condition reporting, and medical emergency alerts through smartphone messages and haptic feedback on the watch, while establishing a communication channel to a smartphone using Node-Red for IoT connectivity.</p>
            </div>
        </div>
        <div class="project project5">
            <div class="project-video project-video5">
                <iframe src="./handle.mp4" frameborder="0" allowfullscreen></iframe>
            </div>
            <div class="project-info project-info2">
                <h2> Smart Ergonomic Motorcycle Handlebars to Reduce Musculoskeletal Disorder</h2>
                <p>An automated height and posture correcting handlebar system according to the spinal cord angle, which can adapt to any physique. A patent was filed with the Intellectual Property Rights India along with the University for the project.</p>
            </div>
        </div>

    </div>
	);
};


export default ProjectList;
