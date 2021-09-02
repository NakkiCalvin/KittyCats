import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './Login';

const Login = () => (
  <Switch>
    <Route path="/login" component={LoginPage} />
  </Switch>
);

export default Login;
