import './ItemSearchContainer.css';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import ItemList from "../ItemList/ItemList.jsx";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";
import Spinner from 'react-bootstrap/Spinner';

const ItemSearchContainer = () => {
    const [products, setProducts] = useState ([]);
    const [isLoading, setIsLoading] = useState(false);

    let { product } = useParams();

    useEffect(() => {
        setIsLoading(true);
        const getProducts = async () => {
            const q = query(collection(db, "productos"));
            const querySnapshot = await getDocs(q);
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id});
            });
            const filterDocs = docs.filter(prod => prod.title.toLowerCase().indexOf(product.replace(/-/g, " ")) > -1 || prod.category.toLowerCase().indexOf(product.replace(/-/g, " ")) > -1);
            setProducts(filterDocs);
        };
        getProducts();
        setTimeout(() => {
        setIsLoading(false);
        }, 1000);
    }, [product]);

    return (
        <>
            {isLoading ? (
                <div className='item-search-spinner'>
                    <Spinner animation="border" />
                </div>
            ) : (
                <div className='item-search-container'>
                    {products.length === 1 ? <ItemDetail details={products[0]}/> : <ItemList list={products}/>}
                </div>
            )}
        </>
    );
}

export default ItemSearchContainer;