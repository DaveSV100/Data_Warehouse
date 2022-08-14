import React, { useContext, useRef } from 'react';
import AppContext from '@context/AppContext';

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
        <div>
            <input onClick={() => handleClick(userData)} type="checkbox" name="check-user" id="checkBox-user" />
            <p>
                {userData.email}
            </p>
        </div>
    );
}

export default User;