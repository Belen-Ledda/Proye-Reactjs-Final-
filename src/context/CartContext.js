import { createContext, useState} from "react";





export const CartContext  = createContext([]);

const CartContextProvider = ({children}) => {
    const [cart,setCart] =useState ([]);

    const addToCart = (cantidad, item) =>{
        console.log(cantidad, item);
        setCart([...cart, { ...item, cantidad }]);
    };
    console.log(cart);
        return (
        <CartContext.Provider value={{cart, addToCart}}>
            {children}
        </CartContext.Provider>
        );
};



export default CartContextProvider;
