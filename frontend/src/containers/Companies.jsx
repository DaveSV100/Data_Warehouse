import React, { useState } from 'react';
import useGetData from '@hooks/useGetData';
import endPoints from '@services/api';
import { deleteCompany } from '@services/api/companies';
import CompanyModal from '@common/CompanyModal'
import styles from '@styles/Companies.module.scss';
import editIcon from '@images/edit.png';
import deleteIcon from '@images/delete.png';

const Companies = () => {
    const companies = useGetData(endPoints.companies.getCompanies);
    const [remove, setRemove] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [ID, setID] = useState("");

    const handleEdit = (id) => {
        console.log("editing id: ", id)
    }

    const handleDelete = (id) => {
        console.log("eliminando id " + id);
        deleteCompany(id).then(response => console.log(response));
        setRemove(false);
    }

    return (
        <>
        <section className={styles['main-container']}>
            <div className={styles.titles}>
                <ul>
                    <li>Nombre</li>
                    <li>Ciudad</li>
                    <li>Dirección</li>
                    <li>Email</li>
                    <li>Teléfono</li>
                    <li>Acciones</li>
                </ul>
            </div>
            <div className={styles.UsersList}>
                {companies.map(data => (
                    <div className={styles['contact-container']} key={`Contact-`}>
                    <p className={styles.name}>
                        {data.Name}
                    </p>
                    <p className={styles.city_id}>
                        {data.City}
                    </p>
                    <p className={styles.direction}>
                        {data.Direction}
                    </p>
                    <p className={styles.email}>
                        {data.Email}
                    </p>
                    <p className={styles.phone}>
                        {data.Phone}
                    </p>
                    <div className={styles.actions}>
                        <img src={editIcon.src} alt="Editar contacto" className={styles.editIcon} onClick={() => {setModalShow(true), handleEdit(data.ID), setID(data.ID)} } />
                        <img src={deleteIcon.src} alt="Borrar contacto" className={styles.deleteIcon} onClick={() => {setRemove(true), setID(data.ID)} } />
                    </div>
                </div>
                ))}
                {
                    <CompanyModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                } 
                {
                    remove && 
                    <div className={styles.alert} onClick={()=> setRemove(false)}>
                        <div className={styles.ad}>
                            <h4>¿Seguro que deseas eliminar la companía seleccionada?</h4>
                            <button onClick={() => setRemove(false)}>Cerrar</button>
                            <button onClick={() => handleDelete(ID)}>Eliminar</button>                
                        </div>
                    </div>
                }
            </div>

        </section>
        </>
    );
}

export default Companies;