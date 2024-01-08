import React from 'react';
import Form from './Form';

const MyForm = () => {
  const handleSubmit = (formData) => {
    console.log( formData);
   
  };

  

  const formFields = [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    { name: 'email', type: 'email', label: 'Email' },
  ];

  return (
    <div>
      <h2>My Form</h2>
      <Form onSubmit={handleSubmit} fields={formFields} />
    </div>
  );
};

export default MyForm;
