import React, { useEffect } from 'react';
import './App.css';
import EmailsList from './components/EmailsList';
import Header from './components/Header';
import MessageBox from './components/MessageBox';
import Sidebar from './components/Sidebar';
import { Route, Switch, Redirect } from 'react-router-dom';
import Mail from './components/Mail';
import { useDispatch, useSelector } from 'react-redux';
import { selectMessageBox } from './redux-slices/uiSlice';
import { selectUser, selectActiveEmailData } from './redux-slices/userSlice';
import { auth } from './firebase';
import Login from './components/Login';
import { login, logout } from './redux-slices/userSlice';

function App() {
  const messageBoxIsOpen = useSelector(selectMessageBox);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const ActiveEmail = useSelector(selectActiveEmailData);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <>
      {!user && <Login />}
      {user && (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />

            <Switch>
              {ActiveEmail && (
                <Route path="/mail">
                  <Mail />
                </Route>
              )}

              <Route path="/" exact>
                <EmailsList />
              </Route>

              <Route path="*">
                <Redirect to="/" />
              </Route>
            </Switch>
          </div>
          {messageBoxIsOpen && <MessageBox />}
        </>
      )}
    </>
  );
}

export default App;
