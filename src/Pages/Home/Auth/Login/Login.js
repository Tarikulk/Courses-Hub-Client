import React from "react";
import { useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../Context/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const { loginUser, userPasswordReset, loginWithGoogle, loginWithGithub } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/"

  const [userEmail, setUserEmail] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
    .then((result) => {
      const user = result.user;
      console.log(user);
      setError("");
      toast.success("Password Reset Link Have Been Sent To Your Email",{autoClose: 3000})
      form.reset();
      navigate(from, {replace: true});
      })
      .catch((error) => setError(error.message));
  };

  const handleForgetPassword = () => {
    userPasswordReset(userEmail)
      .then(() => {
        toast.success("Password Reset Link Have Been Sent To Your Email",{autoClose: 3000})
      })
      .catch((error) => setError(error.message));
  };

  const handleChecked = (event) => {
    setAccepted(event.target.checked);
  };

  const  GoogleSignIn = () =>{
     loginWithGoogle()
     .then(result => {
        const user = result.user;
        toast.success("You've Login Successfully", {autoClose:3000})
        console.log(user)
        navigate(from, {replace: true});
     })
     .catch(error => setError(error.message))
  };

  const githubSignIn = () =>{
    loginWithGithub()
    .then(result => {
        const user = result.user;
        toast.success("You've Login Successfully", {autoClose:3000})
        console.log(user);
        navigate(from, {replace: true});
    })
    .catch(error => setError(error));
  };

  return (
    <div className="mt-5 shadow-lg pt-2 px-5 pb-4">
      <p className="text-danger text center my-5">
        <small>{error}</small>
      </p>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={(event) => setUserEmail(event.target.value)}
            type="email"
            name="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <p className="text-center">Other Login Options</p>
        <Form.Group className="text-center">
          <ButtonGroup aria-label="Basic example">
            <Button 
              onClick={GoogleSignIn}
              variant="primary"
              className="me-3 rounded d-flex align-items-center w-50 mt-2"
            >
              Login With <FaGoogle className="ms-2 fs-5"></FaGoogle>
            </Button>
            <Button
              onClick={githubSignIn}
              variant="primary"
              className="rounded d-flex align-items-center w-50 mt-2"
            >
              Login With <FaGithub className="ms-2 fs-5"></FaGithub>
            </Button>
          </ButtonGroup>
        </Form.Group>
        <Form.Group
          className="mb-3 mt-4 text-center"
          controlId="formBasicCheckbox"
        >
          <Link to="/register">
            <p className="mb-1">New To The Website ? Register Please</p>
          </Link>
          <p className="mb-0">
            Forget Password ?
            <Button variant="link" onClick={handleForgetPassword}>
              Please Reset
            </Button>
          </p>

          <div className="row checkbox-row">
            <div className="col-xs-2">
              <div className="checkbox-inline">
                <label className="checkbox-inline">
                  <Form.Check
                    className="col-md-12 text-center"
                    type="checkbox"
                    label="Accept terms and conditions"
                    onClick={handleChecked}
                  />
                </label>
              </div>
            </div>
          </div>
          <Button variant="primary" type="submit" disabled={!accepted} className="w-25 mt-2">
            Sign In
          </Button>
        </Form.Group>
      </Form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
