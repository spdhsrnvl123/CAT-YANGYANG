import Nav from 'react-bootstrap/Nav';
import './Menu.css';

function Menu() {
  return (
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link className='navli' href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link className='navli' eventKey="link-1">Cart</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link className='navli' eventKey="link-2">MyPage</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Menu;