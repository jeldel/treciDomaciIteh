import React from 'react'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai';

const MenuItem = ({product}) => {
  return (
    <div className='card'>
        <img className="card-img-top" src='https://picsum.photos/200' alt='Slika'/>
        <div className='card-body'>
            <h3 className='card-title'>{product.title} </h3>
            <p className='card-text'> {product.description} </p>
            <h4 className='card-price'>Cena: {product.price} </h4>
        </div>
        <div className='card-footer'>
          <h4 className='card-quantity'>Količina: {product.quantity}</h4>
        <a className='btn'> <AiOutlinePlus /> </a>
        <a className='btn'> <AiOutlineMinus /> </a>
        </div>
    </div>
  )
}

export default MenuItem