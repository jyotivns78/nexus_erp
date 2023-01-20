import React from "react";
import '../css/Login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const Login = () => (
   <div className="container">
    <div className="logo">
        <img alt="" />
    </div>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>

)


export default Login;
