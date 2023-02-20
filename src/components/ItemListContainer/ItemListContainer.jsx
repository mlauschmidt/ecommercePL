import './ItemListContainer.css';
import { useEffect, useState } from "react";
import { mockedProducts } from "../../utils/products.js";
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
  const fetchCopy = (items) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(items);
      }, 2000);
    });
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchCopy(mockedProducts).then((result) => setProducts(result));
  }, []);

  return (
    <div className='item-list-container'>
      <ItemList list={products}/>
    </div>
  );
}

export default ItemListContainer;

