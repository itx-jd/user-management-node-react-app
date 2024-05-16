import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Signup = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/signup`, {
        username,
        password,
        email,
      });
      console.log('User signed up successfully');
    } catch (error) {
      console.error('Signup failed:', error.message);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

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
        Signup
      </Button>
    </Form>
  );
};

export default Signup;
