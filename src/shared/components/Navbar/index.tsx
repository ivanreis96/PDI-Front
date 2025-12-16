import { Link } from 'react-router-dom';    
import './Navbar.css';
 
export default function Navbar() {
    return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li>
          <Link to="/" title='Home'>Home</Link>
        </li>
        <li>
          <Link to="/receitas" title='Receitas'>Receitas</Link>
        </li>
      </ul>
    </nav>
  );
};