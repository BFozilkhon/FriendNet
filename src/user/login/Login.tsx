import { useState } from 'react';
import { useNavigate } from 'react-router';

import logo from './assets/images/logo.png';

import { Btn, Container, Img, Input, Title, Wrapper } from './Login.styled';

export const Login = () => {
  const navigate = useNavigate();

  // state
  const [inputText, setInputText] = useState({
    username: '',
    password: '',
  });
  const [authError, setAuthError] = useState(false);

  // inputText
  const handleInputText = (e: any) => {
    const { name, value } = e.target;
    setInputText({
      ...inputText,
      [name]: value,
    });
  };

  // formSubmit
  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (inputText?.username === 'admin' && inputText?.password === 'admin123') {
      navigate('/admin');
    } else {
      setAuthError(true);
    }
  };

  return (
    <>
      <Btn onClick={() => navigate('/')} back={true}>
        Back to Home
      </Btn>
      <Wrapper>
        <Container>
          <Img src={logo} alt='logo' />
          <Title>Log In</Title>

          <form onSubmit={handleSubmit}>
            {authError && (
              <label className='label'>
                Error: Username or Password is incorrect
              </label>
            )}

            <Input
              onChange={handleInputText}
              name='username'
              type='text'
              placeholder='admin'
              error={authError}
            />
            <Input
              onChange={handleInputText}
              name='password'
              type='password'
              placeholder='admin123'
              error={authError}
            />
            <Btn type='submit'>LogIn</Btn>
          </form>
        </Container>
      </Wrapper>
    </>
  );
};

export default Login;
