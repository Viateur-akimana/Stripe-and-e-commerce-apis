import './App.css';
import Navbar from './components/navbar/Navbar';
import Shop from './pages/Shop';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import ShopCategory from './pages/ShopCategory';
import LoginSignup from './pages/LoginSignup';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>} />
      <Route path='/men' element={<ShopCategory category="men"/>} /> 
      <Route path='/women' element={<ShopCategory category="women"/>} />
      <Route path='/kids' element={<ShopCategory category="kids"/>} />
      <Route path='/cart' element={<ShopCategory category="cart"/>} />
      <Route path='/login' element={<LoginSignup/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
