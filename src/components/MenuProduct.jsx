import React from 'react'
import MenuItem from './MenuItem'

const MenuProduct = ({products}) => {
  return (
    <div className='all-menu-items'>
        <MenuItem product = {products[0]} />
        <MenuItem product = {products[1]}/>
        <MenuItem product = {products[2]}/>
        <MenuItem product = {products[3]}/>
    </div>
  )
}

export default MenuProduct