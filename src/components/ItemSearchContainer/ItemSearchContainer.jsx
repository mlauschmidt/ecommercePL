import { useState, useEffect } from "react";
import { mockedProducts } from "../../utils/products.js";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import ItemList from "../ItemList/ItemList.jsx";

const ItemSearchContainer = () => {
    const fetchCopy = (items) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(items);
            }, 2000);
        });
    };

    const [products, setProducts] = useState ([]);

    let { product } = useParams();

    useEffect(() => {
        fetchCopy(mockedProducts.filter(prod => prod.title.toLowerCase().indexOf(product.replace(/-/g, " ")) > -1)).then((res) => setProducts(res));
    }, [product]);

    return (
        <div className="busqueda-productos">
            {products.length === 1 ? <ItemDetail details={products[0]}/> : <ItemList list={products}/>}
        </div>
    );
}

export default ItemSearchContainer;