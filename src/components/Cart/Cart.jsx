import './Cart.css';
import { useContext, useEffect } from 'react';
import { CartContext } from '../../context/CartContext/CartContext';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { RiDeleteBinFill } from 'react-icons/ri';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import OrderDetails from '../OrderDetails/OrderDetails';

const Cart = () => {
    const {products, setQtyCart, removeItem, calculateSubtotal, calculateTotal, total, clearCart } = useContext(CartContext);

    const modifyQtyCart = (prod, num) => {
        setQtyCart(prod.quantity = prod.quantity + num);
        calculateSubtotal();
        calculateTotal();
    }

    useEffect(() => {
        setQtyCart();
    }, [setQtyCart]);

    return (
        <>
            <div>
                <Row>
                    <Col md="8" className='col-cart-container'>
                        <div className='cart-container'>
                            {products.length > 0 ?
                                <Table striped>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>PRODUCTO</th>
                                            <th>PRECIO</th>
                                            <th>CANTIDAD</th>
                                            <th>SUBTOTAL</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products.map ((prod) => (
                                            <tr key={prod.id}>
                                                <td><img className='cart-img' src={prod.pictureUrl} alt="foto producto"/></td>
                                                <td>{prod.title}</td>
                                                <td>{`$${prod.price}`}</td>
                                                <td>
                                                    <div className='count-container'>
                                                        <Button className='btn-count' variant="outline-secondary" onClick={() => modifyQtyCart(prod, -1)} disabled={prod.quantity === 1}>-</Button>
                                                        <div className='count-qty'>{prod.quantity}</div>
                                                        <Button className='btn-count' variant="outline-secondary" onClick={() => modifyQtyCart(prod, 1)} disabled={prod.quantity === prod.stock || prod.stock === 0}>+</Button>
                                                    </div>
                                                </td>
                                                <td>{`$${prod.subtotal}`}</td>
                                                <td><RiDeleteBinFill className='btn-remove' onClick={() => removeItem(prod)}/></td>
                                            </tr>
                                        ))}
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td><h3 className='total'>TOTAL:</h3></td>
                                            <td><h3 className='total'>{`$${total}`}</h3></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <div className='btns-checkout'>
                                                    <Link to='/' className='continuar-comprando-link'>
                                                        <Button variant="secondary" className='btn-continuar-comprando'> <RiArrowGoBackFill/> CONTINUAR COMPRANDO </Button>
                                                    </Link>
                                                </div>
                                            </td>
                                            <td></td>
                                            <td>
                                                <div className='btns-checkout'>
                                                    <Button variant="secondary" className='btn-vaciar-carrito' onClick={() => clearCart()}><RiDeleteBinFill/> VACIAR CARRITO</Button>
                                                </div>
                                            </td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </Table> : 
                                <div>
                                    <h3>CARRITO DE COMPRAS VACÍO</h3>
                                </div>
                            }
                        </div>
                    </Col>
                    <Col md="4" className='col-order-details'>
                        <OrderDetails prods={products} total={total}/>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Cart;
