import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
          <h1 style={{ color: 'white' }}>/Abhi</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/abhisekhnayek1755/"><img src={navIcon1} alt="Icon" /></a>
              <a href="/"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/me_abhisekhnayek_15/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Designed By @ Abhisekh Nayek</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
