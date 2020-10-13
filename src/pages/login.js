import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gotoWelcome, setGotoWelcome] = useState(false);

  const onSubmitSignin = (e) => {
    e.preventDefault();
    alert("Anda telah Login sebagai Admin.");
    setGotoWelcome(true);
  };

  return (
    <div className="main-wrapper">
      {gotoWelcome ? <Redirect to="/welcome" /> : ""}
      <div>
        <Form onSubmit={(e) => onSubmitSignin(e)}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="example@email.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
