import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <Nav>
        <Logo>Quiz</Logo>

        <Link to="/">Home</Link>
        <Link to="/settings">Settings</Link>
      </Nav>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #282f43;
  padding: 15px 0;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  align-items: center;
  margin: 0 auto;
`;

const Logo = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: #fff;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 18px;
  color: #ffffff;
`;

export default Header;
