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

    let { prodName } = useParams();

    useEffect(() => {
        fetchCopy(mockedProducts.find(prod => prod.title.toLowerCase().replace(/ /g, "-") === prodName)).then((result) => setProduct(result));
    }, [prodName]);

    return (
        <div className='item-detail-container'>
            {product.id ? <ItemDetail details={product}/> : null}
        </div>
    );
}

export default ItemDetailContainer;

