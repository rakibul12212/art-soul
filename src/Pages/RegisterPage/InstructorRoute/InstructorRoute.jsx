import React from 'react';
import PropTypes from 'prop-types';

import useAuth from '../../Hooks/useAuth';
import { CircularProgress } from '@mui/material';
import { Redirect, Route } from 'react-router-dom';

const InstructorRoute = ({children, ...rest}) => {
    const { user, isLoading, instructor } = useAuth();
  if (isLoading) {
    return <CircularProgress />;
  }
    return (
        <Route
      {...rest}
      render={({ location }) =>
        user.email && instructor ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
    );
};
InstructorRoute.propTypes = {
    children: PropTypes.node.isRequired,
  };
export default InstructorRoute;