import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Shop from "./pages/Shop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopCategory from "./pages/ShopCategory";
import LoginSignup from "./pages/LoginSignup";
import Footer from "./components/Footer/Footer";
import mens_banner from "./components/Assets/banner_mens.png";
import womens_banner from "./components/Assets/banner_women.png";
import kids_banner from "./components/Assets/banner_kids.png";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/men"
            element={<ShopCategory banner={mens_banner} category="men" />}
          />
          <Route
            path="/women"
            element={<ShopCategory banner={womens_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kids_banner} category="kids" />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
