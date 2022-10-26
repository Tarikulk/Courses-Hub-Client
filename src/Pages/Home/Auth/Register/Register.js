import React from "react";
import { useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Context/AuthProvider";

const Register = () => {
  const { createUser, updateUserProfile, verifyUserEmail } =
    useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setError("");
        console.log(user);
        handleUpdateUserProfile(photo, name);
        handleEmailVerification();
        form.reset();
      })
      .catch((error) => setError(error.message));
  };

  const handleUpdateUserProfile = (photo, name) => {
    const profile = {
      displayName: name,
      photoURL: photo,
    };
    updateUserProfile(profile)
      .then((result) => {})
      .catch((error) => setError(error.message));
  };

  const handleChecked = (event) => {
    setAccepted(event.target.checked);
  };

  const handleEmailVerification = () => {
    verifyUserEmail()
      .then(() => {})
      .catch((error) => setError(error.message));
  };

  return (
    <div className="mt-5">
      <p className="text-danger text-center my-5">
        <small>{error}</small>
      </p>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Full Name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photoURL"
            placeholder="Enter Photo URL"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Form.Group className="text-center">
          <Link to="/login">
            <p>Already, have an account ?</p>
          </Link>
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
            Register
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Register;
