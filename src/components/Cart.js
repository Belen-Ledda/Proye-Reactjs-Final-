import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

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
                        <td>{item.descripcion}</td>
                        <td>{item.precio}</td>
                        <td>{item.cantidad}</td>
                        <td>{item.precio * item.cantidad}</td>
                        <td>
                            <button onClick={() => deleteItem(item.id)}>X</button>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            <button onClick= {clear}>Vaciar Carrito</button>
                </>
            )}
        </>
    );
    
};

export default Cart;

