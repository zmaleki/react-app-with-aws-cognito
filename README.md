# react-app-with-aws-cognito
This is an example of how to protect your react app using aws cognito's hosted UI 

For this app to work you will need to have an aws cognito user pool.

Required setting of the user pool:

1. at least one app client should be created
2. in the appclient setting Callback URL(s) should be "http://localhost:3000, http://localhost:3000/protected"
3. in the OAuth 2.0 setting Implicit grant should be selected
4. in Allowed OAuth Scopes Openid should be selected
5. There has to be a domain assigned to your user pool. (you can use Amazon Cognito domains)

Open the-bird-app/src/containers/PrivateRoute.tsx

Replace amplify configs with your userpool configs

cd the-bird-app

npm start

browse to http://localhost:3000/protected
