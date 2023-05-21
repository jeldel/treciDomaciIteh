import React from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div className='restaurant'>
      <ContactInfo />
    <div className='restaurant-form'>
      <h1>  Imate pitanja? Popunite formu i odgovorićemo u najkraćem roku! </h1>
      <ContactForm />
      </div>
      </div>
  );
};

export default Contact;