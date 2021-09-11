import React, { useEffect, useState } from 'react';
import './EmailsLists.css';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ReplayIcon from '@material-ui/icons/Replay';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { IconButton } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import EmailsListOption from './EmailsListOption';
import EmailRow from './EmailRow';
import { db } from '../firebase';
import { selectUser } from '../redux-slices/userSlice';
import { useSelector } from 'react-redux';

const EmailsList = () => {
  const [emails, setEmails] = useState([]);
  const user = useSelector(selectUser);

  useEffect(() => {
    try {
      db.collection('messages')
        .orderBy('timeStamp', 'desc')
        .onSnapshot((snapshot) => {
          const fetchedEmails = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              data: doc.data(),
            };
          });

          setEmails(
            fetchedEmails.filter((obj) => obj.data.userEmail === user.email)
          );
        });
    } catch (err) {
      alert('Something went wrong❗❗');
    }
  }, [user.email]);

  return (
    <div className="emailsList">
      <div className="emailsList__icons">
        <div className="emailsList__iconsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <ReplayIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>

        <div className="emailsList__iconsRight">
          <IconButton>
            <KeyboardArrowLeftIcon />
          </IconButton>
          <IconButton>
            <KeyboardArrowRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>

      <div className="emailsList__options">
        <EmailsListOption
          Icon={InboxIcon}
          title="Primary"
          color="#d93025"
          select={true}
        />
        <EmailsListOption Icon={PeopleIcon} title="Social" color="#4485f4" />
        <EmailsListOption
          Icon={LocalOfferIcon}
          title="Promotions"
          color="#34a853"
        />
      </div>

      <div className="emailsList__emails">
        {emails.map(({ id, data: { to, message, subject, timeStamp } }) => {
          return (
            <EmailRow
              id={id}
              key={id}
              to={to}
              subject={subject}
              message={message}
              time={new Date(timeStamp?.seconds * 1000).toUTCString()}
            />
          );
        })}
      </div>
    </div>
  );
};

export default EmailsList;
