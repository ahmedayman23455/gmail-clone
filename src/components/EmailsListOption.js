import React from 'react';
import './EmailsListOption.css';

const EmailsListOption = ({ Icon, title, color, select }) => {
  return (
    <div
      className={`emailsLists__option ${select && 'selected'}`}
      style={{
        borderBottom: `3px solid ${color} `,
        color: `${select && color}`,
      }}
    >
      <Icon />
      <h3>{title}</h3>
    </div>
  );
};

export default EmailsListOption;
