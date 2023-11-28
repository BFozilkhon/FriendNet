import { useCallback, useReducer } from 'react';
import { reducer } from './PostsReducer';
import { PostType } from '../../shared/types/post.types';

export const usePostsContext = (initState: PostType[]) => {
  const [state, dispatch] = useReducer(reducer, initState);
  localStorage.setItem('postsData', JSON.stringify(state));
  const add = useCallback((e: any) => {
    dispatch({ type: 'add', payload: e });
  }, []);

  return { state, add };
};
