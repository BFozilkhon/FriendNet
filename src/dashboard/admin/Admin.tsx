import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { PostsContext } from '../../context/posts/PostsContext';
import ImageUploader from '../../shared/components/imgUploader/ImgUploader';

import { Btn, Container, Input, Title, Wrapper } from './Admin.styled';

type InputTextType = {
  [key: string]: string;
};

type AuthErrorType = {
  [key: string]: boolean;
};

export const Admin = () => {
  const navigate = useNavigate();
  const { add } = useContext(PostsContext);

  // state
  const [inputText, setInputText] = useState<InputTextType>({
    img: '',
    name: '',
    title: '',
    descr: '',
    link: '',
  });
  const [authError, setAuthError] = useState<AuthErrorType>({});
  const [isValid, setIsValid] = useState<boolean>(false);

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

    const updatedAuthError: AuthErrorType = {};

    // Perform validation for each input field
    Object.keys(inputText).forEach((fieldName) => {
      updatedAuthError[fieldName] = inputText[fieldName].trim() !== '';
    });

    setAuthError(updatedAuthError);

    const isFormValid = Object.values(updatedAuthError).every((valid) => valid);

    const newPosts = {
      id: 100,
      img: inputText?.img,
      name: inputText?.name,
      date: '09:30, 23-sentabr',
      comment: 22,
      title: inputText?.title,
      descr: inputText?.descr,
      link: '#',
    };

    if (isFormValid) {
      add(newPosts);
      navigate('/');
    } else {
      setIsValid(!isFormValid);
    }
  };

  return (
    <>
      <Btn onClick={() => navigate('/')} back={true}>
        Back to Home
      </Btn>
      <Wrapper>
        <Container>
          <Title>Create Post</Title>

          <form onSubmit={handleSubmit}>
            {isValid && (
              <label className='label'>
                Please fill out all fields, something is missing !!!
              </label>
            )}

            <ImageUploader
              handleSelect={(selectedImage: any) => {
                setInputText({
                  ...inputText,
                  img: selectedImage,
                });
              }}
            />
            <Input
              onChange={handleInputText}
              name='name'
              type='text'
              placeholder='Name'
              error={isValid}
            />
            <Input
              onChange={handleInputText}
              name='title'
              type='text'
              placeholder='Title'
              error={isValid}
            />
            <Input
              onChange={handleInputText}
              name='descr'
              type='text'
              placeholder='Description'
              error={isValid}
            />
            <Input
              onChange={handleInputText}
              name='link'
              type='text'
              placeholder='Link'
              error={isValid}
            />
            <Btn type='submit'>LogIn</Btn>
          </form>
        </Container>
      </Wrapper>
    </>
  );
};

export default Admin;
