import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Card, CardText,
  CardTitle, CardBody, Button
} from 'reactstrap';

const PostsCard = ({ ...postObj }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/comments/${postObj.id}`);
  };
  return (
    <>
          <Card>
            <CardBody>
              <CardTitle tag="h5">{postObj.title}</CardTitle>
            <CardText>Phone Number: {postObj.body}</CardText>
            <Button className="delete-link" onClick={() => handleClick()}>Post&apos;s Comments</Button>
            </CardBody>
        </Card>
    </>
  );
};

export default PostsCard;
