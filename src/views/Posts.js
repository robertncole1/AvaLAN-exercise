import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostsCard from '../Components/PostsCard';
import { getPostsByUserId } from '../helpers/data/postsData';

function Posts() {
  const [postsById, setPostsById] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getPostsByUserId(id).then((response) => setPostsById(response));
  }, []);

  return (
    <div>
      <div className="hero-image">
        <div className="hero-text">
          <h2>Posts</h2>
        </div>
      </div>
      <div className="container">
        {postsById.map((postObj) => (
          <PostsCard key={postObj.id}
            {...postObj}
          />
        ))}
      </div>
    </div>
  );
}

export default Posts;
