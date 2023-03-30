import './ItemDetailContainer.css';
import { useEffect, useState } from "react";
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router';
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs, where, documentId } from "firebase/firestore";
import Spinner from 'react-bootstrap/Spinner';


const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    let { id } = useParams(); 

    useEffect(() => {
        setIsLoading(true);
        const getProduct = async () => {
            const q = query(collection(db, "productos"), where(documentId(), "==", id));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setProduct({...doc.data(), id: doc.id});
            });
        };
        getProduct();
        setTimeout(() => {
        setIsLoading(false);
        }, 1000);
    }, [id]);

    return (
        <>
            {isLoading ? (
                <div className='item-detail-spinner'>
                    <Spinner animation="border" />
                </div>
            ) : (
                <div className='item-detail-container'>
                    {product.id ? <ItemDetail details={product}/> : null}
                </div>
            )}
        </>
    );
}

export default ItemDetailContainer;