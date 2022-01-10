import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentsCard from '../Components/CommentsCard';
import { getCommentsByPostId } from '../helpers/data/commentsData';

function Comments() {
  const [commentsById, setCommentsById] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getCommentsByPostId(id).then((response) => setCommentsById(response));
  }, []);

  return (
    <div>
      <h1 className="page-title">Comments</h1>
      <div className="container">
        {commentsById.map((commentObj) => (
          <CommentsCard key={commentObj.id}
            {...commentObj}
          />
        ))}
      </div>
    </div>
  );
}

export default Comments;
