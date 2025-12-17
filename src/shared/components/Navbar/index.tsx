import { Link } from 'react-router-dom';
import { Nav, NavbarMenu, NavItem } from './styles';
 
export default function Navbar() {
  return (
    <Nav>
      <NavbarMenu>
        <NavItem>
          <Link to="/" title='Home'>Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/receitas" title='Receitas'>Receitas</Link>
        </NavItem>
      </NavbarMenu>
    </Nav>
  );
}