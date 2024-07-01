import React, { useState, useEffect } from "react";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import "./styles/achievements.css";

const images = [
  'png',
  'png',
];

const images1 = [
	'sprnt82-1.png',
	'CT.png',
  ];

const images2 = [
	'sprnt82-1.png',
	'CT.png',
  ];

const images3 = [
'sprnt80-1.png',
'CT.png',
];
const images4 = [
'sprnt77-1.jpg',
'sprnt77-2.jpg',
];
const images5 = [
	'haptap.png',
	'vitlogo.png',
	];
const images6 = [
	'moto.png',
	'moto2.png',
	];
const images7 = [
	'kick.jpg',
	'kerns.png',
	];


const Achievements = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Auto slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <NavBar active="achievements" />
        <div className="content-wrapper">
		  <div className="about-container">
            <div className="about-main">
              <div className="about-right-side">
                <div className="title about-title">
					Pact award for sprint 83
                </div>

                <div className="subtitle about-subtitle">
				I constantly try to improve my knowledge and to deliver optimized product. I recieved the pact award for the 4th time out of 8 for the significant improvement with the GenAI stable diffusion image generation, optimiztion in training the fabrics to retain the textures and dedication towards solving priority bugs.
                </div>
              </div>

              <div className="about-left-side">
                <div className="carousel-container">
                  <div className="carousel">
                    {images1.map((image, index) => (
                      <div
                        key={index}
                        className={
                          index === currentSlide
                            ? 'slide active'
                            : 'slide'
                        }
                        style={{ backgroundImage: `url(${image})` }}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="dots">
                  {images.map((_, index) => (
                    <span
                      key={index}
                      className={index === currentSlide ? 'dot active' : 'dot'}
                      onClick={() => goToSlide(index)}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
          </div>
		  <div className="about-container">
            <div className="about-main">
              <div className="about-right-side">
                <div className="title about-title">
					Pact award for sprint 82
                </div>

                <div className="subtitle about-subtitle">
				I was nervous when I was assigned an artificial intelligence task at my company since I had not worked professionally with Stable Diffusion and AI models before, except for my personal projects. However, after continuous research and learning, I was able to set up VM in Azure quickly and host the model and improve the output quality, which landed the pact award for sprint 82.
                </div>
              </div>

              <div className="about-left-side">
                <div className="carousel-container">
                  <div className="carousel">
                    {images2.map((image, index) => (
                      <div
                        key={index}
                        className={
                          index === currentSlide
                            ? 'slide active'
                            : 'slide'
                        }
                        style={{ backgroundImage: `url(${image})` }}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="dots">
                  {images.map((_, index) => (
                    <span
                      key={index}
                      className={index === currentSlide ? 'dot active' : 'dot'}
                      onClick={() => goToSlide(index)}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
          </div>
		  <div className="about-container">
            <div className="about-main">
              <div className="about-right-side">
                <div className="title about-title">
				Pact award for sprint 80
                </div>

                <div className="subtitle about-subtitle">
				The existing cache system in the application was complex and the restructuring of the framework was assigned to me, I was able to achieve a performance improvement of up to 50% in the backend local cache system which improved the overall performance of the software and secured the pact award for sprint 80.
                </div>
              </div>

              <div className="about-left-side">
                <div className="carousel-container">
                  <div className="carousel">
                    {images3.map((image, index) => (
                      <div
                        key={index}
                        className={
                          index === currentSlide
                            ? 'slide active'
                            : 'slide'
                        }
                        style={{ backgroundImage: `url(${image})` }}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="dots">
                  {images.map((_, index) => (
                    <span
                      key={index}
                      className={index === currentSlide ? 'dot active' : 'dot'}
                      onClick={() => goToSlide(index)}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
          </div>
		  <div className="about-container">
            <div className="about-main">
              <div className="about-right-side">
                <div className="title about-title">
				Pact award for sprint 77
                </div>

                <div className="subtitle about-subtitle">
				When I was assigned to restructure the cache system, the company wanted to improve the startup time and performance, so I dived into the serve side and made a significant improvement to the API codes which was up to 67% and awarded for the employee of the sprint.
                </div>
              </div>

              <div className="about-left-side">
                <div className="carousel-container">
                  <div className="carousel">
                    {images4.map((image, index) => (
                      <div
                        key={index}
                        className={
                          index === currentSlide
                            ? 'slide active'
                            : 'slide'
                        }
                        style={{ backgroundImage: `url(${image})` }}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="dots">
                  {images.map((_, index) => (
                    <span
                      key={index}
                      className={index === currentSlide ? 'dot active' : 'dot'}
                      onClick={() => goToSlide(index)}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
          </div>
		  <div className="about-container">
            <div className="about-main">
              <div className="about-right-side">
                <div className="title about-title">
					Project of the Year 2018 VIT
                </div>

                <div className="subtitle about-subtitle">
				The HAPTAP project which was mentioned in the project section was recognized by the university for its approach of developing an end product and altruistic cause and was rewarded with the best project of the year 2018 at Vellore Institute of Technology. 
                </div>
              </div>

              <div className="about-left-side">
                <div className="carousel-container">
                  <div className="carousel">
                    {images5.map((image, index) => (
                      <div
                        key={index}
                        className={
                          index === currentSlide
                            ? 'slide active'
                            : 'slide'
                        }
                        style={{ backgroundImage: `url(${image})` }}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="dots">
                  {images.map((_, index) => (
                    <span
                      key={index}
                      className={index === currentSlide ? 'dot active' : 'dot'}
                      onClick={() => goToSlide(index)}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
          </div>
		  <div className="about-container">
            <div className="about-main">
              <div className="about-right-side">
                <div className="title about-title">
				National racing champion
                </div>

                <div className="subtitle about-subtitle">
                  I won the 2nd runner up in national championship for moto-racing in the year 2017 which was my first national tournament and was an exciting experience.
                </div>
              </div>

              <div className="about-left-side">
                <div className="carousel-container">
                  <div className="carousel">
                    {images6.map((image, index) => (
                      <div
                        key={index}
                        className={
                          index === currentSlide
                            ? 'slide active'
                            : 'slide'
                        }
                        style={{ backgroundImage: `url(${image})` }}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="dots">
                  {images.map((_, index) => (
                    <span
                      key={index}
                      className={index === currentSlide ? 'dot active' : 'dot'}
                      onClick={() => goToSlide(index)}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
          </div>
		  {/* <div className="about-container">
            <div className="about-main">
              <div className="about-right-side">
                <div className="title about-title">
					Subject topper in state-level
                </div>

                <div className="subtitle about-subtitle">
                  I won the 2nd runner up in national championship for moto-racing in the year 2017 which was my first national tournament and was an exciting experience.
                </div>
              </div>

              <div className="about-left-side">
                <div className="carousel-container">
                  <div className="carousel">
                    {images7.map((image, index) => (
                      <div
                        key={index}
                        className={
                          index === currentSlide
                            ? 'slide active'
                            : 'slide'
                        }
                        style={{ backgroundImage: `url(${image})` }}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="dots">
                  {images.map((_, index) => (
                    <span
                      key={index}
                      className={index === currentSlide ? 'dot active' : 'dot'}
                      onClick={() => goToSlide(index)}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
          </div> */}
          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Achievements;
