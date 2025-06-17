import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Headphones, MapFill, Tag, Person, Magic, FileEarmarkText} from 'react-bootstrap-icons';
import car from './img/mercedes2.png'
const features = [
  { icon: <Headphones size={20} className="text-primary me-2" />, title: 'Customer Support', desc: 'Our dedicated support team is available to assist you 24/7' },
  { icon: <MapFill size={20} className="text-primary me-2" />, title: 'Many Locations', desc: 'Convenient pick-up and drop-off locations to suit your travel needs' },
  { icon: <Tag size={20} className="text-primary me-2" />, title: 'Best Price', desc: 'Enjoy competitive rates and great value for every rental' },
  { icon: <Person size={20} className="text-primary me-2" />, title: 'Experience Driver', desc: 'Reliable, professional drivers available upon request' },
  { icon: <Magic size={20} className="text-primary me-2" />, title: 'Verified Brands', desc: 'Choose from trusted and well-maintained car brands' },
  { icon: <FileEarmarkText size={20} className="text-primary me-2" />, title: 'Free Cancellations', desc: 'Flexible bookings with free cancellation options' },
];

const Choice = () => {
  return (
    <div className="py-5 choice ">
      <Container style={{color: 'white'}}>
        <Row className="align-items-center">
          <Col md={6} className="text-center mb-4 mb-md-0">
            <img src={car} alt="Mercedes Car" className="img-fluid" />
          </Col>
          <Col md={6}>
            <h2 className="mb-3">Why Choose Us</h2>
            <p className="mb-4">
              Discover the difference with our car rental service. We offer reliable vehicles, exceptional customer service,
              and competitive pricing to ensure seamless rental experience.
            </p>
            <Row>
              {features.map((item, idx) => (
                <Col sm={6} className="mb-3" key={idx}>
                  <div className="d-flex align-items-start">
                    {item.icon}
                    <div>
                      <h6 className="mb-1 fw-bold">{item.title}</h6>
                      <p className="mb-0 small text-white">{item.desc}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Choice;
