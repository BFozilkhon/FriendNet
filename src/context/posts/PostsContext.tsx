import React, { createContext } from 'react';
import { initState } from './PostsReducer';
import { usePostsContext } from './PostContextValues';

// Context Values
type usePostContextType = ReturnType<typeof usePostsContext>;

const initContextState: usePostContextType = {
  state: initState,
  add: () => {},
};

export const PostsContext = createContext<usePostContextType>(initContextState);

// main
type PostsContextProviderProps = {
  children: React.ReactNode;
};

export const PostsContextProvider: React.FC<PostsContextProviderProps> = ({
  children,
}) => {
  const postsDataString = localStorage.getItem('postsData');

  return (
    <PostsContext.Provider
      value={usePostsContext(
        postsDataString !== null ? JSON.parse(postsDataString) : initState
      )}
    >
      {children}
    </PostsContext.Provider>
  );
};

export default PostsContextProvider;
