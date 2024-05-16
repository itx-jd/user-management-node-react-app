import React, { useState } from "react";
import axios from 'axios';
import { Form, Button } from "react-bootstrap";
import {useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/login`,
        {
          username,
          password,
        }
      );
      console.log("Tokken : "+response.data.token+"\nId : "+response.data.id);
      const token = response.data.token;
      const id = response.data.id;
      localStorage.setItem("token", token); // Store token in local storage
      localStorage.setItem("id", id);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default Login;
