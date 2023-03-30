import { createContext, useState } from "react";

export const CartContext = createContext();

const CountProvider = ({children}) => {
    const [qty, setQty] = useState (1);
    const [products, setProducts] = useState ([]);
    const [qtyCart, setQtyCart] = useState (0);
    const [total, setTotal] = useState (0);

    const modifyQty = (num) => {
        setQty (qty + num);
    }

    const addItem = (prodAdded, qtyAdded) => {
        let isInCart = products.includes(prodAdded);
        if (isInCart === false) {
            prodAdded.quantity = qtyAdded;
            setProducts([...products, prodAdded]);
        } else {
            alert(`${prodAdded.title} ya existe en el carrito`);
        };
    }

    const calculateSubtotal = () => {
        products.forEach ((prod) => {
            let prodSubtotal = prod.quantity * prod.price;
            prod.subtotal = prodSubtotal;
        });
    }

    const calculateTotal = () => {
        setTotal(products.map (prod => prod.subtotal).reduce ((a, b) => a + b));
    }
    
    const removeItem = (prodToRemove) => {
        setProducts((products) => products.filter((prod) => prod !== prodToRemove));
    }

    const clearCart = () => {
        setProducts([]);
        setTotal(0);
    }
    
    return (
        <CartContext.Provider value={{qty, setQty, products, setProducts, qtyCart, setQtyCart, modifyQty, calculateSubtotal, calculateTotal, total, addItem, removeItem, clearCart}}>
            {children}
        </CartContext.Provider>
    );
}

export default CountProvider; 

