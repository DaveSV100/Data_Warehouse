import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from '@styles/Login.module.scss';

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);


  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const data = {
      email,
      password
    };
    console.log(data);
  };
  return (
    // <Form action='/login' method="POST" ref={form} className='form'>
    <Form action="/login" method="POST" className={styles.form}>
      <h1>Bienvenido a Warehouse</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          className={styles.input}
          type="email"
          placeholder="Enter email"
          ref={emailRef}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          className={styles.input}
          type="password"
          placeholder="Password"
          ref={passwordRef}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
      <Button onClick={handleSubmit} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Login;

// import React, { useRef } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import styles from '@styles/Login.module.scss';

// const Login = () => {
//   const form = useRef(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData(form.current);
//     const data = {
//       username: formData.get('email'),
//       password: formData.get('password'),
//     };
//     console.log(data);
//   };
//   return (
//     // <Form action='/login' method="POST" ref={form} className='form'>
//     <Form action="/login" method="POST" ref={form} className={styles.form}>
//       <h1>Bienvenido a Warehouse</h1>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control
//           name="email"
//           className={styles.input}
//           type="email"
//           placeholder="Enter email"
//         />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control
//           name="password"
//           className={styles.input}
//           type="password"
//           placeholder="Password"
//         />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
//       <Button onClick={handleSubmit} variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//   );
// };

// export default Login;
