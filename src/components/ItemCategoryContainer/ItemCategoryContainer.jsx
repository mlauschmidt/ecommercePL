import './ItemCategoryContainer.css';
import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import ItemList from '../ItemList/ItemList';
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";
import Spinner from 'react-bootstrap/Spinner';

const ItemCategoryContainer = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    let { category } = useParams();

    useEffect(() => {
        setIsLoading(true);
        const getProducts = async () => {
            const q = query(collection(db, "productos"), where("category", "==", category));
            const querySnapshot = await getDocs(q);
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id});
            });
            setProducts(docs);
        };
        getProducts();
        setTimeout(() => {
        setIsLoading(false);
        }, 1000);
    }, [category]);

    return (
        <>
            {isLoading ? (
                <div className='item-category-spinner'>
                    <Spinner animation="border" />
                </div>
            ) : (
                <div className='item-category-container'>
                    <ItemList list={products}/>
                </div>
            )}
        </>
    );
}
  
export default ItemCategoryContainer;