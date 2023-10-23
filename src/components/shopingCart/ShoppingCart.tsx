import React from 'react'
import styles from './shoppingcart.module.scss'
import {FaCartShopping} from "react-icons/fa6"
const ShoppingCart = () => {
  return (
    <div className={styles['container']}>
      <FaCartShopping/>
    </div>
  )
}

export default ShoppingCart