import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext'
import ItemCount from './ItemCount';



import './ItemDetail.css';

export default function ItemDetail({ item }) {
  const [showButton, setShowButton] = useState (false);
  const { addToCart, cart }=useContext(CartContext)

  const onAdd = (cantidad) => {
    console.log (cantidad);
    setShowButton(true);
    addToCart(item, cantidad); 

  };

console.log(cart)

  return (
    <div className='item'>
      <img src={item.imagenUrl} alt="Imagen del producto" />
      <div className='derecha-column'>
        <div>
          <h1>{item.titulo}</h1>
          <p className='precio'>$ {item.precio}</p>
          <p className='descripcion'>{item.descripcion}</p>
          {showButton ? (
          <Link to="/Cart">Ir al carrito</Link> 
        ): (
          <ItemCount stock= {item.stock} initial={0} onAdd={onAdd}/> 
        )}

        </div>
      </div>
    </div>
  )
}
