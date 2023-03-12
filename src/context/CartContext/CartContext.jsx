import { createContext, useState } from "react";

export const CartContext = createContext();

const CountProvider = ({children}) => {
    const [qty, setQty] = useState (1);
    const [products, setProducts] = useState ([]);

    const modifyQty = (num) => {
        setQty (qty + num);
    }

    const addItem = (qtyAdded, prodAdded) => {
        prodAdded.quantity = qtyAdded;
        let isInCart = products.indexOf(prodAdded);
        console.log(isInCart);
        if (isInCart === -1) {
            alert(`Agregaste ${qtyAdded} productos`);
            setProducts([...products, prodAdded]);
        } else {
            alert(`${prodAdded.title} ya existe en el carrito`)
        }
    }
    
    const removeItem = (prodToRemove) => {
        setProducts((products) => products.filter((prod) => prod !== prodToRemove));
    }

    const clearCart = () => {
        setProducts([]);
    }
    console.log(products);

    return (
        <CartContext.Provider value={{qty, products, setProducts, modifyQty, addItem, removeItem, clearCart}}>
            {children}
        </CartContext.Provider>
    );
}

export default CountProvider; 

