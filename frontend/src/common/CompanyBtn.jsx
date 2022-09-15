import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalForm from '@components/ModalForm';
import CompanyModal from '@common/CompanyModal';
import styles from '@styles/ContactModal.module.scss';


  
  function CompanyBtn() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button className={styles.addContact} variant="primary" onClick={() => setModalShow(true)}>
          Agregar Compañía
        </Button>
  
        <CompanyModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }

export default CompanyBtn;