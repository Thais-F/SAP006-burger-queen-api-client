import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isAuthenticated} from './auth.js'

// const PrivateRoute = props => isAuthenticated()
// ? <Route { ...props} />
// : <Redirect to="/" />

// export default PrivateRoute


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
  
  export default PrivateRoute
