import './ItemDetailContainer.css';
import { useEffect, useState } from "react";
import { mockedProducts } from "../../utils/products.js";
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({ prod }) => {
    const fetchCopy = (item) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(item);
            }, 2000);
        });
    };

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetchCopy(mockedProducts[prod-1]).then((result) => setProduct(result));
    }, [prod]);

    return (
        <div className='item-detail-container'>
            <ItemDetail details={product}/>
        </div>
    );
}

export default ItemDetailContainer;

