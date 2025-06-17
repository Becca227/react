import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {Clock, Leaf, Lock, Diamond} from 'react-bootstrap-icons'

const serviceData = [
  { icon: <Clock size={30} />, title: 'Available 24/7', description: 'Auto experts and cars available for you to ensure emergency technical support and rental' },
  { icon: <Leaf size={30} />, title: 'Eco-Friendly', description: 'Auto experts and cars available for you to ensure emergency technical support and rental' },
  { icon:  <Diamond size={30} />, title: 'Well-Maintained Car', description: 'Auto experts and cars available for you to ensure emergency technical support and rental' },
  { icon: <Lock size={30} />, title: 'Secure Payment', description: 'Auto experts and cars available for you to ensure emergency technical support and rental' },
];

const Premium = () => {
  return (
    <div className="py-5" style={{ color: '#fff' }}>
      <Container className=' premium-section'>
        <h2 className="text-center mb-4">Our Premium Service</h2>
        <Row>
          {serviceData.map((service, index) => (
            <Col md={3} sm={6} xs={12} className="mb-4 text-center" key={index}>
              <Card style={{ backgroundColor: '#1c1c3a', border: 'none' }} className="h-100 p-3 shadow-sm">
                <div className="mb-3 text-primary">{service.icon}</div>
                <h5 style={{ color: '#ccc' }}>{service.title}</h5>
                <p style={{ fontSize: '0.9rem', color: '#ccc' }}>{service.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Premium;