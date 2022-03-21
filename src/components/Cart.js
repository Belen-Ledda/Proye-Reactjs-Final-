import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
    const { cart, clear, deleteItem  } = useContext(CartContext);
    console.log(cart)
    return (
        <>
            {cart.length=== 0 ? (
            <>
                <h2>Aún no hay Productos!, volve al Home</h2>
                <Link to="/">HOME</Link>
            </>
            ): (
                <>
                 <table>
                    <thead>
                    <tr>
                        <th></th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {cart.map((item) => (
                        <tr key={item.id}>
                        <td>
                            <img src={item.imagenUrl} alt="producto" />
                        </td>
                        <td>{item.titulo}</td>
                        <td>{item.cantidad}</td>
                        <td>${item.precio}</td>
                        <td>${item.precio * item.cantidad}</td>
                        <td>
                            <button className='add-to-cart-button' onClick={() => deleteItem(item.id)}>ELIMINAR ITEM</button>
                        </td>
                        </tr>
                    ))}
            </tbody>
                </table>
            <button className='add-to-cart-button' onClick= {clear}>Vaciar Carrito</button>
            <button >TERMINAR MI COMPRA</button>
                </>
            )}
        </>
    );
    
};

export default Cart;

