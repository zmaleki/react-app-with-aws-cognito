import * as React from 'react';
import { BrowserRouter, Route , Switch} from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import ProtectedPage from '../components/ProtectedPage';
import PrivateRoute from './PrivateRoute';


class Router extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={LandingPage} />
          <PrivateRoute path="/protected" component={ProtectedPage}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
