import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import UserCard from '../Components/UserCard';

function Users({ users }) {
  const [sortedUsers, setSortedUsers] = useState(null);

  const sortedUser = users;
  sortedUser.sort((a, b) => {
    if (a[sortedUsers] < b[sortedUsers]) {
      return -1;
    }
    if (a[sortedUsers] > b[sortedUsers]) {
      return 1;
    }
    return 0;
  });

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div>
      <h1 className="page-title">Users</h1>
      <Button onClick={() => setSortedUsers('name')}>Sort Alphabetically</Button>
      <Button onClick={() => handleReload()}>Reload Results</Button>
      <div className="container">
        {users.map((userObj) => (
          <UserCard key={userObj.id}
            {...userObj}
          />
        ))}
      </div>
    </div>
  );
}

Users.propTypes = {
  users: PropTypes.array,
};

export default Users;
