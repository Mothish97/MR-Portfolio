import React, { useState, useEffect } from "react";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedin
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Works from "../components/homepage/works";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";

import "./styles/homepage.css";
import Education from "../components/homepage/education";
import { faFile } from "@fortawesome/free-regular-svg-icons";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);
	const [isMobileView, setIsMobileView] = useState(false);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);


    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 1024); // Adjust breakpoint as needed
        };

        handleResize(); // Initial check on component mount
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);


	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	return (
		<React.Fragment>


			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<div style={logoStyle}>
							<Logo width={logoSize} link={false} />
						</div>
					</div>

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									{INFO.homepage.title}
								</div>

								<div className="subtitle homepage-subtitle">
									{INFO.homepage.description}
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src="https://drive.google.com/thumbnail?id=1NPyX0WJnAiTQQMHBPdSREtf-MiKEGZ5g"
											alt="homepage.jpg"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="homepage-socials">

							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>
							
							<a
								href={INFO.socials.linkedin}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faLinkedin}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faMailBulk}
									className="homepage-social-icon"
								/>
							</a>
								<a
									href="https://drive.google.com/uc?export=download&id=1aJwOmRMveTMSdECT94nNVcx_XEQcDsP-"
									target="_blank"
									rel="noreferrer"
									download="filename"
								>
								<FontAwesomeIcon
									icon={faFile}
									className="homepage-social-icon"
								/>
							</a>
						</div>
						{/* <div class="flexWorkAndEducation">
					
							<Education />
							<Works />
								
						</div>
						 */}

						{isMobileView ? (
                        <div className="flexWorkAndEducation">
							<div className="row">
                            <div className="col">
                                <Education />
                            </div>
                            <div class="col">
                                <Works />
                            </div>
							</div>
                        </div>
                    ) : (
                        // Render separately for non-mobile view
                        <div className="flexWorkAndEducation">
                            <Education />
                            <Works />
							</div>
                    )}
{/* 
						<div className="homepage-projects">
							<AllProjects />
						</div> */}

						<div className="homepage-after-title">
							{/* <div className="homepage-articles">
								{myArticles.map((article, index) => (
									<div
										className="homepage-article"
										key={(index + 1).toString()}
									>
										<Article
											key={(index + 1).toString()}
											date={article().date}
											title={article().title}
											description={article().description}
											link={"/article/" + (index + 1)}
										/>
									</div>
								))}
							</div> */}

						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
