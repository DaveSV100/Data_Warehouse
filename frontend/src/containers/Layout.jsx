import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>
            {children}
        </div>
    );
}

export default Layout;