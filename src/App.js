import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio/Inicio';
import Productos from './pages/Productos/Productos';
import Sucursales from './pages/Sucursales/Sucursales';
import Contacto from './pages/Contacto/Contacto';
import DetalleProducto from './pages/DetalleProducto/DetalleProducto';
import CategoriaProductos from './pages/CategoriaProductos/CategoriaProductos';
import SearchBar from './components/SearchBar/SearchBar';
import BusquedaProductos from './pages/BusquedaProductos/BusquedaProductos';
import CountProvider from './context/CartContext/CartContext';
import CarritoDeCompras from './pages/CarritoDeCompras/CarritoDeCompras';

const App = () => {
  return (
    <CountProvider>
      <BrowserRouter>
        <div className="App">
          <SearchBar/>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Inicio/>} />
            <Route path='/productos' element={<Productos/>} />
            <Route path='/sucursales' element={<Sucursales/>} />
            <Route path='/contacto' element={<Contacto/>} />
            <Route path='/productos/:id' element={<DetalleProducto/>} />
            <Route path='/categoria/:category' element={<CategoriaProductos/>} />
            <Route path='/search/:product' element={<BusquedaProductos/>} />
            <Route path='/carrito' element={<CarritoDeCompras/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </CountProvider>
  );
}

export default App;
