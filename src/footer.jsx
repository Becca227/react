import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const footerStyle = {
    backgroundImage: 'url("https://images.unsplash.com/photo-1525609004556-c46c7d6cf023")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: 'white',
    position: 'relative',
    paddingTop: '60px',
    paddingBottom: '40px',
  };

  const overlayStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 2,
  };

  const iconStyle = {
    color: 'white',
    fontSize: '1.25rem',
    marginRight: '15px',
    transition: 'transform 0.3s ease',
  };

  return (
    <div style={footerStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <Container>
          <Row className="text-white">
            <Col xs={12} md={4} className="mb-4">
              <h5 className="fw-bold">🚗 RentCar</h5>
              <p>RenCar is the go-to rental solution for my family an vacations.</p>
              <Form className="d-flex mb-3">
                <Form.Control type="email" placeholder="Email Address" className="me-2" />
                <Button
                  variant="light"
                  style={{
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                >
                  Subscribe
                </Button>
              </Form>
              <div className="d-flex">
                <a href="#" style={iconStyle}><FaFacebookF /></a>
                <a href="#" style={iconStyle}><FaInstagram /></a>
                <a href="#" style={iconStyle}><FaTwitter /></a>
                <a href="#" style={iconStyle}><FaLinkedinIn /></a>
              </div>
            </Col>

            <Col xs={6} md={2} className="mb-4">
              <h6 className="fw-semibold">Showroom</h6>
              <ul className="list-unstyled">
                <li>Rent Car</li>
                <li>New Cars for sale</li>
                <li>User cars for sale</li>
                <li>Sale Your Car</li>
              </ul>
            </Col>

            <Col xs={6} md={3} className="mb-4">
              <h6 className="fw-semibold">About RentCar</h6>
              <ul className="list-unstyled">
                <li>About US</li>
                <li>How It Works</li>
                <li>Testimony</li>
                <li>Career</li>
                <li>Services</li>
              </ul>
            </Col>

            <Col xs={6} md={3}>
              <h6 className="fw-semibold">Support</h6>
              <ul className="list-unstyled">
                <li>FAQ</li>
                <li>Contact Us</li>
                <li>Office Location</li>
                <li>Privacy & Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </Col>
          </Row>

          <hr className="border-light" />
          <p className="text-center text-light mt-3">
            © 2025 All Rights Reserved
          </p>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
