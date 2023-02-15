import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount (count +1);
  }

  const handleDecrement = () => {
    setCount (count -1);
  }

  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting='Bienvenid@ a la Tienda Online de Piedra Libre'/>
      <div>{count}</div>
      <button onClick={handleIncrement}>+</button> 
      <button onClick={handleDecrement}>-</button> 
    </div>
  );
}

export default App;