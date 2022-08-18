import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import styles from '@styles/ModalForm.module.scss';



function ModalForm() {
    const formRef = useRef(null);
    const [region, setRegion] = useState(null);
    const [country, setCountry] = useState(null);
    const [city, setCity] = useState(null);
    const [interest, setInterest] = useState(null);
    const [preference, setPreference] = useState(null);
    const [preference2, setPreference2] = useState(null);
    const [preference3, setPreference3] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        const data = {
            username: formData.get('name'),
            lastname: formData.get('lastName'),
            job: formData.get("job"),
            email: formData.get("email"),
            company: formData.get("company"),
            region: region,
            country: country,
            city: city,
            direction: formData.get("direction"),
            interest: interest,
            whatsapp: formData.get("WhatsApp"),
            preference: preference,
            linkedin: formData.get("Linkedin"),
            preference2: preference2,
            twitter: formData.get("Twitter"),
            preference3: preference3,
        }
        console.log(data);
    }


  return (
    <Form ref={formRef}>
      <Row className="mb-4">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control name="name" type="email" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label>Apellido</Form.Label>
          <Form.Control name="lastName" type="text" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridJob">
          <Form.Label>Cargo</Form.Label>
          <Form.Control name="job" type="text" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control name="email" type="email" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridCompany">
          <Form.Label>Compañía</Form.Label>
          <Form.Control name="company" type="email" />
        </Form.Group>
      </Row>

      <Row className="mb-4">

        <Form.Group value={region} onChange={(e) => setRegion(e.target.value)} as={Col} controlId="formGridRegion">
          <Form.Label>Región</Form.Label>
          <Form.Select defaultValue="Seleccionar...">
          <option>Seleccionar...</option>
            <option>North América</option>
            <option>Sudamérica</option>
            <option>Europa</option>
          </Form.Select>
        </Form.Group>

        <Form.Group value={country} onChange={(e) => setCountry(e.target.value)} as={Col} controlId="formGridCountry">
          <Form.Label>País</Form.Label>
          <Form.Select defaultValue="Seleccionar...">
          <option>Seleccionar...</option>
            <option>England</option>
            <option>France</option>
          </Form.Select>
        </Form.Group>

        <Form.Group value={city} onChange={(e) => setCity(e.target.value)} as={Col} controlId="formGridCity">
          <Form.Label>Ciudad</Form.Label>
          <Form.Select defaultValue="Seleccionar...">
            <option>Seleccionar...</option>
            <option>New York</option>
            <option>London</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridDirection">
          <Form.Label>Dirección</Form.Label>
          <Form.Control name="direction" type="text" />
        </Form.Group>

        <Form.Group value={interest} onChange={(e) => setInterest(e.target.value)} as={Col} controlId="formGridInterest">
          <Form.Label>Interés</Form.Label>
          <Form.Select defaultValue="Seleccionar...">
          <option>Seleccionar...</option>
            <option>0</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </Form.Select>
        </Form.Group>
      </Row>

      {/* <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Cargo</Form.Label>
        <Form.Control placeholder="Full Stack Developer" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group> */}

      <Row className="mb-2">

        <Form.Group as={Col} controlId="formGridAccount">
          <Form.Label>WhatsApp</Form.Label>
          <Form.Control name="WhatsApp" />
        </Form.Group>

        <Form.Group value={preference} onChange={(e) => setPreference(e.target.value)} as={Col} controlId="formGridPreferences">
          <Form.Label>Preferencias</Form.Label>
          <Form.Select defaultValue="Seleccionar...">
          <option>Seleccionar...</option>
            <option>Canal favorito</option>
            <option>No molestar</option>
            <option>Sin preferencia</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Row className="mb-2">

        <Form.Group as={Col} controlId="formGridAccount2">
          <Form.Label>Linkedin</Form.Label>
          <Form.Control name="Linkedin" />
        </Form.Group>

        <Form.Group value={preference2} onChange={(e) => setPreference2(e.target.value)} as={Col} controlId="formGridPreferences2">
          <Form.Label>Preferencias</Form.Label>
          <Form.Select defaultValue="Seleccionar...">
            <option>Seleccionar...</option>
            <option>Canal favorito</option>
            <option>No molestar</option>
            <option>Sin preferencia</option>
          </Form.Select>
        </Form.Group>

      </Row>

      <Row className="mb-2">

        <Form.Group as={Col} controlId="formGridAccount3">
        <Form.Label>Twitter</Form.Label>
        <Form.Control name="Twitter"/>
        </Form.Group>

        <Form.Group value={preference3} onChange={(e) => setPreference3(e.target.value)} as={Col} controlId="formGridPreferences3">
        <Form.Label>Preferencias</Form.Label>
        <Form.Select defaultValue="Seleccionar...">
            <option>Seleccionar...</option>
            <option>Canal favorito</option>
            <option>No molestar</option>
            <option>Sin preferencia</option>
        </Form.Select>
        </Form.Group>

        </Row>

      {/* <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}

      <Button className={styles.addContact} variant="primary" type="submit" onClick={handleSubmit}>
        Guardar Contacto
      </Button>
    </Form>
  );
}

export default ModalForm;