import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
        <Container className='nav-container'>
          <Link to="/">Courses-Hub</Link>
          <Nav className="me-auto navbar">
             <Link to='/'>Home</Link>
             <Link to='/faq'>FAQ</Link>
             <Link to='/blog'>Blog</Link>
          </Nav>
        </Container>
      </Navbar> 
        </div>
    );
};

export default Header;