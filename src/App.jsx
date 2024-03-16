import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ItemListContainer } from './components/ItemListContainer';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';
import { Checkout } from './components/Checkout';
import { ItemDetailsContainer } from './components/ItemDetailsContainer';
import { NotFound } from './components/NotFound';
import { CarritoProvider } from './context/CartContext';
import { ToastContainer } from 'react-toastify';
import { Nosotros } from './components/nosotros';
import { Servicios } from './components/Servicios';
import { Contacto } from './components/Contacto';
import { Experiencia } from './components/Experiencia';
import { Inicio } from './components/Inicio';
export const App = () => {
  return (
    <BrowserRouter>
      <CarritoProvider>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/products' element={<ItemListContainer />} />
          <Route path='/category/:cid' element={<ItemListContainer />} />
          <Route path='/product/:pid' element={<ItemDetailsContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/nosotros' element={<Nosotros />}/>
          <Route path='/servicios' element={<Servicios/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/experiencia' element={<Experiencia/>}/>
        </Routes>
        <Footer />
      </CarritoProvider>
    </BrowserRouter>
  );
}