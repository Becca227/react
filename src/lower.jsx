import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const carData = [
  { name: 'Hyundai Sonata', price: '$60/Day', img: 'https://cdn.pixabay.com/photo/2022/04/24/12/26/car-7153508_640.jpg' },
  { name: 'Toyota Crown 2023', price: '$70/Day', img: 'https://cdn.pixabay.com/photo/2018/11/21/19/56/toyota-3830433_640.jpg' },
  { name: 'Prius Prime SE', price: '$50/Day', img: 'https://cdn.pixabay.com/photo/2021/12/18/15/51/car-6879134_640.jpg' },
  { name: 'Subaru Legacy', price: '$75/Day', img: 'https://cdn.pixabay.com/photo/2020/10/31/23/52/car-5702596_640.jpg' },
  { name: 'Genesis G80', price: '$80/Day', img: 'https://cdn.pixabay.com/photo/2020/06/04/22/43/range-rover-5260745_640.jpg' },
  { name: 'Nissan Rogue', price: '$90/Day', img: 'https://cdn.pixabay.com/photo/2023/09/15/12/47/uaz-8254778_640.jpg' },
  { name: 'Volvo XC60', price: '$82/Day', img: 'https://cdn.pixabay.com/photo/2015/11/21/20/26/auto-1055544_640.jpg' },
  { name: 'Corolla Civic Hybrid', price: '$55/Day', img: 'https://cdn.pixabay.com/photo/2020/06/06/18/28/lexus-nx-5267710_640.jpg' }
];

const Lower = () => {
  return (
    <div className="py-5 lower-section">
    <Container className="leftside">
      <h2 className="text-center text-white mb-4">Explore Our Deal</h2>
      <Row>
        {carData.map((car, index) => (
          <Col md={3} sm={6} xs={12} className="mb-4" key={index}>
            <Card className="h-100 text-center shadow-sm" style={{ backgroundColor: '#1c1c3a', border: 'none' }}>
              <Card.Img variant="top" src={car.img} alt={car.name} />
              <Card.Body>
                <Card.Title style={{color: 'white'}}>{car.name}</Card.Title>
                <Card.Text  style={{color: 'white'}}>{car.price}</Card.Text>
                <Button variant="primary">Rent Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  );
};

export default Lower;