import './ItemListContainer.css';

const ItemListContainer = (props) => {
    return (
        <div className='item-list-container'>
            <p className='greeting'>{props.greeting}</p>
        </div>
    );
}

export default ItemListContainer;