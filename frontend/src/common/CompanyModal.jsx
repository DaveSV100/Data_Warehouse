import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CompanyForm from '@components/CompanyForm';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import useGetData from '@hooks/useGetData';
import endPoints from '@services/api';
import { addCompany } from '@services/api/companies';
import styles from '@styles/Modal.module.scss'
import styles2 from '@styles/ModalForm.module.scss';

function CompanyModal(props) {
    const cities = useGetData(endPoints.cities.getCities);
    const formRef = useRef(null);
    const [city, setCity] = useState(null);
    const [modalShow, setModalShow] = React.useState(false);
    const [company, setCompany] = useState(props.product);

    console.log(company)



    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        const data = {
            name: formData.get('name'),
            city: city,
            direction: formData.get("direction"),
            email: formData.get("email"),
            phone: formData.get("phone")
        }
        addCompany(data).then((response) => {
            console.log(response);
        })
    }

    return (
      <Modal
        {...props}
        className={styles.modalContainer}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Nueva Compañía
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <Row className="mb-4">
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control name="name" type="text" defaultValue={company} />
                    </Form.Group>
                    <Form.Group value={city} onChange={(e) => setCity(e.target.value)} as={Col} controlId="formGridCity">
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Select defaultValue="Seleccionar...">
                        {cities.map(data => (
                            <option>{data.Name}</option>
                        ))
                        }
                    </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridJob">
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control name="direction" type="text" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" type="text" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCompany">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control name="phone" type="text" />
                    </Form.Group>
                </Row>
                <Button className={styles2.addContact} variant="primary" type="submit" onClick={props.onHide}>
                    Guardar Compañía
                </Button>
            </Form>
        </Modal.Body>
        <Button className={styles.deleteContact} variant="light" onClick={props.onHide}>Eliminar Compañía</Button>{' '}
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    );
  }

  export default CompanyModal;