import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Products from './component/Products';
import Product from './component/Product';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />  {}
      </Routes>
    </>
  );
}

export default App;
