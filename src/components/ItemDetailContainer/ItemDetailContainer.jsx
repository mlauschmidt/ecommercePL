import './ItemDetailContainer.css';
import { useEffect, useState } from "react";
import { mockedProducts } from "../../utils/products.js";
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router';

const ItemDetailContainer = () => {
    const fetchCopy = (item) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(item);
            }, 2000);
        });
    };

    const [product, setProduct] = useState([]);

    let { id } = useParams();

    useEffect(() => {
        fetchCopy(mockedProducts[id-1]).then((result) => setProduct(result));
    }, [id]);

    return (
        <div className='item-detail-container'>
            <ItemDetail details={product}/>
        </div>
    );
}

export default ItemDetailContainer;

