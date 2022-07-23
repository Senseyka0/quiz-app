import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrap>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/quiz">Quiz</Link>
      </Nav>
    </Wrap>
  );
};

const Wrap = styled.div`
  background-color: #dcc5ff;
  padding: 15px 0;
`;
const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`;
const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 18px;
  color: black;
`;

export default Header;
