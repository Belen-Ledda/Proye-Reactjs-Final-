import { createContext, useState} from "react";

export const CartContext  = createContext([]);

const CartContextProvider = ({children}) => {
    const [cart,setCart] = useState([]);

    const isInCart = (id) => {
        return cart.some(item => item.id == id);
    }

    const clear = () => {
        console.log('Vaciando carrito...');
        setCart([]);
    }

    //agregar items en el carrito
    const addToCart = (item, cantidad) =>{
        console.log('Nuevo item: ', item.titulo, ' x ', cantidad);
        if(isInCart(item.id)) {
            console.log('Se repite, agregando al total...');
            const cartCopy = [...cart]; 
            const indexOfProduct = cartCopy.findIndex(product => product.id == item.id);
            cartCopy[indexOfProduct].cantidad += cantidad;
            setCart(cartCopy);
        } else {
            setCart([...cart,{ ...item, cantidad }]);
            console.log('Se agrego ', item.titulo, ' exitosamente');
        }
    };
    

//eliminar por items 

const deleteItem = (id) => {
setCart(cart.filter((item)=>item.id !== id));
}


    return (
        <CartContext.Provider value={{ cart, addToCart, clear, deleteItem }}>
            {children}
        </CartContext.Provider>
    );
};



export default CartContextProvider;

