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
      <h1 className="page-title">Posts</h1>
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
