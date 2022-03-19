import React, {useContext} from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CartContext } from '../context/CartContext';


export default function CartWidget() {
  return <AiOutlineShoppingCart fontSize="26px" />
};

const Cart = () => {
  const {cart}=useContext(CartContext);


  return (
    <>
      {cart.map((item)=>{
        <div key={item.id}>
          <h3>{item.name}</h3>
        </div>

      })}
    </>
  );

};

export default Cart;






