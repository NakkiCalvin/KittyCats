import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import PrivateRoute from './PrivateRoute';
import Login from '../pages/Auth';
import Main from '../pages/Main';

const AppRouter = (props) => {
  const { authenticated } = props.auth;

  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute
          path="/"
          component={Main}
          authenticated={!authenticated} // revert
        />
      </Switch>
    </Router>
  );
};

AppRouter.propTypes = {
  auth: PropTypes.object.isRequired,
};

AppRouter.defaultProps = {};

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps)(AppRouter);
