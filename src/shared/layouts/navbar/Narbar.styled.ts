import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  padding: 15px 0px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 180px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchIcon = styled.div``;
const SearchInput = styled.input``;

export {
  Wrapper,
  Box,
  Logo,
  SearchContainer,
  SearchIcon,
  SearchInput,
  Container,
};
