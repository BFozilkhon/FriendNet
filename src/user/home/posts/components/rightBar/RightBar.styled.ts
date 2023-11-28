import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 1;
  position: sticky;
  top: 10px;
  height: fit-content;

  @media (max-width: 900px) {
    position: static;
  }
`;

const Section = styled.div`
  padding: 30px;
  border-radius: 6px;
  border: 1px solid var(--light-grey, #eff2f7);
  background: white;
  margin-bottom: 40px;
  @media (max-width: 600px) {
    padding: 20px;
    margin-bottom: 20px;
  }
`;

const Title = styled.h3`
  color: var(--dark-grey, #323a56);
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 30px;
  @media (max-width: 600px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

const Box = styled.div`
  border-radius: 6px;
  border: 1px solid var(--light-grey, #eff2f7);
  background: white;
  box-shadow: 0px 4px 8px 0px rgba(32, 81, 137, 0.05);
  gap: 8px;
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0px;
`;

const Input = styled.input`
  color: black;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  outline: none;
  border: none;
  width: 100%;
`;

// category
const Category = styled.div`
  border-radius: 4px;
  border: 1px solid var(--light-grey, #eff2f7);
  background: #f8fafc;
  gap: 8px;
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0px;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;

  :hover {
    border-radius: 4px;
    color: #1d72d2;
    border: 1px solid var(--light-grey, #eff2f7);
    background: var(--bg-white-color);
    box-shadow: 0px 4px 8px 0px rgba(32, 81, 137, 0.05);
  }
`;

export { Wrapper, Section, Category, Title, Box, Input };
