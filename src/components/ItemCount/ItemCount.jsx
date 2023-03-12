import './ItemCount.css';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../../context/CartContext/CartContext';

const ItemCount = ({prod, initial}) => {
    const {qty, modifyQty, addItem, removeItem, clearCart} = useContext(CartContext);

    return (
        <div className="item-count">
            <div className='count-container'>
                <Button className='count-button' variant="outline-secondary" onClick={() => modifyQty(-1)} disabled={qty === initial}>-</Button>
                <div className='count-qty'>{qty}</div>
                <Button className='count-button' variant="outline-secondary" onClick={() => modifyQty(+1)} disabled={qty === prod.stock || prod.stock === 0}>+</Button>
                <Button className='count-button' variant="outline-secondary" onClick={() => removeItem(prod)}>R</Button>
                <Button className='count-button' variant="outline-secondary" onClick={() => clearCart(prod)}>C</Button>
            </div>
            <Button variant="secondary" className='btn-comprar' onClick={() => addItem(qty, prod)} disabled={prod.stock === 0 ? true : null}>{prod.stock === 0 ? "SIN STOCK" : "COMPRAR"}</Button>
        </div>
    );
}

export default ItemCount;
