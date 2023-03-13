import './Cart.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext/CartContext';
import Table from 'react-bootstrap/Table';

const Cart = () => {
    const {products, subtotal, calculateSubtotal} = useContext(CartContext);

    return (
        <div className='cart-container'>
            <Table striped>
                <thead>
                    <tr>
                        <th>PRODUCTO</th>
                        <th>PRECIO</th>
                        <th>CANTIDAD</th>
                        <th>SUBTOTAL</th>
                        <th></th>
                    </tr>
                </thead>
                {products.map((prod) => (
                    <tbody key={prod.id}>
                        <tr>
                        <td>{prod.title}</td>
                        <td>{prod.price}</td>
                        <td>{prod.quantity}</td>
                        <td>{prod.subtotal}</td>
                        <td><button>Delete</button></td>
                        </tr>
                    </tbody>
                ))}     
            </Table>           
        </div>
    );
}

export default Cart;