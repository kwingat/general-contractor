import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Suspense } from 'react';

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Route {...rest}>{children}</Route>
    </Suspense>
  );
};

PrivateRoute.protoTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
