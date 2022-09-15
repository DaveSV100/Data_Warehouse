import React, { useState, useRef } from 'react';
import Companies from '@containers/Companies';
import CompanyBtn from '@common/CompanyBtn';
import styles from '@styles/Companies.module.scss';

const companies = () => {

  return (
    <>
      <div className={styles.header}>
        <h2>Compañías</h2>
        <div>
          <CompanyBtn />
        </div>
      </div>
      <Companies />
    </>
  );
};

export default companies;
