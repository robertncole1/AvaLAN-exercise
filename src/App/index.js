import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import getUsers from '../helpers/data/userData';
import Routes from '../helpers/Routes';
import './App.scss';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((response) => setUsers(response));
  }, []);

  return (
    <div className='App'>
      <Router>
        <Routes users={users} setUsers={setUsers}/>
      </Router>
    </div>
  );
}

export default App;
