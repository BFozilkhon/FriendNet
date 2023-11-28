import styled from 'styled-components';

const Container = styled.div`
  border-radius: 6px;
  border: 1px solid var(--light-grey, #eff2f7);
  background: var(--bg-white-color);
  box-shadow: 0px 10px 16px 0px rgba(32, 81, 137, 0.06);
  width: 100%;
  margin-bottom: 20px;
`;

const Img = styled.img`
  width: 100%;
  border-radius: 6px 6px 0px 0px;
`;

const Wrap = styled.div`
  padding: 40px;

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 600px) {
    flex-wrap: wrap;
    justify-content: stretch;
    gap: 16px;
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  @media (max-width: 600px) {
    gap: 6px;
  }
`;

const Text = styled.p`
  color: black;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const Title = styled.h1`
  color: black;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 30px 0px 20px 0px;
  @media (max-width: 600px) {
    font-size: 20px;
    line-height: 30px;
    margin: 20px 0px 10px 0px;
  }
`;

const Descr = styled.p`
  color: black;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  margin-bottom: 40px;
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 30px;
  }
`;

const Btn = styled.button`
  border-radius: 8px;
  background: var(--primary-color);
  padding: 10px 20px;
  border: none;
  color: white;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 600px) {
    width: 100%;
    justify-content: center;
  }
`;

export { Container, Img, Wrap, Flex, Box, Text, Title, Descr, Btn };
