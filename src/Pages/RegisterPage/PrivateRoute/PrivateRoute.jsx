import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';

import { Grid } from "@mui/material";

import useAuth from "../../Hooks/useAuth";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ children,...rest }) => {
  const { user, isLoading } = useAuth();
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  
  if (isLoading) {
    return (
      <Grid alignItems="center" textAlign="center" className="d-flex mx-auto w-75 my-5 justify-content-center align-items-center container">
        <Grid>
          <LinearProgress variant="determinate" value={progress} />
        </Grid>
        <Grid alignItems="center" alignSelf="center">
          <h1>Loading...</h1>
        </Grid>
      </Grid>
    );
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
