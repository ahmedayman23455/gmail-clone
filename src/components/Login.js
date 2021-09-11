import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import { auth, provider } from '../firebase';
import { useDispatch } from 'react-redux';
import { login } from '../redux-slices/userSlice';

const Login = () => {
  const dispatch = useDispatch();
  const loginHandler = () => {
    auth
      .signInWithPopup(provider)
      .then((user) => {
        dispatch(
          login({
            displayName: user.user.displayName,
            email: user.user.email,
            photoURL: user.user.photoURL,
          })
        );
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202010/Google_Gmail_New_Logo_India_To_1200x768.jpeg?WgdQ3Tx7r4ZssTpgfxm1Iwb5KMAG8S4A&size=1200:675"
          alt=""
        />
        <Button onClick={loginHandler}>Login</Button>
      </div>
    </div>
  );
};

export default Login;
