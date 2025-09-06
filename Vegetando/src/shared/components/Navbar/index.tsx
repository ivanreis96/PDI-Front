import { Link } from 'react-router-dom';    
import './Navbar.css';
 
export default function Navbar() {
    return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/recipes">Recipes</Link>
        </li>
      </ul>
    </nav>
  );
};