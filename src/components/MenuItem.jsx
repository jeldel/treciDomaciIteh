import React from 'react'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai';

const MenuItem = () => {
  return (
    <div className='card'>
        <img className="card-img-top" src='https://picsum.photos/200' alt='Slika'/>
        <div className='card-body'>
            <h3 className='card-title'>Naziv obroka</h3>
            <p className='card-text'> 
            Opis obroka koji cemo izmeniti kasnije.
            </p>
            <h5 className='card-price'>Cena obroka: </h5>
        </div>
        <div className='card-footer'>
        <a className='btn'> <AiOutlinePlus /> </a>
        <a className='btn'> <AiOutlineMinus /> </a>
        </div>
    </div>
  )
}

export default MenuItem