
import Amplify, { Auth } from 'aws-amplify';
import * as React from 'react';
import { Route, RouteProps } from 'react-router-dom';

interface IPrivateRouteState {
  authenticated: boolean;
  isAuthenticating: boolean;
}

const oauth = {
  domain: "the-bird.auth.ap-southeast-2.amazoncognito.com",
  redirectSignIn: "http://localhost:3000/protected",
  redirectSignOut: "http://localhost:3000",
  responseType: "token",
  scope: ["openid"],
};



const config:any = Amplify.configure({
  Auth: {
    mandatorySignIn: false,
    oauth,
    region: "ap-southeast-2",
    userPoolId: "ap-southeast-2_lvJsZBFUv",
    userPoolWebClientId: "56rjsodbf6ksjkrtiofgdshjuu",
  },
}); 

const { domain, redirectSignIn, responseType } = config.Auth.oauth;
let url = "";


export default class PrivateRoute extends React.Component<RouteProps, IPrivateRouteState> {
  constructor(props: RouteProps) {
    super(props);
    this.state = {
      authenticated: false,
      isAuthenticating: true,
    };
  }

  public async componentWillMount() {
    setTimeout(async () => {
      try {
        const session = await Auth.currentSession();
        if (session) {
          const nextState = {
            authenticated: true,
            isAuthenticating: false,
          };
          this.setState(nextState);
        }
      } catch (e) {
        this.constructUrl();
        const nextState = {
          authenticated: false,
          isAuthenticating: false,
        };
        this.setState(nextState);
      }
    }, 500);
  }

  public render() {
    const { ...rest } = this.props;
    const { authenticated, isAuthenticating } = this.state;

    if (authenticated) {
        return <Route {...rest} component={this.props.component} />;
    }

    if (isAuthenticating) {
      return null;
    }

    window.location.assign(url);
    return null;
  }


  private constructUrl() {
    const clientId = config.Auth.userPoolWebClientId;
    url =
      "https://" +
      domain +
      "/login?redirect_uri=" +
      redirectSignIn +
      "&response_type=" +
      responseType +
      "&client_id=" +
      clientId
  }
}
