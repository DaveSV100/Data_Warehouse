import React, { useState, useRef } from 'react';
import { addUser } from '@services/api/contacts';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from '@styles/Users.module.scss';

const users = () => {
  const [value, setValue] = useState('');
  const [alert, setAlert] = useState(false);
  const formRef = useRef(null);

  const handleReset = () => {
    formRef.current.reset();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const data = {
      //Name, last name, email, profile, password
      name: formData.get('name'),
      lastname: formData.get('lastName'),
      email: formData.get('email'),
      profile: formData.get('profile'),
      password: formData.get('password'),
    }
    addUser(data).then((response) => {
      console.log(response);
      if (response) {
        formRef.current.reset();
        setAlert(true);
        setTimeout(() => {
          setAlert(false)
        }, 5000)
      }
    })
  }

  return (
    <>
      <Form action="/" method="POST" className={styles.form} ref={formRef}>
        {
          alert && 
          <div>
            <h2>Usuario creado</h2>
          </div>
        }
        <h1>Crear usuario</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            
            name="name"
            className={styles.input}
            type="text"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            name="lastName"
            className={styles.input}
            type="text"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            className={styles.input}
            type="email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Perfil</Form.Label>
          <Form.Control
            name="profile"
            className={styles.input}
            type="text"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            name="password"
            className={styles.input}
            type="password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default users;
