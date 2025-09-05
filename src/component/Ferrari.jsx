import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const ferraris = [
  {
    name: "Ferrari 488 GTB",
    image: "https://cdn.motor1.com/images/mgl/VBB6P/s1/ferrari-488-gtb.jpg",
    price: "$1200/day",
    features: ["2 Seats", "V8 Engine", "Auto", "Red Beast"],
  },
  {
    name: "Ferrari F8 Tributo",
    image: "https://cdn.motor1.com/images/mgl/lZVxQ/s1/2020-ferrari-f8-tributo.jpg",
    price: "$1400/day",
    features: ["2 Seats", "710 HP", "Auto", "Launch Control"],
  },
  {
    name: "Ferrari Roma",
    image: "https://cdn.motor1.com/images/mgl/0ANBz/s1/ferrari-roma.jpg",
    price: "$1100/day",
    features: ["Luxury GT", "2+2 Seating", "Twin Turbo", "Silky Drive"],
  },
  {
    name: "Ferrari SF90 Stradale",
    image: "https://cdn.motor1.com/images/mgl/0xqXe/s1/ferrari-sf90-stradale.jpg",
    price: "$1600/day",
    features: ["Hybrid Supercar", "986 HP", "eDrive Mode", "Insane Acceleration"],
  },
  
];
while (ferraris.length < 16) {
  ferraris.push({ ...ferraris[ferraris.length % 4], name: `Ferrari #${ferraris.length + 1}` });
}



const Ferrari = () => {
  const [showAll, setShowAll] = useState(false);
  const initialDisplay = 6;

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  const ferraris = [
    // same array as above with 16 total
  ];
  while (ferraris.length < 16) {
    ferraris.push({
      ...ferraris[ferraris.length % 4],
      name: `Ferrari #${ferraris.length + 1}`,
    });
  }

  const displayedCars = showAll ? ferraris : ferraris.slice(0, initialDisplay);

  return (
    <Container className="my-5">
      <h2 className="text-center fw-bold mb-4">🔥 Our Ferrari Fleet</h2>
      <Row className="g-4">
        {displayedCars.map((car, idx) => (
          <Col key={idx} md={6} lg={4}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Img
                variant="top"
                src={car.image}
                alt={car.name}
                style={{ height: '220px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>{car.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{car.price}</Card.Subtitle>
                <ul style={{ paddingLeft: '20px' }}>
                  {car.features((feat, i) => (
                    <li key={i}>{feat}</li>
                  ))}
                </ul>
                <Button variant="danger" className="mt-2">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="text-center mt-4">
        <Button
          variant="outline-dark"
          onClick={handleToggle}
          className="d-flex align-items-center mx-auto"
        >
          {showAll ? 'Show Less' : 'Show More'}&nbsp;
          {showAll ? <FaChevronUp /> : <FaChevronDown />}
        </Button>
      </div>
    </Container>
  );
};

export default Ferrari;
