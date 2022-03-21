import React, { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CartContext } from '../context/CartContext';


const CartWidget = () => {
  const { totalOfItems } = useContext(CartContext);

  return (
    <>
      <AiOutlineShoppingCart fontSize="26px" />
      {totalOfItems() > 0 && totalOfItems()}
    </>
  )
};

export default CartWidget;
