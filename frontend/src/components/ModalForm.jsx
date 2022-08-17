import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import styles from '@styles/ModalForm.module.scss';

function ModalForm() {
  return (
    <Form>
      <Row className="mb-4">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="email" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridJob">
          <Form.Label>Cargo</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridCompany">
          <Form.Label>Compañía</Form.Label>
          <Form.Control type="email" />
        </Form.Group>
      </Row>

      <Row className="mb-4">

        <Form.Group as={Col} controlId="formGridRegion">
          <Form.Label>Región</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCountry">
          <Form.Label>País</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Ciudad</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridDirection">
          <Form.Label>Dirección</Form.Label>
          <Form.Control type="email" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridInterest">
          <Form.Label>Interés</Form.Label>
          <div>
            <input type="range"></input>
          </div>
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

      <Row className="mb-4">
        <Form.Group as={Col} controlId="formGridChannel">
          <Form.Label>Canal de contacto</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridAccount">
          <Form.Label>Cuenta de usuario</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPreferences">
          <Form.Label>Preferencias</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Row className="mb-1">
        <Form.Group as={Col} controlId="formGridChannel">
          <Form.Label>Canal de contacto</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridAccount">
          <Form.Label>Cuenta de usuario</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPreferences">
          <Form.Label>Preferencias</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
      </Row>

      {/* <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}

      <Button className={styles.addContact} variant="primary" type="submit">
        Guardar Contacto
      </Button>
    </Form>
  );
}

export default ModalForm;