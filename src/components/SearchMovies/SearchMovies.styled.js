import styled from 'styled-components';

const StyledInput = styled.input`
  display: inline-block;
  width: 450px;
  font-size: 18px;
  outline: none;

  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const SearchButton = styled.button`
  position: absolute;
  top: 20%;
  left: 425px;
  display: inline-flex;
  border: 0;
  background-color: #fff;
  cursor: pointer;
`;

const SearchForm = styled.form`
  position: relative;
`;
export { StyledInput, SearchButton, SearchForm };
