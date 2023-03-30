import './CartWidget.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const {products, calculateSubtotal, calculateTotal} = useContext(CartContext);
    let widgetQty = 0;

    if (products.length > 0) {   
        widgetQty = products.map (prod => prod.quantity).reduce ((a, b) => a + b);
    };

    const handleOnClick = () => {
        calculateSubtotal();
        calculateTotal();
    }
    
    return (
        <div className='cart-widget-container' >
            <Link to={`/carrito`} className='item-link' onClick={() => handleOnClick()}>
                <img src="carrito-de-compras.png" alt="icono carrito de compras" className='cart-icon'/>
                <div className='qty-display'>{widgetQty}</div>
            </Link>
        </div>
    );
}

export default CartWidget;