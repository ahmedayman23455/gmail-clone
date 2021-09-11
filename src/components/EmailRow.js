import React from 'react';
import './EmailRow.css';
import Checkbox from '@material-ui/core/Checkbox';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import { IconButton } from '@material-ui/core';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import ScheduleOutlinedIcon from '@material-ui/icons/ScheduleOutlined';
import DoubleArrowOutlinedIcon from '@material-ui/icons/DoubleArrowOutlined';
import './EmailRow.css';
import { useHistory } from 'react-router';
import { addDataActiveEmail } from '../redux-slices/userSlice';
import { useDispatch } from 'react-redux';

const EmailRow = ({ to, subject, message, time }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const iconButtonHandler = (e) => {
    e.stopPropagation();
  };

  const emailRowClickHandler = () => {
    dispatch(
      addDataActiveEmail({
        to: to,
        subject: subject,
        message: message,
        time: time,
      })
    );

    history.push('/mail');
  };

  return (
    <div className="emailRow" onClick={emailRowClickHandler}>
      <div className="emailRow__left">
        <Checkbox onClick={iconButtonHandler} />
        <IconButton onClick={iconButtonHandler}>
          <StarBorderOutlinedIcon />
        </IconButton>

        <DoubleArrowOutlinedIcon />
        <h4>{to}</h4>
      </div>

      <div className="emailRow__body">
        <h4>
          {subject}
          <span className="emailRow__description">{message}</span>
        </h4>
      </div>

      <div className="emailRow__right">
        <h5 className="emailRow__time">{time}</h5>
        <div className="emailRow__hoverIcons">
          <IconButton onClick={iconButtonHandler}>
            <ArchiveOutlinedIcon />
          </IconButton>
          <IconButton onClick={iconButtonHandler}>
            <DeleteOutlineOutlinedIcon />
          </IconButton>
          <IconButton onClick={iconButtonHandler}>
            <MailOutlineOutlinedIcon />
          </IconButton>
          <IconButton onClick={iconButtonHandler}>
            <ScheduleOutlinedIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default EmailRow;
