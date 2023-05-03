import styled from 'styled-components';

const ListGrid = styled.ul`
  display: grid;
  max-width: calc(100vw - 40px);
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 16px;
  margin: 0px auto;
  padding: 0px;
  list-style: none;
`;

const Img = styled.img`
  width: 120px;
  height: 160px;
  object-fit: cover;
`;
export { ListGrid, Img };
