import React from 'react';
import './MailContent.css';
import DoubleArrowOutlinedIcon from '@material-ui/icons/DoubleArrowOutlined';

const MailContent = ({ to, subject, message, time }) => {
  return (
    <div className="mailContent">
      <div className="mailContent__header">
        <div className="mailContent__headerLeft">
          <h2>{subject}</h2>
          <DoubleArrowOutlinedIcon />
          <p> {to}</p>
        </div>
        <p className="mailContent__headerRight">{time}</p>
      </div>

      <div className="mailContnet__message">{message}</div>
    </div>
  );
};

export default MailContent;
