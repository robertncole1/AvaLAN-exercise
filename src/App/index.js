import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Users from '../views/Users';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Router>
        <Users/>
      </Router>
    </div>
  );
}

export default App;
