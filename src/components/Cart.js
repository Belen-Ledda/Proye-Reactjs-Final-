import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const { cart, clear, deleteItem  } = useContext(CartContext);
    return (
        <>
            {cart.length=== 0 ? (
            <>
                <h2>Aún no hay Productos!, volve al Home</h2>
                <Link to="/">HOME</Link>
            </>
            ): (
                <>
                {cart.map(item => {
                return (
                    <div key={item.id}>
                        <h3>{item.titulo}</h3>
                        <h5>{item.cantidad}</h5>
                        <button onClick={()=> deleteItem(item.id)}>X</button>
                    </div>
                )
            })}
            <button onClick= {clear}>Vaciar Carrito</button>
                </>
            )}
        </>
    );
    
};

export default Cart;

