import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CartContextProvider from './context/CartContext';


function App() {
  return (
    <div>
      <header>
        <div className='principal'> 
          <div className='logo'><Link to="/" > <span>La tienda</span></Link></div><NavBar /></div>
      </header>
      <main>
        <div className='principal'>
        <CartContextProvider>
          <Routes>
            <Route path="/" element={<ItemListContainer greetings="Bienvenides a La tienda" />}/>
           {/*items filtrados por categoria */}
            <Route path="/category/:categoryName" element={<ItemListContainer greetings="Categoria en específico" />}/>
            {/* pantalla dinámica de los productos */}
            <Route path="/producto/:productId" element={<ItemDetailContainer />}/>
             {/* carrito de compras */}
            <Route path="/Cart" element={<Cart/>} />
            {/* página 404 */}
            <Route path="*" element={<div> <h2>Página no encontrada</h2> <Link to="/">{ '<< ' }Volver al incio </Link> </div>}/>
          </Routes>
          </CartContextProvider>
        </div>
      </main>
    </div>
  );
}

export default App;
