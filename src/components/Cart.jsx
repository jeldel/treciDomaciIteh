import React from 'react'
import CartProduct from './CartProduct'

const Cart = ({cartProducts}) => {
  const initPrice = 0;
  const total = cartProducts.reduce(
    (accumulator, current) => accumulator + current.price * current.quantity,
    initPrice
  );
  return (
    <div className='cart-container'>

      <div className='cart-item-text'>
        Proizvodi u korpi:
      </div>
      <div className='cart-item'>
      {cartProducts.map((product) => (
        <CartProduct key = {product.id} product={product} />
      ))}
      </div>
      <div className='cart-item-main'>Ukupno: {total} RSD</div>
    </div>
  )
}

export default Cart