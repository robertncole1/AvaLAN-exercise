import React, { useState, useEffect } from 'react';
import UserCard from '../Components/UserCard';
import getUsers from '../helpers/data/userData';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((response) => setUsers(response));
  }, []);
  return (
    <>
      <h1 className="page-title">Users</h1>
      <div className="user-container">
        {users.map((userObj) => (
          <UserCard key={userObj.id}
            {...userObj}
          />
        ))}
      </div>
    </>
  );
}

export default Users;
