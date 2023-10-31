const authUrl = 'https://local.playtunedin-test.com:3001/login';
import React from 'react';


export const Login = () => {
  const redirectToAuth = () => (window.location.href = authUrl);

  return (
    <>
      <button onClick={redirectToAuth}>Log in with Spotify</button>
    </>
  );
};

export default Login;
