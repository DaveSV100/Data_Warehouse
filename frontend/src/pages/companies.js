import React, { useState, useRef } from 'react';
import Companies from '@containers/Companies';
import CompanyBtn from '@common/CompanyBtn';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const companies = () => {

  return (
    <>
      <h2>Compañías</h2>
      <CompanyBtn />
      <Companies />
    </>
  );
};

export default companies;
