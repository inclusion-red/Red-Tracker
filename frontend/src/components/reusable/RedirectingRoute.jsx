import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

// a route that is redirected if isAuthorize is false
export default function RedirectingRoute({ component: Component, isAuthorize, ...rest }) {
  return (
    <Route
      { ...rest }
      render={props =>
        isAuthorize ?
          (<Component { ...props }/>) :
          (<Redirect
            to={{
              pathname: props.to,
              state: { from: props.location }
            }}/>
          )
      }/>
  );
}

RedirectingRoute.propTypes = {
  component: PropTypes.any,
  isAuthorize: PropTypes.any,
  to: PropTypes.string,
  location: PropTypes.any
}
