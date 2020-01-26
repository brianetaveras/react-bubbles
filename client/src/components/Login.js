import React from "react";
import styled from 'styled-components';

const LoginCard = styled.div`

  max-width: 400px;
  width: 100%;
  height: 100%;
  box-shadow: 2px 2px 10px 5px rgba(0,0,0,0.2);
  margin: 0 auto;
  padding: 20px;

`

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
    <LoginCard>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>

    </LoginCard>
    </>
  );
};

export default Login;
