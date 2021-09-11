import React, { useState } from 'react';
import './MessageBox.css';
import RemoveIcon from '@material-ui/icons/Remove';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { useDispatch } from 'react-redux';
import { hideMessageBox } from '../redux-slices/uiSlice';
import { db } from '../firebase';
import firebase from 'firebase';
import { selectUser } from '../redux-slices/userSlice';
import { useSelector } from 'react-redux';

const MessageBox = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [toValue, setToValue] = useState(null);
  const [subjectValue, setSubjectValue] = useState(null);
  const [messageValue, setMessageValue] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    try {
      db.collection('messages').add({
        to: toValue,
        subject: subjectValue,
        message: messageValue,
        timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        userEmail: user.email,
      });

      dispatch(hideMessageBox());
    } catch (err) {
      alert('Something went wrong ❗❗');
    }
  };

  return (
    <div className="messageBox">
      <div className="messageBox__header">
        <h4>New Message</h4>
        <div className="messageBox__headerIcons">
          <IconButton>
            <RemoveIcon />
          </IconButton>
          <IconButton>
            <FullscreenIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              dispatch(hideMessageBox());
            }}
          >
            <CloseIcon />
          </IconButton>
        </div>
      </div>

      <form action="#" className="messageBox__form" onSubmit={submitHandler}>
        <input
          type="email"
          placeholder="To:"
          required
          value={toValue}
          onChange={(e) => setToValue(e.target.value)}
        />
        <input
          type="text"
          placeholder="Subject:"
          required
          value={subjectValue}
          onChange={(e) => setSubjectValue(e.target.value)}
        />
        <textarea
          type="text"
          placeholder="Message:"
          required
          value={messageValue}
          onChange={(e) => setMessageValue(e.target.value)}
        />

        <div className="messageBox__button">
          <Button endIcon={<SendIcon fontSize="small" />} type="submit">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default MessageBox;
