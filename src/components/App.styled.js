import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const StyledNav = styled.nav`
  display: flex;
  gap: 10px;
  padding: 20px 30px;
  margin-bottom: 20px;

  font-size: 20px;
  border-bottom: 1px solid rgba(128, 128, 128, 0.4);
`;

const StyledLink = styled(NavLink)`
  color: #d10505;

  &.active {
    color: black;
  }
`;

export { StyledNav, StyledLink };
