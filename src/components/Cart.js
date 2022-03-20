import React, {useContext} from 'react';
import { CartContext } from '../context/CartContext';




export default function CartWidget(){
    const {cart} = useContext(CartContext);
    return (
        <>
        {cart && cart.map((item)=>{
            <div key={item.id}>
            <h3>{item.titulo}</h3>
            </div>
        })}
        </>
    );
    
    };
    