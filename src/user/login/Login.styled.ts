import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  padding: 30px;
  box-shadow: 0px 10px 16px 0px rgba(32, 81, 137, 0.06);
  border-radius: 6px;
  border: 1px solid var(--light-grey, #eff2f7);
  width: 400px;

  .label {
    color: red;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 250px;
`;

const Title = styled.h1`
  color: black;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 30px;
`;

const Input = styled.input<{ error?: boolean }>`
  color: black;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  outline: none;
  border: none;
  width: 100%;
  padding: 15px 10px;
  border-radius: 4px;
  margin-bottom: 20px;
  border-radius: 6px;
  border: 1px solid var(--light-grey, #eff2f7);
  border-color: ${({ error }) => error && 'red'};
  background: white;
  box-shadow: 0px 4px 8px 0px rgba(32, 81, 137, 0.05);
`;

const Btn = styled.button<{ back?: boolean }>`
  border-radius: 8px;
  background: var(--primary-color);
  border: none;
  color: white;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  cursor: pointer;
  transition: 0.3s opacity ease-in-out;
  padding: ${({ back }) => !back && '15px 10px'};
  height: ${({ back }) => back && '60px'};

  &:hover {
    opacity: 0.8;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export { Wrapper, Container, Img, Title, Input, Btn };
