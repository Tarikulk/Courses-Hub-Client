import React from "react";
import { useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Context/AuthProvider";

const Register = () => {

    const {createUser, updateUserProfile} = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);

    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user); 
            handleUpdateUserProfile(photo, name);
            form.reset();
        })
        .catch(error => console.error(error.message))
    }

    const handleUpdateUserProfile = (photo, name) =>{
       const profile = {
        displayName : name,
        photoURL : photo 
       }
       updateUserProfile(profile)
       .then(result => {})
       .catch(error => console.log(error))
    }

    const handleChecked = (event) =>{
       setAccepted(event.target.checked)
    }
 

  return (
    <div className="mt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Full Name" required /> 
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" name="photoURL" placeholder="Enter Photo URL" required /> 
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required /> 
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required />
        </Form.Group>

        <Link to='/login'><p>New To The Website ? Login Please</p></Link>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" onClick={handleChecked} label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!accepted}>
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
