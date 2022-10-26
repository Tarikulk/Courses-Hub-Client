import React from 'react';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import './Header.css'
import {FaMoon, FaSun, FaUserCircle} from "react-icons/fa"
import { useState } from 'react';
import logo from "../../../assets/logo.png"

const Header = () => {
    const {user, userLogOut} = useContext(AuthContext);
    const [show, setShow] = useState(true);
    
    const handleLogOut = () =>{
        userLogOut()
        .then(() =>{})
        .catch(error => console.log(error))
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
        <Container className='nav-container'>
          
          <Link to="/"><img src={logo} style={{width:"30px", height:"30px"}} className="rounded-circle me-2" alt="" />Courses-Hub</Link>
          <Nav className="me-auto navbar">
             <Link to='/'>Home</Link>
             <Link to='/faq'>FAQ</Link>
             <Link to='/blog'>Blog</Link>
             <div className='btn-link'>
             {
                 user?.uid ?
                <>
                 <Button variant="link" onClick={handleLogOut} className="ms-4">Log Out</Button>
                 <img src={user?.photoURL} className='text-white ms-4 fs-4' title={user.displayName}  alt="" /> 
                </>
                 :
                 <Link to='/login'>Login</Link>
             }
             
             <span onClick={() => setShow(!show)}>
             {
                show ? 
                <FaMoon className='text-white ms-5 fs-4'></FaMoon>
                :
                <FaSun className='text-white ms-5 fs-4'></FaSun>
             }
             </span>
             </div>
          </Nav>
        </Container>
      </Navbar> 
      
        </div>
    );
};



export default Header;