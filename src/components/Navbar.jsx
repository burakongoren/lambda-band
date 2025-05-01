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
  justify-content: center;
  align-items: center;
`;

const Logo = styled(Link)`
  display: flex;
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
  font-family: 'Rock Salt', cursive;
`;

const LogoImage = styled.img`
  height: 60px;
  margin-right: 1rem;
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

// Special link for anchor navigation
const AnchorNavLink = styled.a`
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
        {/* <Logo to="/">
          <LogoImage src="src/assets/lambda-logo.png" alt="Lambda" />
        </Logo> */}
        <NavLinks>
          <AnchorNavLink href="/#home">Home</AnchorNavLink>
          {/* <NavLink to="/tour">Tour</NavLink> */}
          <AnchorNavLink href="/#about">About</AnchorNavLink>
          <AnchorNavLink href="/#music">Music</AnchorNavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
}

export default Navbar; 