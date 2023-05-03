import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const BackLink = styled(Link)`
  display: flex;
  align-items: center;
`;
const BackIcon = styled(BsArrowLeft)`
  margin-right: 4px;
`;

const MoviDetailsWrapper = styled.div`
  display: flex;
`;

const MovieTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  gap: 18px;
`;
const AddInformSection = styled.section`
  margin: 10px 0;
  padding: 20px 10px;
  border-top: 1px solid rgba(128, 128, 128, 0.3);
  border-bottom: 1px solid rgba(128, 128, 128, 0.3);
`;

const LinkWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledLink = styled(NavLink)`
  color: #d10505;

  &.active {
    color: black;
  }
`;
export {
  BackIcon,
  BackLink,
  MoviDetailsWrapper,
  MovieTextWrapper,
  AddInformSection,
  LinkWrapper,
  StyledLink,
};
