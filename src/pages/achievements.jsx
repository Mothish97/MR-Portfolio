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
	'https://drive.google.com/thumbnail?id=11kg6z14Z0VeReL8XS44VTN6Ce6xvhnya',
	'https://drive.google.com/thumbnail?id=1JfeQwZj0dymn2nrLsyzNB2uXPl1Cb1z9',
  ];

const images2 = [
	'https://drive.google.com/thumbnail?id=11kg6z14Z0VeReL8XS44VTN6Ce6xvhnya',
	'https://drive.google.com/thumbnail?id=1JfeQwZj0dymn2nrLsyzNB2uXPl1Cb1z9',
  ];

const images3 = [
'https://drive.google.com/thumbnail?id=1CTYlBGWmSCA2Tuj5FvQn6vGrz9uL-A2F',
'https://drive.google.com/thumbnail?id=1JfeQwZj0dymn2nrLsyzNB2uXPl1Cb1z9',
];
const images4 = [
'https://drive.google.com/thumbnail?id=1RaQrMf2Fvbh0EMpLLdXTnWles5UbjNKB',
'https://drive.google.com/thumbnail?id=1aRT__OMcVSEOpDfVRskIM3X1XmKCZ72Q',
];
const images5 = [
	'https://drive.google.com/thumbnail?id=1AEgQ01Dk1F9WAXJwZy45iVf1cbOhjtdL',
	'https://drive.google.com/thumbnail?id=156XWnBE6kEFqOtUhnaUeiWNROe5fCavg',
	];
const images6 = [
	'https://drive.google.com/thumbnail?id=1xFeL6EGOxHDPqyfUhlNnGZjAF457Sp1p',
	'https://drive.google.com/thumbnail?id=1tWZAqlrV4iSKoPZIP1nGpjZhzsgsy9G5',
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
    }, 5000); // Auto slide every 3 seconds

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
				{/* I constantly try to improve my knowledge and to deliver optimized product. I recieved the pact award for the 4th time out of 8 for the significant improvement with the GenAI stable diffusion image generation, optimiztion in training the fabrics to retain the textures and dedication towards solving priority bugs. */}
        I consistently strive to expand my knowledge and deliver optimized products. I am honored
to have received the PACT Award for the fourth time out of eight for significant
improvements in the GenAI stable diffusion image generation. My focus included optimizing
fabric training to retain textures and dedication towards solving priority bugs.
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
				{/* I was nervous when I was assigned an artificial intelligence task at my company since I had not worked professionally with Stable Diffusion and AI models before, except for my personal projects. However, after continuous research and learning, I was able to set up VM in Azure quickly and host the model and improve the output quality, which landed the pact award for sprint 82. */}
        I was initially nervous when assigned an artificial intelligence task at my company, as I had
only worked with Stable Diffusion and AI models in personal projects.
However, through continuous research and learning, I quickly set up a VM in Azure, hosted
the model, and improved the output quality. This achievement led to receiving the PACT
Award for sprint 82.
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
				{/* The existing cache system in the application was complex and the restructuring of the framework was assigned to me, I was able to achieve a performance improvement of up to 50% in the backend local cache system which improved the overall performance of the software and secured the pact award for sprint 80. */}
        I was tasked with restructuring the existing cache system in the application, which was
complex. Through my efforts, I achieved a performance improvement of up to 50% in the
backend local cache system. This enhancement significantly boosted the overall performance
of the software and earned me the PACT Award for sprint 80.
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
				{/* When I was assigned to restructure the cache system, the company wanted to improve the startup time and performance, so I dived into the serve side and made a significant improvement to the API codes which was up to 67% and awarded for the employee of the sprint. */}
        When tasked with restructuring the cache system, Initially, the company aimed to enhance startup time
and performance. I delved into the server-side operations and achieved a significant
improvement in API code efficiency, optimizing performance by up to 67%. This
accomplishment earned me the employee of the Sprint award.
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
				{/* The HAPTAP project which was mentioned in the project section was recognized by the university for its approach of developing an end product and altruistic cause and was rewarded with the best project of the year 2018 at Vellore Institute of Technology.  */}
        The HAPTAP project, highlighted in the project section, was recognized by the university for
its innovative approach in developing an end product with an altruistic cause. It was honored
with the Best Project of the Year award in 2018 at Vellore Institute of Technology.
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
                  {/* I won the 2nd runner up in national championship for moto-racing in the year 2017 which was my first national tournament and was an exciting experience. */}
                  I achieved 2nd runner-up in the national championship for moto-racing in 2017, marking my
                  debut in national tournaments—an exhilarating experience.
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
