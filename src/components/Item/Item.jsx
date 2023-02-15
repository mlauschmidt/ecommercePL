import './Item.css';

const Item = ({ id, title, description, price, pictureUrl }) => {
    return (
        <div className='item'>
            <p>{id}</p>
            <p>{title}</p>
            <p>{description}</p>
            <p>{price}</p>
            <p>{pictureUrl}</p>
        </div>
    );
}

export default Item;