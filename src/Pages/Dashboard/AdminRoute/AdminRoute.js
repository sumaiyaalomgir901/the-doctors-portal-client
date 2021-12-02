import React from "react";
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import useAuth from "../../../Hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, isLoading, admin } = useAuth();
  if (isLoading) {
    return <Spinner animation="border" role="status"></Spinner>;
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
              pathname: "/home",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
