import React, { useState } from 'react';

const Form = ({ onSubmit, fields }) => {
  const [formData, setFormData] = useState({});

  
  const handleChange = (e, fieldName) => {
    const  value  = e.target.value;
    setFormData((prevData) => ({ ...prevData, [fieldName]: value }));
  };
  
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData('')
    
  };
  
  if(formData == "empty"){
    alert('Please fill the fields')
    return
  }
  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.name}>
          <label name={field.name}>{field.label}</label>
          <input
            type={field.type}
            id={field.name}
            name={field.name}
            value={formData[field.name] || ''}
            onChange={(e) => handleChange(e, field.name)}
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
