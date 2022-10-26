import React from "react";
import { useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Context/AuthProvider";

const Login = () => {

const {loginUser, userPasswordReset} = useContext(AuthContext)

   const [userEmail, setUserEmail] = useState('');
   const [accepted, setAccepted] = useState(false);
   const [error, setError] = useState('');

    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        handleForgetPassword(email)
        loginUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            setError('');
            form.reset();
        })
        .catch(error => setError(error.message))
    }

    const handleForgetPassword = () =>{
      userPasswordReset(userEmail)
      .then(() =>{})
      .catch(error => setError(error.message))
    }

    const handleChecked = (event) =>{
      setAccepted(event.target.checked)
    }
    
  return (
    <div className="mt-5">
        <p className="text-danger text center my-5"><small>{error}</small></p>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onBlur={(event) => setUserEmail(event.target.value)} type="email" name="email" placeholder="Enter email" />
          <Form.Text className="text-muted"> 
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Link to='/register'><p>New To The Website ? Login Please</p></Link>
        <p>Forget Password ? <Button  variant="link" onClick={handleForgetPassword}>Please Reset</Button></p>
          <Form.Check type="checkbox" label="Accept terms and conditions" onClick={handleChecked} />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!accepted}>
          Sign In
        </Button>
      </Form>
    </div>
  );
};

export default Login;
