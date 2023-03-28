import './ButtonComprar.css';
import { useContext, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../../context/CartContext/CartContext';

const ButtonComprar = ({prod}) => {
    const {qty, addItem, setQty} = useContext(CartContext);

    useEffect(() => {
        setQty(1);
    }, []);

    return (
        <div className="button-comprar-container">
            <Button variant="secondary" className='btn-comprar' onClick={() => addItem(prod, qty)} disabled={prod.stock === 0 ? true : null}>{prod.stock === 0 ? "SIN STOCK" : "COMPRAR"}</Button>
        </div>
    );
}

export default ButtonComprar;