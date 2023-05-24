import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Home from './Pages/Home';

import Bolg_details from './Pages/Page/Bolg_details';
import Carts from './Pages/Page/Carts';
import CheckOut from './Pages/Page/CheckOut';
import Product_details from './Pages/Page/Product_details';
import Wishlist from './Pages/Page/Wishlist';
import Works from './Pages/Page/Works';
import Services from './Pages/Services';
import Shop from './Pages/Shop';
import Footer from './Components/Footer';
import Search from './Components/Search';
import ToggleBar from './Components/ToggleBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/works" element={<Works />} />
            <Route path="/carts" element={<Carts/>} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/product_details" element={<Product_details />} />
            <Route path="/blog_details" element={<Bolg_details />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/search" element={<Search />} />
            {/* <Route path="/about" element={<ToggleBar />} /> */}

          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
