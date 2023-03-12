import './ItemCategoryContainer.css';
import { useEffect, useState } from "react";
import { mockedProducts } from "../../utils/products.js";
import { useParams } from 'react-router';
import ItemList from '../ItemList/ItemList';

const ItemCategoryContainer = () => {
    const fetchCopy = (items) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(items);
            }, 2000);
        });
    };

    const [products, setProducts] = useState([]);

    let { category } = useParams();

    useEffect(() => {
        fetchCopy(mockedProducts.filter(prod => prod.category === category)).then((result) => setProducts(result));
    }, [category]);

    return (
        <div className='item-category-container'>
            <ItemList list={products}/>
        </div>
    );
}
  
export default ItemCategoryContainer;