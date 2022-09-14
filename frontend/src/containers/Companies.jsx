import React from "react";
import styles from '@styles/Companies.module.scss';
import editIcon from '@images/edit.png';
import deleteIcon from '@images/delete.png';

const Companies = () => {
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
                    <div className={styles['contact-container']} key={`Contact-`}>
                        <p className={styles.id}>
                            DAVID
                        </p>
                        <p className={styles.email}>
                            Hello
                        </p>
                        <div className={styles.actions}>
                            <img src={editIcon.src} alt="Editar contacto" className={styles.editIcon} />
                            <img src={deleteIcon.src} alt="Borrar contacto" className={styles.deleteIcon} />
                        </div>
                    </div>
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