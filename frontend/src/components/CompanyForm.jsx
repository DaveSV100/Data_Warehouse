import { useState, useRef } from 'react';
import CompanyModal from '@common/CompanyModal';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import useGetData from '@hooks/useGetData';
import endPoints from '@services/api';
import { addCompany } from '@services/api/companies';
import styles2 from '@styles/ModalForm.module.scss';

function ModalForm() {
    const cities = useGetData(endPoints.cities.getCities);
    const formRef = useRef(null);
    const [city, setCity] = useState(null);


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
    <Form ref={formRef}>
      <Row className="mb-4">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control name="name" type="email" />
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
          <Form.Control name="email" type="email" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridCompany">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control name="phone" type="email" />
        </Form.Group>
      </Row>

      <Button className={styles2.addContact} variant="primary" type="submit" onClick={handleSubmit}>
        Guardar Compañía
      </Button>
    </Form>
  );
}

export default ModalForm;