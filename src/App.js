import { useEffect, Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from 'react-router';
import AppBar from './components/ViewsComponents/AppBar';
import { getCurrentUser } from './redux/authRedux/authOperations'
import PublicRoute from './components/RoutsServis/PublicRoute';
import PrivateRoute from './components/RoutsServis/PrivateRoute';
import { TouchBallLoading } from 'react-loadingg';

const HomePage = lazy(() => import('./components/Views/HomePage'))
const RegisterView = lazy(() => import('./components/Views/RegisterPage/RegisterPage'))
const LoginPage = lazy(() => import('./components/Views/loginPage/LoginPage'))
const Phonebook = lazy(() => import('./components/Views/Phonebook/PhonebookPage.jsx'))



const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <div>

      <AppBar />
      <Suspense fallback={<TouchBallLoading color={"#3f51b5"} size={"large"} />}>
        <Switch>

          <PublicRoute exact path="/" component={HomePage} />

          <PublicRoute
            path="/registration"
            restricted
            redirectTo="/phonebook"
            component={RegisterView}
          />

          <PublicRoute
            path="/login"
            restricted
            redirectTo="/phonebook"
            component={LoginPage}
          />

          {/* <Route path="/Phonebook"   component={Phonebook}/> */}

          <PrivateRoute
            path="/phonebook"
            redirectTo="/login"
            component={Phonebook}
          />

        </Switch>
      </Suspense>
    </div>
  );
};
export default App;
