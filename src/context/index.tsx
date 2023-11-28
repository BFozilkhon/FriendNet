import React from 'react';
import PostsContextProvider from './posts/PostsContext';

type MainContextProviderProps = {
  children: React.ReactNode;
};

export const MainContextProvider: React.FC<MainContextProviderProps> = ({
  children,
}) => {
  return <PostsContextProvider>{children}</PostsContextProvider>;
};

export default MainContextProvider;
