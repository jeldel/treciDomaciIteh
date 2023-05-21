import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log(formData);

    if(formData.name === '' || formData.email === '' || formData.message === ''){
      alert('Pogrešan unos!');
    }
    else{
      alert('Uspešno ste poslali poruku!');
    }

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
        Ime:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Poruka:
        <textarea type ="message" name="message" value={formData.message} onChange={handleChange} />
      </label>
      <button type="submit">Pošalji</button>
    </form>
    </>
  );
};

export default ContactForm;
