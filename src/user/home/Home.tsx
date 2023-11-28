import Posts from './posts/Posts';
import Navbar from '../../shared/layouts/navbar/Navbar';

import { Container } from './Home.styled';

export const Home = () => {
  return (
    <Container>
      <Navbar />
      <Posts />
    </Container>
  );
};

export default Home;
