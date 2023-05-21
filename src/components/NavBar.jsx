import React from 'react';
import {BsFillCartFill} from 'react-icons/bs';
import {MdContactPage} from 'react-icons/md';
import { Link } from 'react-router-dom';

function NavBar( {cartNum} ) {
  return (
    <div className='navBar'>
      <Link to='/'>Restoran Štutgart</Link>
      <Link to='/cart' className='cart-items'>
        <BsFillCartFill />
        <div className='cart-num'> {cartNum} </div>
      </Link>
      <Link to='/contact ' className='contact'> <MdContactPage /> </Link>
      </div>
  )
}

export default NavBar