import React from 'react';
const User = ({ userData }) => {

    return (
        <p>
            {userData.email}
        </p>
    );
}

export default User;