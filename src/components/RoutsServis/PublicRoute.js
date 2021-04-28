import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/authRedux/authSelectors';

const PublicRoute = ({ component: Component, redirectTo, ...routeProps }) => {
  const isAuthorized = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route
      {...routeProps}
      render={props =>
        isAuthorized && routeProps.restricted ? (
          <Redirect to={redirectTo} />
        ) : (
          <Component {...props} />
        )
      }
    />
  )
}
export default PublicRoute