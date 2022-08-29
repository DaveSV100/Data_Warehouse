import React, { useState } from 'react';
import styles from '@styles/Region.module.scss'

const region = () => {
    const [countries2, setCountries2] = useState(false);
    const [display, setDisplay] = useState(false);
    
    const toggleDisplay = () => {
        setDisplay(!display);
      };

    return (
        <>    
            <h1>Región/Ciudad</h1>
            <div>
                    <ul>
                        <li>Norteamérica
                            <ul>
                                <li>Estados Unidos</li>
                                <li>México</li>
                            </ul>
                        </li>
                        <li onClick={() => setCountries2(!countries2)} className={styles.region}>Sudamérica
                            {
                                countries2 && 
                                <ul>
                                    <li onClick={() => toggleDisplay()}>Argentina
                                        
                                            <ul className={display ? 'styles.active' : 'styles.unactive'}>
                                                <li>Buenos Aires</li>
                                                <li>Rosario</li>
                                            </ul>
            
                                    </li>
                                    <li>Colombia</li>
                                </ul>
                            }
                        </li>
                        <li>Europa
                            <ul>
                                <li>España</li>
                                <li>Francia</li>
                            </ul>
                        </li>
                    </ul>

            </div>
        </>
    );
}

export default region;