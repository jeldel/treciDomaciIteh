import React from 'react'
import MenuItem from './MenuItem'

const MenuProduct = ({products, onAdd, onRemove}) => {
  return (
    <div className='all-menu-items'>
        {products.map((product) => (
        <MenuItem
        key = {product.id}
        product={product}
        onAdd = {onAdd}
        onRemove = {onRemove} />
      ))}

    </div>
  )
}

export default MenuProduct