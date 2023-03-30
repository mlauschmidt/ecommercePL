import './ItemListContainer.css';
import { useEffect, useState } from "react";
import ItemList from '../ItemList/ItemList';
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";
import Spinner from 'react-bootstrap/Spinner';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getProducts = async () => {
      const q = query(collection(db, "productos"));
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
  }, []);

  return (
    <>
      {isLoading ? (
        <div className='item-list-spinner'>
          <Spinner animation="border" />
        </div>
      ) : (
        <div className='item-list-container'>
          <ItemList list={products}/>
        </div>
      )}
    </>
  );
}

export default ItemListContainer;
