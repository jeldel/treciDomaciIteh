import React from 'react';
import {BsFillCartFill} from 'react-icons/bs';

function NavBar( {cartNum} ) {
  return (
    <div className='navBar'>
      <a>Restoran Štutgart</a>
      <a className='cart-items'>
        <BsFillCartFill />
        <div className='cart-num'> {cartNum} </div>
      </a>
      </div>
  )
}

export default NavBar