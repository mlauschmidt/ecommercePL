import './CartWidget.css';

const CartWidget = () => {
    return (
        <div className='contenedor-carrito'>
            <img src="carrito-de-compras.png" alt="icono carrito de compras" className='icono-carrito'/>
            <div className='qty-display'>0</div>
        </div>
    );
}

export default CartWidget;