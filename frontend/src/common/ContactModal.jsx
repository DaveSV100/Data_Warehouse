import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalForm from '@components/ModalForm';
import MyVerticallyCenteredModal from '@common/Modal';
import styles from '@styles/ContactModal.module.scss';


  
  function ContactModal() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button className={styles.addContact} variant="primary" onClick={() => setModalShow(true)}>
          Agregar Contacto
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }

export default ContactModal;






















//Original code


// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import ModalForm from '@components/ModalForm';
// import styles from '@styles/ContactModal.module.scss';

// function MyVerticallyCenteredModal(props) {
//     return (
//       <Modal
//         {...props}
//         className={styles.modalContainer}
//         size="xl"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title id="contained-modal-title-vcenter">
//             Nuevo Contacto
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <ModalForm />
//         </Modal.Body>
//         <Button className={styles.deleteContact} variant="light" onClick={props.onHide}>Eliminar Contacto</Button>{' '}
//         <Modal.Footer>
//         </Modal.Footer>
//       </Modal>
//     );
//   }
  
//   function ContactModal() {
//     const [modalShow, setModalShow] = React.useState(false);
  
//     return (
//       <>
//         <Button className={styles.addContact} variant="primary" onClick={() => setModalShow(true)}>
//           Agregar Contacto
//         </Button>
  
//         <MyVerticallyCenteredModal
//           show={modalShow}
//           onHide={() => setModalShow(false)}
//         />
//       </>
//     );
//   }

// export default ContactModal;