import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import TuneIcon from '@material-ui/icons/Tune';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar, IconButton } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux-slices/userSlice';
import { logout } from '../redux-slices/userSlice';
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(logout());
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png"
          alt=""
        />

        <div className="header__search">
          <IconButton>
            <SearchIcon />
          </IconButton>

          <input type="text" placeholder="Search mail" />
          <IconButton className="tuneIcon">
            <TuneIcon />
          </IconButton>
        </div>
      </div>

      <div className="header__right">
        <div className="header__rightIcons">
          <IconButton className="searchIcon">
            <SearchIcon />
          </IconButton>
          <IconButton>
            <HelpOutlineIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
          <IconButton>
            <AppsIcon />
          </IconButton>
        </div>

        <Avatar src={user?.photoURL} onClick={logoutHandler} />
      </div>

      <div className="header__responsiveSearch"></div>
    </div>
  );
};

export default Header;
