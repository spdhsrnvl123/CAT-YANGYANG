import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './Menu.css';

function Menu() {
  return (
    <Nav defaultActiveKey="/home" as="ul">
        <Link style={{marginRight:"14px"}} to="/" className='navli'>Home</Link>
        <Link to="/cart" className='navli'>Cart</Link>
    </Nav>
  );
}

export default Menu;