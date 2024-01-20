// import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Admin from './pages/admin/Admin';
import Navbar from './components/navbar/Navbar';

const App = () => {
  return (
    <div>
    
      <Navbar />
      <Route path="/admin" element={<Admin />} />
    </div>
  );
};

export default App;
