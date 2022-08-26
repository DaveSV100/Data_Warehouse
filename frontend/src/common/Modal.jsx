import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalForm from '@components/ModalForm';
import styles from '@styles/Modal.module.scss'


function MyVerticallyCenteredModal(props) {
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
            Nuevo Contacto
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalForm />
        </Modal.Body>
        <Button className={styles.deleteContact} variant="light" onClick={props.onHide}>Eliminar Contacto</Button>{' '}
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    );
  }

  export default MyVerticallyCenteredModal;