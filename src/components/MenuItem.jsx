import React from 'react'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai';

const MenuItem = ({product, onAdd, onRemove, key}) => {
  
  return (
    <div className='card'>
        <img className="card-img-top" src='https://picsum.photos/220' alt='Slika'/>
        <div className='card-body'>
            <h3 className='card-title'>{product.title} </h3>
            <p className='card-text'> {product.description} </p>
            <h4 className='card-price'>Cena: {product.price} RSD </h4>
        </div>

        <div className='card-footer'>
          <h4 className='card-quantity'> 
            Količina: {product.quantity}
          </h4>
          <button className='btn' onClick={() => onAdd(product.id)}> 
            <AiOutlinePlus /> 
          </button>
          <button className='btn' onClick={() => onRemove(product.id)}>
            <AiOutlineMinus />
          </button>
        </div>

    </div>
  )
}

export default MenuItem