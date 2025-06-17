import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const chauffeurs = [
  {
    name: 'James Miller',
    title: 'Lead Chauffeur',
    image: 'https://cdn.pixabay.com/photo/2018/03/15/23/16/car-3229816_640.jpg',
    bio: 'With 10+ years of experience, James ensures every ride is smooth and professional.',
  },
  {
    name: 'Chloe Bennett',
    title: 'Executive Driver',
    image: 'https://img.freepik.com/premium-photo/portrait-successful-black-woman-business-suit-luxury-car-interior_960396-837390.jpg?ga=GA1.1.909072736.1750202639&semt=ais_hybrid&w=740',
    bio: 'Chloe is known for her punctuality and friendly vibe — the best choice for VIP travel.',
  },
  {
    name: 'Daniel Osei',
    title: 'Luxury Vehicle Specialist',
    image: 'https://img.freepik.com/free-photo/handsome-elegant-man-car-salon_1157-30189.jpg?ga=GA1.1.909072736.1750202639&semt=ais_hybrid&w=740',
    bio: 'Daniel brings elegance and efficiency to every ride, making each trip memorable.',
  },
];

const ChauffeurSection = () => {
  return (
    <Container className="my-5 second">
      <h2 className="text-center fw-bold mb-4">Meet Our Chauffeurs</h2>
      <Row className="g-4">
        {chauffeurs.map((driver, index) => (
          <Col key={index} xs={12} md={6} lg={4}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Img
                variant="top"
                src={driver.image}
                alt={driver.name}
                style={{ height: '280px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title className="fw-semibold">{driver.name}</Card.Title>
                <Card.Subtitle className="text-muted mb-2">{driver.title}</Card.Subtitle>
                <Card.Text>{driver.bio}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ChauffeurSection;
