import { createContext, useState} from "react";

export const CartContext  = createContext([]);

const CartContextProvider = ({children}) => {
    const [cart,setCart] = useState([]);

//agregar items en el carrito
    const addToCart = (item, cantidad) =>{
        console.log(cantidad, item);
        setCart([...cart,{ ...item, cantidad }]);
    };
    console.log(cart);
        return (
        <CartContext.Provider value={{cart, addToCart}}>
            {children}
        </CartContext.Provider>
        );
};



export default CartContextProvider;

