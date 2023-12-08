import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Learning Starts With Failure; The First Failure Is The Beginning Of Education.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image1" />
                                <h5>HTML5</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image2" />
                                <h5>CSS3</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image3" />
                                <h5>JAVASCRIPT</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image4" />
                                <h5>BOOTSTRAP</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image5" />
                                <h5>SAAS</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image6" />
                                <h5>WORDPRESS</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image7" />
                                <h5>BABEL</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image8" />
                                <h5>NEXT JS</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image9" />
                                <h5>VITE</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image10" />
                                <h5>CHAKRA UI</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image11" />
                                <h5>MONGO DB</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image12" />
                                <h5>EXPRESS JS</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image13" />
                                <h5>REACT JS</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image14" />
                                <h5>NODE JS</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image15" />
                                <h5>REACT NATIVE</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image16" />
                                <h5>C</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image17" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image18" />
                                <h5>JAVA</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image19" />
                                <h5>PYTHON</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image20" />
                                <h5>TYPESCRIPT</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image21" />
                                <h5>FIREBASE</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image22" />
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image23" />
                                <h5>AMAZON AWS</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image24" />
                                <h5>Machine Learning</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image25" />
                                <h5>GITHUB</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image26" />
                                <h5>HEROKU</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image27" />
                                <h5>GIT</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image28" />
                                <h5>NETLIFY</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image29" />
                                <h5>VERCEL</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image30" />
                                <h5>GITHUB PAGES</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="background" />
    </section>
  )
}
