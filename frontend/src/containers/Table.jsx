import React, { useState, useContext } from 'react';
import AppContext from '@context/AppContext';
import { deleteContact } from '@services/api/contacts';
import useGetUsers from '@hooks/useGetUsers';
import endPoints from '@services/api';
import ContactModal from '@common/ContactModal';
import MyVerticallyCenteredModal from '@common/Modal';
import User from '@components/User';
import styles from '@styles/Table.module.scss';
import editIcon from '@images/edit.png';
import deleteIcon from '@images/delete.png';

const Table = () => {
    const users = useGetUsers(endPoints.users.getUsers);
    const [modalShow, setModalShow] = useState(false);
    const [open, setOpen] = useState(false);
    const [edit, setEdit] = useState(false);
    const [ID, setID] = useState("");

    const handleClick = (item) => {
        addSelection(item);
    }

    const handleDelete = (id) => {
        console.log("eliminando id " + id);
        deleteContact(id).then(response => console.log(response));
        setOpen(false);
    }

    const handleEdit = (id) => {
        console.log("editing id " + id);
        // deleteContact(id).then(response => console.log(response));
        // setEdit(false);
    }

    return (
        <section className={styles['main-container']}>
            <div className={styles.titles}>
                <ul>
                    <li><input type="checkbox" /></li>
                    <li>Contacto</li>
                    <li>País/Región</li>
                    <li>Compañía</li>
                    <li>Cargo</li>
                    <li>Canal preferido</li>
                    <li>Interés</li>
                    <li>Acciones</li>
                </ul>
            </div>
            <div className={styles.UsersList}>
                {users.map(data => (
                    // <User userData={data} key={`Contact-${data.ID}`} />
                    <div className={styles['contact-container']} key={`Contact-${data.ID}`}>
                        <input className={styles.input} onClick={() => handleClick(data)} type="checkbox" name="check-user" id="checkBox-user" />
                        <p className={styles.id}>
                            {data.ID}
                        </p>
                        <p className={styles.email}>
                            {data.email}
                        </p>
                        <div className={styles.actions}>
                            <img src={editIcon.src} alt="Editar contacto" className={styles.editIcon} onClick={function editStates() { setModalShow(true), setEdit(true), setID(data.ID)} } />
                            <img src={deleteIcon.src} alt="Borrar contacto" className={styles.deleteIcon} onClick={function deleteStates() {setOpen(true), setID(data.ID)} } />
                        </div>
                    </div>

                    ))
                }

                {
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                    // <div>
                    //     <h3>Editing contact</h3>
                    //     <button onClick={() => setEdit(false)}>Cerrar</button>
                    //     <button onClick={() => handleEdit(ID)}>Editar</button>
                    // </div>
                }
                {
                    open && <div className={styles.alert}>
                        <h2>¿Seguro que deseas eliminar los contactos seleccionados?</h2>
                        <button onClick={() => setOpen(false)}>Cerrar</button>
                        <button onClick={() => handleDelete(ID)}>Eliminar</button>
                    </div>
                }


            </div>

        </section>
    );
}

export default Table;






//Original code
// import React, { useState, useContext } from 'react';
// import AppContext from '@context/AppContext';
// import { deleteContact } from '@services/api/contacts';
// import useGetUsers from '@hooks/useGetUsers';
// import endPoints from '@services/api';
// import User from '@components/User';
// import styles from '@styles/Table.module.scss';
// import editIcon from '@images/edit.png';
// import deleteIcon from '@images/delete.png';

// const Table = () => {
//     const users = useGetUsers(endPoints.users.getUsers);

//     return (
//         <section className={styles['main-container']}>
//             <div className={styles.titles}>
//                 <ul>
//                     <li><input type="checkbox" /></li>
//                     <li>Contacto</li>
//                     <li>País/Región</li>
//                     <li>Compañía</li>
//                     <li>Cargo</li>
//                     <li>Canal preferido</li>
//                     <li>Interés</li>
//                     <li>Acciones</li>
//                 </ul>
//             </div>
//             <div className={styles.UsersList}>
//                 {/* {users.map(user => (
//                     // console.log(user)
//                     <ul>
//                         <li>{user.email}</li>
//                     </ul>
//                 ))} */}
//                 {/* {users.map(function(user, i) {
//                     return <p key={i}>{user.email}</p>
                            
//                 })} */}

//                 {users.map(data => (
//                     <User userData={data} key={`Contact-${data.ID}`} />
//                 ))
//                 }
//             </div>
//         </section>
//     );
// }

// export default Table;