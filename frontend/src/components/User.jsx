import React, { useContext, useRef, useState } from 'react';
import AppContext from '@context/AppContext';
import { deleteContact } from '@services/api/contacts';
import editIcon from '@images/edit.png';
import deleteIcon from '@images/delete.png';
import styles from '@styles/User.module.scss'

const User = ({ userData }) => {
const { addSelection } = useContext(AppContext);

const [open, setOpen] = useState(false)

// const handle = () => {
//     if(req.current.checked) {        
//     }
// }
let toggle = false;

const handleClick = (item) => {
    addSelection(item);
}

const handleDelete = (id) => {
    // alert("Do you wanna delete " + id + "?")
    console.log("eliminando id " + id);
    deleteContact(id).then(response => console.log(response));
    setOpen(false);
}


    return (
        <div className={styles['contact-container']}>
            <input className={styles.input} onClick={() => handleClick(userData)} type="checkbox" name="check-user" id="checkBox-user" />
            <p className={styles.id}>
                {userData.ID}
            </p>
            <p className={styles.email}>
                {userData.email}
            </p>
            <div className={styles.actions}>
                <img src={editIcon.src} alt="Editar contacto" className={styles.editIcon} />
                <img src={deleteIcon.src} alt="Borrar contacto" className={styles.deleteIcon} onClick={() => setOpen(true)} />
            </div>
            {
            open && <div className={styles.alert}>
                <h2>¿Seguro que deseas eliminar los contactos seleccionados?</h2>
                <button onClick={() => setOpen(false)}>Cerrar</button>
                <button onClick={() => handleDelete(userData.ID)}>Eliminar</button>
            </div>
            }
        </div>
    );
}

export default User;