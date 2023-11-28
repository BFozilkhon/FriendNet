import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1300px;
  margin: 0px auto;
  padding: 110px 0px;
  @media (max-width: 900px) {
    padding: 0px 20px;
  }
  @media (max-width: 600px) {
    padding: 40px 0px;
  }
`;

const Title = styled.h1`
  margin-bottom: 50px;
  color: var(--primary-color);
  font-size: 54px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 40px;
  }
  @media (max-width: 600px) {
    font-size: 28px;
  }
`;

const MainSection = styled.div`
  display: flex;
  gap: 40px;
  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;

export { Wrapper, Title, MainSection };
