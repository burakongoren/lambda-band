import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Nav = styled.nav`
  background-color: #000;
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
  font-family: 'Rock Salt', cursive;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #ff4d4d;
  }
`;

function Navbar() {
  return (
    <Nav>
      <NavContainer>
        <Logo to="/">LAMBDA</Logo>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/music">Music</NavLink>
          <NavLink to="/tour">Tour</NavLink>
          <NavLink to="/about">About</NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
}

export default Navbar; 