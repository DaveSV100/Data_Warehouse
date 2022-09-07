import React, { useState, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from '@styles/Companies.module.scss';

const companies = () => {

  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current);
  }
  return (
    <>
      <Form action="/" method="POST" className={styles.form} ref={formRef}>
        <h1>Crear companía</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            name="name"
            className={styles.input}
            type="text"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Dirección</Form.Label>
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
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            name="profile"
            className={styles.input}
            type="text"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Ciudad</Form.Label>
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

export default companies;
