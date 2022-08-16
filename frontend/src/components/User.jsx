import React, { useContext, useRef } from 'react';
import AppContext from '@context/AppContext';
import styles from '@styles/User.module.scss'

const User = ({ userData }) => {
const { addSelection } = useContext(AppContext);

// const handle = () => {
//     if(req.current.checked) {        
//     }
// }
let toggle = false;

const handleClick = (item) => {
    addSelection(item);
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
        </div>
    );
}

export default User;