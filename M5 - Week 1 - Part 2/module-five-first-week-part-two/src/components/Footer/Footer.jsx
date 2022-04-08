import { Container, Row, Col, Nav  } from "react-bootstrap";
import './Footer.css'

const Footer = () => (
  <Container fluid>
    <Row className="d-flex justify-content-center">
      <Col xs={3}>
      <Nav className="flex-column">
        <h5 className="mt-3">THE COMPANY</h5>
        <Nav.Link href="#">About Us</Nav.Link>
        <Nav.Link href="#">The Content Team</Nav.Link>
        <Nav.Link href="#">Press Office</Nav.Link>
      </Nav>
      </Col>
      <Col xs={3}>
      <Nav className="flex-column">
      <h5 className="mt-3">CONTACT US</h5>
        <Nav.Link href="#">Get in Touch</Nav.Link>
        <Nav.Link href="#">Advertise $ Partner</Nav.Link>
        <Nav.Link href="#">Careers</Nav.Link>
      </Nav>
      </Col>
      <Col xs={3}>
      <Nav className="flex-column">
      <h5 className="mt-3">LEGAL</h5>
        <Nav.Link href="#">Privacy</Nav.Link>
        <Nav.Link href="#">Terms of Use</Nav.Link>
        <Nav.Link href="#">Cookie Policy</Nav.Link>
      </Nav>
      </Col>
    </Row>
  </Container>
);

export default Footer;
