import './CartWidget.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext/CartContext';

const CartWidget = () => {
    const {products} = useContext(CartContext);
    let cartQty = 0;

    if (products.length > 0) {   
        cartQty = products.map (prod => prod.quantity).reduce ((a, b) => a + b);
    };
    console.log(cartQty);
    
    return (
        <div className='cart-container'>
            <img src="carrito-de-compras.png" alt="icono carrito de compras" className='cart-icon'/>
            <div className='qty-display'>{cartQty}</div>
        </div>
    );
}

export default CartWidget;