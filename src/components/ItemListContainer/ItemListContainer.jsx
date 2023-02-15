import './ItemListContainer.css';

const ItemListContainer = (props) => {
    return (
        <div className='item-list-container'>
            <p className='greeting'>{props.greeting}</p>
        </div>
    );
}

export default ItemListContainer;

/* ItemListContainer tiene que llevar la logica de la promise y el useEffect, de ahi le pasan la info resuelta a ItemList. ItemList recibe esa info, y va a hacer un map() del componente Item. Item solo recibe la info de cada producto y la muestra */