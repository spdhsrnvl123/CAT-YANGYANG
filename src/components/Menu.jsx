import Nav from 'react-bootstrap/Nav';

function Menu() {
  return (
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1">Cart</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">MyPage</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Menu;