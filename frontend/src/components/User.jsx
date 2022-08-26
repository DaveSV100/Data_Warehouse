import React, { useContext, useRef, useState, useEffect } from 'react';
import AppContext from '@context/AppContext';
import { deleteContact } from '@services/api/contacts';
import editIcon from '@images/edit.png';
import deleteIcon from '@images/delete.png';
import styles from '@styles/User.module.scss';

const User = ({ userData }) => {
    const { addSelection } = useContext(AppContext);

    const [open, setOpen] = useState(false);


    const handleClick = (item) => {
        addSelection(item);
    }

    const handleDelete = (id) => {
        // alert("Do you wanna delete " + id + "?")
        console.log("eliminando id " + id);
        deleteContact(id).then(response => console.log(response));
        setOpen(false);
    }
    const handleEdit = (id) => {
        
    }

    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);


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
                <img src={editIcon.src} alt="Editar contacto" className={styles.editIcon} onClick={() => handleShow} />
                <img src={deleteIcon.src} alt="Borrar contacto" className={styles.deleteIcon} onClick={() => setOpen(true)} />
            </div>
            {/* {
            edit && <ContactModal>
                
            </ContactModal>
            } */}
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




//Original code


// import React, { useContext, useRef, useState, useEffect } from 'react';
// import AppContext from '@context/AppContext';
// import { deleteContact } from '@services/api/contacts';
// import editIcon from '@images/edit.png';
// import deleteIcon from '@images/delete.png';
// import styles from '@styles/User.module.scss'

// const User = ({ userData }) => {
//     const { addSelection } = useContext(AppContext);

//     const [open, setOpen] = useState(false);
//     const [edit, setEdit] = useState(false);


//     const handleClick = (item) => {
//         addSelection(item);
//     }

//     const handleDelete = (id) => {
//         // alert("Do you wanna delete " + id + "?")
//         console.log("eliminando id " + id);
//         deleteContact(id).then(response => console.log(response));
//         setOpen(false);
//     }
//     const handleEdit = (id) => {
        
//     }

//     const [show, setShow] = useState(false);
    
//     const handleShow = () => setShow(true);
//     const handleClose = () => setShow(false);


//     return (
//         <div className={styles['contact-container']}>
//             <input className={styles.input} onClick={() => handleClick(userData)} type="checkbox" name="check-user" id="checkBox-user" />
//             <p className={styles.id}>
//                 {userData.ID}
//             </p>
//             <p className={styles.email}>
//                 {userData.email}
//             </p>
//             <div className={styles.actions}>
//                 <img src={editIcon.src} alt="Editar contacto" className={styles.editIcon} onClick={() => handleShow} />
//                 <img src={deleteIcon.src} alt="Borrar contacto" className={styles.deleteIcon} onClick={() => setOpen(true)} />
//             </div>
//             {/* {
//             edit && <ContactModal>
                
//             </ContactModal>
//             } */}
//             {
//             open && <div className={styles.alert}>
//                 <h2>¿Seguro que deseas eliminar los contactos seleccionados?</h2>
//                 <button onClick={() => setOpen(false)}>Cerrar</button>
//                 <button onClick={() => handleDelete(userData.ID)}>Eliminar</button>
//             </div>
//             }
//         </div>
//     );
// }

// export default User;