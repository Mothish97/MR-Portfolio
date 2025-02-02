import React, { useEffect } from "react";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import ProjectList from "../components/projects/ProjectList";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);


	return (
		<React.Fragment>


			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							Projects that I am proud of.
						</div>

						<div className="subtitle projects-subtitle">
							{/* I've worked on a variety of projects over the years
							and I'm proud of the progress I've made. Many of
							these projects are open-source and available for
							others to explore and contribute to. If you're
							interested in any of the projects I've worked on,
							please feel free to check out the code from git and suggest
							any improvements or enhancements you might have in
							mind. Collaborating with others is a great way to
							learn and grow, and I'm always open to new ideas and
							feedback. */}
							I have worked on a diverse array of projects over the years and take pride in the progress
							achieved. Several of these projects are open-source, offering opportunities for exploration
							and contribution from others. If you are interested in any of these projects, please feel free to
							access the code on my Git and suggest any improvements or enhancements you may have in mind. 
							Collaborating with others is a valuable way to learn and evolve, and I welcome new
							ideas and feedback.
						</div>

						<div className="projects-list">
							<ProjectList />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
