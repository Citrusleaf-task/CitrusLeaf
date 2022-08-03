import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [usernameReg, setUsernameReg] = useState("");
  const [useremailReg, setemailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  let navigate = useNavigate(); 

  const routeChange = () =>{ 
    let path = `/login`; 
    navigate(path);
  }

  const register = () => {
    axios.post("http://localhost:5000/register", {
      name: usernameReg,
      email: useremailReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
      navigate("/login")
    });
  };

  return (
    <div style={{ margin: "100px 250px 100px 250px" }}>
      <Form>
        <Form.Group className="mb-6" controlId="formBasicName">
          <Form.Label style={{ margin: "10px" }}>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            onChange={(e) => {
              setUsernameReg(e.target.value);
            }}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-6 " controlId="formBasicEmail">
          <Form.Label style={{ margin: "10px" }}>Email </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              setemailReg(e.target.value);
            }}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{ margin: "10px" }}>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPasswordReg(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button
          variant="primary"
          type="submit"
          style={{ margin: "10px 10px 10px 0px" }}
          
         onClick={register}
        >
          Register
        </Button>
        <Button variant="secondary"  onClick={routeChange} >Login</Button>
      </Form>
    </div>
  );
};

export default Register;
