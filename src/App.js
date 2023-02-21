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

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path='/' element={<Inicio/>} />
          <Route path='/productos' element={<Productos/>} />
          <Route path='/sucursales' element={<Sucursales/>} />
          <Route path='/contacto' element={<Contacto/>} />
          <Route path='/producto/:id' element={<DetalleProducto/>} />
          <Route path='/categoria/:category' element={<CategoriaProductos/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
