import React, { useState } from 'react';
import useGetData from '@hooks/useGetData';
import endPoints from '@services/api';
import styles from '@styles/Companies.module.scss';
import editIcon from '@images/edit.png';
import deleteIcon from '@images/delete.png';

const Companies = () => {
    const companies = useGetData(endPoints.companies.getCompanies);

    return (
        <>
        <h2>Compañías</h2>
        <button>Agregar</button>
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
                        <img src={editIcon.src} alt="Editar contacto" className={styles.editIcon} />
                        <img src={deleteIcon.src} alt="Borrar contacto" className={styles.deleteIcon} />
                    </div>
                </div>
                ))}
                {/* {
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                }
                {
                    open && <div className={styles.alert}>
                        <h2>¿Seguro que deseas eliminar los contactos seleccionados?</h2>
                        <button onClick={() => setOpen(false)}>Cerrar</button>
                        <button onClick={() => handleDelete(ID)}>Eliminar</button>
                    </div>
                } */}
            </div>

        </section>
        </>
    );
}

export default Companies;