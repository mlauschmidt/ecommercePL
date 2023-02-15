import './ItemList.css';
import Item from '../Item/Item';

const ItemList = (props) => {
    return (
        <div className='item-list'>
            {props.listado.map((prod) => (
            <Item
                key={prod.id}
                id= {prod.id}
                title= {prod.title}
                description= {prod.description}
                price= {prod.price}
                pictureUrl= {prod.pictureUrl}
            />
            ))}
        </div>
    );
}

export default ItemList;

