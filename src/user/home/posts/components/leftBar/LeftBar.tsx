import { useContext } from 'react';
import { PostsContext } from '../../../../../context/posts/PostsContext';
import { Card } from '../card/Card';

import { Box } from './LeftBar.styled';
export const LeftBar: React.FC = () => {
  const { state } = useContext(PostsContext);
  return (
    <Box>
      {state?.map((post: any) => {
        return (
          <Card
            key={post?.id}
            id={post?.id}
            img={post?.img}
            name={post?.name}
            date={post?.date}
            comment={post?.comment}
            title={post?.title}
            descr={post?.descr}
            link={post?.link}
          />
        );
      })}
    </Box>
  );
};

export default LeftBar;
