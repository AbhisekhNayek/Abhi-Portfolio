import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Projects/AnalogClock.png";
import projImg2 from "../assets/img/Projects/MyPortfolio.png";
import projImg3 from "../assets/img/Projects/BMI.png";
import projImg4 from "../assets/img/Projects/weather.png";
import projImg5 from "../assets/img/Projects/puzzle.png";
import projImg6 from "../assets/img/Projects/magicnum.png";
import projImg7 from "../assets/img/Projects/todo.png";
import projImg8 from "../assets/img/Projects/Mistore.png";
import projImg9 from "../assets/img/Projects/Resume.png";
import projImg10 from "../assets/img/Projects/netflix.png";
import projImg11 from "../assets/img/Projects/mcamomo.png";
import projImg12 from "../assets/img/Projects/mbachai.png";
import projImg13 from "../assets/img/Projects/oyo.png";
import projImg14 from "../assets/img/Projects/stumate.png";
import projImg15 from "../assets/img/Projects/coursebundler.png";
import projImg16 from "../assets/img/Projects/coffee.png";
import projImg17 from "../assets/img/Projects/payment.png";
import projImg18 from "../assets/img/Projects/hotel.png";

import colorSharp2 from "../assets/img/Projects/AnalogClock.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const tab1projects = [
    {
      title: "Analog Clock",
      description: "HTML, CSS, JS",
      imgUrl: projImg1,
    },
    {
      title: "My Portfolio",
      description: "HTML, CSS, JS",
      imgUrl: projImg2,
    },
    {
      title: "BMI Calculator",
      description: "HTML, CSS, JS",
      imgUrl: projImg3,
    },
    {
      title: "Weather Prediction",
      description: "HTML, CSS, JS",
      imgUrl: projImg4,
    },
    {
      title: "Puzzle Game",
      description: "HTML, CSS, JS",
      imgUrl: projImg5,
    },
    {
      title: "1089 Magic Trick",
      description: "HTML, CSS, JS",
      imgUrl: projImg6,
    },
  ];

  const tab2projects = [
    {
      title: "TO DO LIST",
      description: "MERN Stack",
      imgUrl: projImg7,
    },
    {
      title: "Mi Store India",
      description: "MERN Stack",
      imgUrl: projImg8,
    },
    {
      title: "Resume Generator",
      description: "MERN Stack",
      imgUrl: projImg9,
    },
    {
      title: "Netflix Clone",
      description: "MERN Stack",
      imgUrl: projImg10,
    },
    {
      title: "MCA MomoWala",
      description: "MERN Stack",
      imgUrl: projImg11,
    },
    {
      title: "MBA ChaiWala Clone",
      description: "MERN Stack",
      imgUrl: projImg12,
    },];

    const tab3projects = [
    {
      title: "OYO Clone",
      description: "Next Js",
      imgUrl: projImg13,
    },
    {
      title: "StuMate",
      description: "React Js , Firebase",
      imgUrl: projImg14,
    },
    {
      title: "Course Bundler",
      description: "MERN Stack",
      imgUrl: projImg15,
    },
    {
      title: "The Coffee Shop",
      description: "React Native",
      imgUrl: projImg16,
    },
    {
      title: "Payment App",
      description: "MERN Stack",
      imgUrl: projImg17,
    },
    {
      title: "Crowny Hotel",
      description: "Next Js",
      imgUrl: projImg18,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Web Weaver's Wonderland: Unraveling the Tapestry of My Projects</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            tab1projects.map((tab1projects, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...tab1projects}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            tab2projects.map((tab2projects, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...tab2projects}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            tab3projects.map((tab3projects, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...tab3projects}
                                />
                              )
                            })
                          }
                        </Row>                    
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="back"></img>
    </section>
  )
}
