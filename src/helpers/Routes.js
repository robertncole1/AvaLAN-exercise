import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Users from '../views/Users';
import Posts from '../views/Posts';
import Comments from '../views/Comments';

function Routes({ users, setUsers }) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={() => <Users users={users} setUsers={setUsers}/>} />
        <Route path="/posts/:id" component={() => <Posts users={users}/>} />
        <Route path="/comments/:id" component={() => <Comments users={users}/>} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  users: PropTypes.array,
  setUsers: PropTypes.func
};

export default Routes;
