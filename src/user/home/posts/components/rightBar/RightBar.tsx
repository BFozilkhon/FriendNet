import React from 'react';
import {
  Box,
  Category,
  Input,
  Section,
  Title,
  Wrapper,
} from './RightBar.styled';

export const RightBar = () => {
  return (
    <Wrapper>
      {/* search */}
      <Section>
        <Title>Qidirish</Title>
        <Box>
          <Input type='text' placeholder='Nimani qidiramiz?' />
        </Box>
        <i>S</i>
      </Section>

      {/* category */}
      <Section>
        <Title>Bo'limlar</Title>
        {['', '', '', ''].map((value) => {
          return (
            <Category>
              <p>Dasturlash</p>
              <p>16</p>
            </Category>
          );
        })}
      </Section>
    </Wrapper>
  );
};

export default RightBar;
