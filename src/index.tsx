import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './root/Root';
import { BrowserRouter as Router } from 'react-router-dom';
import PostsContextProvider from './context/posts/PostsContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PostsContextProvider>
      <Router>
        <Root />
      </Router>
    </PostsContextProvider>
  </React.StrictMode>
);
