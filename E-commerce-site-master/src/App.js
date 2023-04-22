
import './App.css';
import Home from './Component/HomeSection/Home';
import Products from './Component/ProductSection/Products';
import {Routes,Route} from 'react-router-dom';
import Product from './Component/ProductPart/Product';
import Login from './Component/LoginPage/Login';
import Rejistration from './Component/RejistrationForm/Rejistration';
import Contact from './Component/Contact';
import About from './Component/About';


function App() {
  return (
    <>
    <Routes>
<Route exact path="/" element={<Home/>}/>
<Route exact path="/products" element={<Products/>}/>
<Route exact path="/products/:id" element={<Product/>}/>
<Route exact path="/contact" element={<Contact/>}/>
<Route exact path="/about" element={<About/>}/>
<Route exact path="/login" element={<Login/>}/>
<Route exact path="/rejistration" element={<Rejistration/>}/>
</Routes>
    </>
  );
}

export default App;
