import React from 'react';
import {
  Card, CardText,
  CardTitle, CardBody, CardSubtitle
} from 'reactstrap';

function CommentsCard({ ...commentObj }) {
  return (
    <>
          <Card>
            <CardBody>
              <CardTitle tag="h5">{commentObj.name}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Email: {commentObj.email}</CardSubtitle>
            <CardText>{commentObj.body}</CardText>
            </CardBody>
        </Card>
    </>
  );
}

export default CommentsCard;
