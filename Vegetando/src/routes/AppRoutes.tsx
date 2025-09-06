import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../features/Home';
import Recipes from '../features/Recipes';


const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
    </Routes>
  </Router>
);

export default AppRoutes;