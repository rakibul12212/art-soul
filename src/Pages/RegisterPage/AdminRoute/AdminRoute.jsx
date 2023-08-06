
import React from "react";
import PropTypes from 'prop-types';
import { CircularProgress } from "@mui/material";
// import { Navigate } from 'react-router-dom';
import useAuth from "../../Hooks/useAuth";
import { Redirect, Route } from "react-router-dom";



const AdminRoute = ({children , ...rest  }) => {
  const { user, isLoading, admin } = useAuth();
  if (isLoading) {
    return <CircularProgress />;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
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
AdminRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AdminRoute;
