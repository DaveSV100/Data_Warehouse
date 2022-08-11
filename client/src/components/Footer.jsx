import React from 'react';
import '@styles/footer.scss';
const Footer = () => {
    return (
        <footer>
            <div className='footer-rows'>
                <p>Filas por página 10</p>
            </div>
            <div className='footer-order'>
                <p>1-10 de 30 filas</p>
                <p>Arrows icon</p>
            </div>
        </footer>
    );
}

export default Footer;