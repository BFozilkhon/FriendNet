import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png';

import {
  Box,
  Logo,
  SearchContainer,
  Wrapper,
  SearchIcon,
  SearchInput,
  Container,
} from './Narbar.styled';

export const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <Box>
          <Logo src={logo} alt='logo' />
          <SearchContainer>
            <SearchIcon>S</SearchIcon>
            <SearchInput type='text' placeholder='search' />
          </SearchContainer>
        </Box>
        <Box></Box>
        <Box>
          <Link to={'/login'}>Login</Link>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Navbar;
