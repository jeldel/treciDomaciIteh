import React from 'react'

const CartProduct = ( {product} ) => {

  return (
        <div className="card-cart">
          <img
            className="card-img-left"
            src="https://picsum.photos/180"
            alt="Neka slika"
          />
          <div className="card-body">
            <h3 className="card-title">{product.title}</h3>
            <p className="card-text">{product.description}</p>
            <h3>Količina: {product.quantity}</h3>
            <h3>Cena: {product.quantity * product.price} RSD</h3>
          </div>
        </div>
      );
}

export default CartProduct