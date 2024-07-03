import React from "react";
import "./styles/allProjects.css";

const ProjectList = () => {
    return (
        <div className="container">
            <div className="project project4">
                <div className="project-video project-video4">
                    <iframe
                        src="https://drive.google.com/file/d/1GfUobViMiWaZWDx2TbjRHLXO-OMl18zm/preview"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="project-info project-info4">
                    <h2>Improved RRT-Connect and GT-RRT</h2>
                    <p>
                        A novel approach using dichotomous points was implemented to expedite the exploration of
                        random spanning trees. This method introduces a third node to efficiently generate four
                        spanning trees, significantly enhancing search speed. Additionally, to mitigate the blind
                        search characteristic of conventional RRT-Connect algorithms, the guiding force towards the
                        target point during node expansion was increased. These enhancements streamline the search
                        process, enabling more efficient exploration of the solution space.
                    </p>
                </div>
            </div>
            <div className="project project7">
                <div className="project-video project-video7">
                    <iframe
                        src="https://drive.google.com/file/d/1EqY3iJ3LGI6nAJf6pvTawQsMmXJSbVr_/preview"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="project-info project-info4">
                    <h2>A-star Search Algorithm Path Planning</h2>
                    <p>
                        I implemented the A* algorithm to compute paths between start and end points on a specified
                        map for a mobile robot, specifically the Turtlebot3 with differential drive, while accounting
                        for non-holonomic constraints. This implementation was carried out within the ROS and
                        Gazebo simulation environments.
                    </p>
                </div>
            </div>
            <div className="project project1">
                <div className="project-video project-video1">
                    <iframe
                        src="https://drive.google.com/file/d/1WtWShO1NeaD53S-LENwt7Gw__AAdFosj/preview"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="project-info project-info1">
                    <h2>Autonomous Navigating Robot</h2>
                    <p>
                        Introducing our robot car model featuring autonomous line-following navigation, real-time traffic signal detection using YOLOv3, and effective obstacle avoidance utilizing LIDAR and sensor fusion, showcasing a comprehensive solution for robotics perception projects.
                    </p>
                </div>
            </div>
            <div className="project project7">
                <div className="project-video project-video7">
                    <iframe
                        src="https://drive.google.com/file/d/1HJLDzuzyrj2DeMEgTNl3pnPaM3gJgpbv/preview"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="project-info project-info1">
                    <h2>VSLAM Mapping Robot</h2>
                    <p>
                        This project presented a substantial challenge that significantly enhanced my programming
                        skills and adaptability across various frameworks. We utilized an OakD camera alongside
                        IMU and odometry sensors. The most demanding aspect was sensor fusion and calibration,
                        which we successfully addressed through extensive research and persistent effort.
                    </p>
                </div>
            </div>
            <div className="project projec6">
                <div className="project-video project-video6">
                    <iframe
                        src="https://drive.google.com/file/d/1cN1UAXYZIkdgnlIXXkYFQSQEDN6LP3za/preview"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="project-info project-info2">
                    <h2>Signal Controlled Robot Simulation</h2>
                    <p>
                        I successfully developed a robot simulation in RVIZ using ROS with a pub-sub architecture.
                        The project involved integrating hand sign recognition using the YOLOv3 algorithm to
                        control the robot. Remarkably, I completed the entire project in just two days.
                    </p>
                </div>
            </div>
            <div className="project project3">
                <div className="project-video project-video3">
                    <iframe
                        src="https://drive.google.com/file/d/1PzbyifDGaMSTMS2l-YcdDeGfqp68m-Lo/preview"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="project-info project-info2">
                    <h2>Flight Simulation</h2>
                    <p>
                        This is a cool project I recently worked on after my experience with clothing tech. I delved into the unknown territory of Unity game development to create a flight simulation. The experience I gained from this project helped me earn the best employee award.
                    </p>
                </div>
            </div>
            <div className="project project2">
                <div className="project-video project-video2">
                    <img src="https://drive.google.com/thumbnail?id=1AEgQ01Dk1F9WAXJwZy45iVf1cbOhjtdL" className="imgProj" alt="UMD"/>
                </div>
                <div className="project-info project-info2">
                    <h2>HAPTAP (Best Project of the Year 2018 VIT)</h2>
                    <p>
                        Led the design, fabrication, and integration of sensors into a wristwatch, enabling communication, health condition reporting, and medical emergency alerts through smartphone messages and haptic feedback on the watch, while establishing a communication channel to a smartphone using Node-Red for IoT connectivity.
                    </p>
                </div>
            </div>
            <div className="project project5">
                <div className="project-video project-video5">
                    <iframe
                        src="https://drive.google.com/file/d/1PtTmfx_BdYEpET9O61RpVFmPqJNCjbkX/preview"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="project-info project-info2">
                    <h2>Smart Ergonomic Motorcycle Handlebars to Reduce Musculoskeletal Disorder</h2>
                    <p>
                        An automated height and posture correcting handlebar system according to the spinal cord angle, which can adapt to any physique. A patent was filed with the Intellectual Property Rights India in collaboration with the VIT University.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProjectList;
