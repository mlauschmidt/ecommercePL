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
            <ItemList listado={products}/>
        </div>
    );
}

export default ItemListContainer;

/* ItemListContainer tiene que llevar la logica de la promise y el useEffect, de ahi le pasan la info resuelta a ItemList. ItemList recibe esa info, y va a hacer un map() del componente Item. Item solo recibe la info de cada producto y la muestra */