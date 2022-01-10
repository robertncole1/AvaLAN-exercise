import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Users from '../views/Users';
import Posts from '../views/Posts';
import Comments from '../views/Comments';

function Routes({ users }) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={() => <Users users={users}/>} />
        <Route path="/posts/:id" component={() => <Posts users={users}/>} />
        <Route path="/comments/:id" component={() => <Comments users={users}/>} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  users: PropTypes.array,
};

export default Routes;
