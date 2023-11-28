import { PostType } from '../../shared/types/post.types';
import { postData } from '../../shared/utils/postData';

export const initState: PostType[] = postData;

type PostsAction = {
  type: string;
  payload?: any;
};

export const reducer = (state: PostType[], action: PostsAction) => {
  switch (action?.type) {
    case 'add':
      return [action.payload, ...state];
    default:
      return state;
  }
};
