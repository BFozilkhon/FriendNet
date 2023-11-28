import React from 'react';
import { PostType } from '../../../../../shared/types/post.types';

import {
  Text,
  Box,
  Container,
  Flex,
  Img,
  Wrap,
  Title,
  Descr,
  Btn,
} from './Card.styled';

export const Card = ({
  img,
  name,
  date,
  comment,
  title,
  descr,
  link,
}: PostType) => {
  return (
    <Container>
      <Img src={img} alt='post' />
      <Wrap>
        <Flex>
          <Box>
            <img src='' alt='' />
            <Text>{name}</Text>
          </Box>
          <Box>
            <img src='' alt='' />
            <Text>{date}</Text>
          </Box>
          <Box>
            <img src='' alt='' />
            <Text>{comment}ta comment</Text>
          </Box>
        </Flex>
        <Title>{title}</Title>
        <Descr>{descr}</Descr>
        <a href={link}>
          <Btn>Batafsil</Btn>
        </a>
      </Wrap>
    </Container>
  );
};
