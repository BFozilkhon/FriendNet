import RightBar from './components/rightBar/RightBar';
import LeftBar from './components/leftBar/LeftBar';

import { MainSection, Title, Wrapper } from './Posts.styled';
export const Posts = () => {
  return (
    <Wrapper>
      <Title>See Recent Posts</Title>
      <MainSection>
        <LeftBar />
        <RightBar />
      </MainSection>
    </Wrapper>
  );
};
export default Posts;
