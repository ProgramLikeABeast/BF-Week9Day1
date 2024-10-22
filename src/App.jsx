import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CityTabs from './components/CityTabs';
import ProductManagement from './components/ProductManagement';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/city-tabs">City Tabs</Link></li>
            <li><Link to="/products">Product Management</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/city-tabs" element={<CityTabs />} />
          <Route path="/products" element={<ProductManagement />} />
          <Route path="/" element={<h1>Welcome to my app!</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
