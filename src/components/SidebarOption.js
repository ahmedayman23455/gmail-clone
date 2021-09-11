import React from 'react';
import './SidebarOption.css';

const SidebarOption = ({ Icon, title, number, select }) => {
  return (
    <div className={`sidebar__option ${select && 'selected'}`}>
      <Icon />
      <div className="sidebar__title">{title}</div>

      {number && <p className="sidebar__number">{number}</p>}
    </div>
  );
};

export default SidebarOption;
