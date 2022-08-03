import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  
  const [status, setLoginStatus] = useState(false);


  let navigate = useNavigate(); 


  const routeChange = () =>{ 
    let path = `/register`; 
    navigate(path);
  }

  const login = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/login", {
      email: email,
      password: password,
    }).then((response) => {
      console.log(response)
      if (response.data.message) {
        setLoginStatus(false);
      } else {
        console.log(response.data);
        localStorage.setItem("Usertoken", response.data.token);
        setLoginStatus(true);
        navigate("/home")
      }
    });
  };

  return (
    <div style={{ margin: "100px 250px 100px 250px" }}>
      <Form>
        <Form.Group className="mb-6 " controlId="formBasicEmail">
          <Form.Label style={{ margin: "10px" }}>Email </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              setemail(e.target.value);
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
              setPassword(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button
          variant="primary"
          type="submit"
          style={{ margin: "10px 10px 10px 0px" }}
          onClick={login}
        >
          Login
        </Button>
        <Button variant="secondary"  onClick={routeChange}>Register</Button>
      </Form>
      <h1>{status}</h1>
    </div>
  );
};

export default Login;
