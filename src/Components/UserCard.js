import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Card, CardText, CardSubtitle,
  CardTitle, CardBody, Button
} from 'reactstrap';

const UserCard = ({ ...userObj }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/posts/${userObj.id}`);
  };
  return (
    <>
          <Card>
            <CardBody>
              <CardTitle tag="h5">{userObj.name}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Username: {userObj.username}</CardSubtitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Username: {userObj.email}</CardSubtitle>
            <CardText>Phone Number: {userObj.phone}</CardText>
            <CardText>Website: {userObj.website}</CardText>
            <CardText>Company Name: {userObj.company.name}</CardText>
            <CardText>Catch Phrase: {userObj.company.catchPhrase}</CardText>
            <Button className="delete-link" onClick={() => handleClick()}>User&apos;s Posts</Button>
            </CardBody>
        </Card>
    </>
  );
};

export default UserCard;
