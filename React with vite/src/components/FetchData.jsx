/** @format */

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FetchData() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    await axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((responce) => {
        console.log(responce.data);
        setPosts(responce.data);
      });
  };
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default FetchData;
