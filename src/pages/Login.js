import React from "react";
import '../css/Login.css';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faWheelchairMove } from "@fortawesome/free-solid-svg-icons";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />

const Login = () => (
    <div className="container">
        
        <div className="logo">
            {/* <img src="../images/login/image\ 65.png" alt=""/> */}
        </div>
        <div className="form">
            <form>
                <h4>Welcome Back!</h4>
                <div className="email">
                    <input type="email" name="email" placeholder="Email" required />
                </div>

                <div className="password">
                    <input type="password" name="password" placeholder="Password" required />
                    <i className="fa fa-eye" aria-hidden="true"></i>
                    <Link className="forget">Forget Password?</Link>
                </div>

                <button>Sign In</button>
            </form>

{/* <Form>
    <h4>Welcome Back!</h4>
      <Form.Group className="email" controlId="formBasicEmail">
        
        <Form.Control type="email" placeholder="Email" />
        
      </Form.Group>

      <Form.Group className="password" controlId="formBasicPassword">
        
        <Form.Control type="password" placeholder="Password" />
        <FontAwesomeIcon icon={faWheelchairMove} />
        <Link className="forget">Forget Password?</Link>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        
        Sign In
      </Button>
    </Form> */}
        </div>
    </div>

)


export default Login;
