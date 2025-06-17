import React from 'react'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import  { DiamondHalf } from 'react-bootstrap-icons';
import { ArrowUpRight } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Home from './pages/home.jsx';
import Contact from './pages/Contact.jsx'; 
import About from './pages/About.jsx';
import DynamicRoute from './pages/DynamicRoute.jsx';



const Header = () => {
  const navigate = useNavigate();
  return (
   <Navbar expand="lg" className=" nave">
      <Container>
        <Navbar.Brand href="#home" style={{color: 'white'}}>
        <DiamondHalf />  RentCar
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <div className="navi" >
          <Nav className="highlight" >
            <Nav.Link style={{color: 'white'}} onClick={()=>{
              navigate('/')
            }}>Home</Nav.Link>
            <Nav.Link style={{color: 'white'}} onClick={()=>{
              navigate('/about')
            }}>About Us</Nav.Link>
            <Nav.Link style={{color: 'white'}} onClick={()=>{
              navigate('/contact')
            }}>Contact</Nav.Link>
            <Nav.Link style={{color: 'white'}} onClick={()=>{
              navigate('/community')
            }}>Community</Nav.Link>
            <Nav.Link style={{color: 'white'}} onClick={()=>{
              navigate('/help')
            }}>Help</Nav.Link>
          </Nav>
        <Button variant="outline-dark" style={{color: 'white'}} >Get The App  <ArrowUpRight /></Button>
        </div>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
  )
}

export default Header