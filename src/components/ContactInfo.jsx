import React from 'react';

const ContactInfo = () => {
  return (
    <div className='restaurant-item'>
      <h1>Restoran Štutgart</h1>
      <p>Beogradska ulica 1, 11000 Beograd, Srbija</p>
      <p>Telefon 011/2555-555</p>
      <p>Email: restoran@gmail.com</p>
      <p>Website: localhost</p>
      <p>Radno vreme:</p>
      <ul>
        <li>Ponedeljak - četvrtak : 09:00 - 22:00 </li>
        <li>Petak - nedelja : 10:00 - 01:00</li>
      </ul>
    </div>
  );
};

export default ContactInfo;
