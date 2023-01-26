import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
	margin-right:14px;
  font-size:20px;
  color:black;
  text-decoration:none
`;

const Menu = ()=> {
  return (
    <div>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/cart">Cart</StyledLink>
    </div>
  );
}

export default Menu;