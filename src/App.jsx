import { useState } from 'react';
import './App.css';
import PostList from './components/PostsList';

function App() {
  const posts = [
    {id: 1, title: 'post1', text: 'Post1 text'},
    {id: 2, title: 'post2', text: 'Post2 text'},
    {id: 3, title: 'post3', text: 'Post3 text'},
  ];

  const delPost = (id) => {
    const newState = posts.filter(post => post.id !==id)
    setPosts(newState);
  }

  return (
    <div className="container">
      <h1>My Blog App</h1>

      <PostList delPost ={ delPost } posts={ posts } title="Posts"/>
    </div>
  );
}

export default App;
