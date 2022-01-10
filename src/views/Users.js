import React from 'react';
import PropTypes from 'prop-types';
import UserCard from '../Components/UserCard';

function Users({ users }) {
  return (
    <div>
      <h1 className="page-title">Users</h1>
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
