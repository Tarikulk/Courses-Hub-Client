import React from 'react';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import './Header.css'
import {FaMoon, FaSun} from "react-icons/fa"
import { useState } from 'react';
import logo from "../../../assets/logo.png"

const Header = () => {
    const {user, userLogOut} = useContext(AuthContext);
    const [show, setShow] = useState(true);
    const navigate = useNavigate();
    
    const handleLogOut = () =>{
        userLogOut()
        .then(() =>{
          navigate("/login")
        })
        .catch(error => console.log(error))
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container className='nav-container shadow-lg'>
        <Link to="/" className='mt-1'><img src={logo} style={{width:"30px", height:"30px"}} className="rounded-circle me-2" alt="" />Courses-Hub</Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Link to='/'>Courses</Link>
             <Link to='/faq'>FAQ</Link>
             <Link to='/blog'>Blog</Link>
            </Nav>
            <div className='btn-link'>
             {
                 user?.uid ?
                <>
                 <Button variant="link" onClick={handleLogOut} className="ms-4">Log Out</Button>
                 <img src={user?.photoURL} className='text-white ms-4 fs-4 rounded-circle' style={{height:"30px"}}  title={user.displayName}  alt="" /> 
                </>
                 :
                 <Link to='/login'>Login</Link>
             }
             
             <span className='sm:block' onClick={() => setShow(!show)}>
             {
                show ? 
                <FaMoon className='text-white ms-5 fs-4'></FaMoon>
                :
                <FaSun className='text-white ms-5 fs-4'></FaSun>
             }
             </span>
             </div>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
    );
};



export default Header;


 