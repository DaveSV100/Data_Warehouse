import React, { useRef } from 'react';
import '../styles/login.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
    const form = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
            const formData = new FormData(form.current);
            const data = {
                username: formData.get('email'),
                password: formData.get('password')
            }
            console.log(data);
    }
    return (    
        <Form action='/login' method="POST" ref={form} className='form'>
            <h1>Bienvenido a Warehouse</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" className='input' type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" className='input' type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        </Form.Group>
        <Button onClick={handleSubmit} variant="primary" type="submit">
          Submit
        </Button>
      </Form>  
    );
}

export default Login;