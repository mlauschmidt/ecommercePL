import './ItemCount.css';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../../context/CartContext/CartContext';

const ItemCount = ({prod}) => {
    const {qty, modifyQty} = useContext(CartContext);

    return (
        <div className="item-count">
            <div className='count-container'>
                <Button className='count-button' variant="outline-secondary" onClick={() => modifyQty(-1)} disabled={qty === 1}>-</Button>
                <div className='count-qty'>{prod.stock === 0 ? 0 : qty}</div>
                <Button className='count-button' variant="outline-secondary" onClick={() => modifyQty(+1)} disabled={qty === prod.stock || prod.stock === 0}>+</Button>
            </div>
        </div>
    );
}

export default ItemCount;
