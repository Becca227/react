import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import car from './img/auto.png';


const First = () => {
  return (
    <div className='hero'>
      <Container>
        <Row className='align-items-center'>
          <Col md={6} className='text-white'>
            <h1>Unlock the freedom to <br />
         experience travel your way.</h1>
        <p>RentCar is a car rental service that offers a wide range of vehicles to suit <br />
         your needs. Whether you're looking for a compact car for city driving or a spacious SUV <br />
          for a family road trip, we have you covered.</p>
        <Button variant="primary">Choose a Car</Button>
          </Col>
          <Col md={6} className='text-center'>
            <img src={car} alt="Car" className='img-fluid' />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default First;