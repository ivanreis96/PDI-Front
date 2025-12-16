import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../features/Home';
import Recipes from '../features/Recipes';
import Navbar from '../shared/components/Navbar';


const AppRoutes = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/receitas" element={<Recipes />} />
    </Routes>
  </Router>
);

export default AppRoutes;