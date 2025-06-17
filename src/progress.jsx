import { Container, Row, Col, Card } from 'react-bootstrap';
import {Button} from 'react-bootstrap'
import {Clock, Leaf, Lock, Diamond , PlayCircleFill} from 'react-bootstrap-icons'

const serviceData = [
  { icon: <Clock size={30} />, title: 'Find your Car', description: 'Shop new and used cars sell your car, company prices to find your dream car. ' },
  { icon: <Leaf size={30} />, title: 'Book For Rental', description: 'Shop new and used cars sell your car, company prices to find your dream car. ' },
  { icon:  <Diamond size={30} />, title: 'Complete Payment', description: 'Shop new and used cars sell your car, company prices to find your dream car. ' },
  { icon: <Lock size={30} />, title: 'Booking is Comfirm', description: 'Shop new and used cars sell your car, company prices to find your dream car. ' },
];

const Progress = () => {
  return (
    <div className="py-5">
      <Container className=' progress-section'>
        <h2 className="text-center mb-4" style={{ color: 'white' }}>Process To Book a Car <br />
         On Rent Ride <br />
         <Button variant="primary">Watch Video <PlayCircleFill/> </Button></h2>
        <Row>
          {serviceData.map((service, index) => (
            <Col md={3} sm={6} xs={12} className="mb-4 text-start" key={index}>
              <Card style={{ backgroundColor: 'white', border: 'none' }} className="h-100 p-3 shadow-sm">
                <div className="mb-3 text-primary" style={{backgroundColor: 'black', width: 'fit-content', borderRadius: '5px'}}>{service.icon}</div>
                <h5 style={{ color: 'black' }}>{service.title}</h5>
                <p style={{ fontSize: '0.9rem', color: 'black' }}>{service.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Progress;