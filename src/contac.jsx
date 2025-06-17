import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import car from './img/mercedes.png'

const Contact = () => {
  return (
       <div className="py-5 text-white">
      <Container className="py-5 contact">
        <Row className="align-items-center">
          <Col md={6} >
            <h1>Ready To Hit The Road? Book<br />
              Your Car Today!</h1>
            <p>Our friendly customer service team is here to help. <br />
              Contact us anytime for support, inquiries, or assistance with your bookings.</p>
            <Button variant="primary">Contact Us</Button>
          </Col>
          <Col md={6} className="text-center mb-4 mb-md-0">
            <img src={car} alt="Mercedes Car" className="img-fluid" />
          </Col>
        </Row>
      </Container>
      </div>
  );
};

export default Contact;