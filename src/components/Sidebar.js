import React from 'react';
import './Sidebar.css';
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import SendIcon from '@material-ui/icons/Send';
import DraftsIcon from '@material-ui/icons/Drafts';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import { Button } from '@material-ui/core';
import SidebarOption from './SidebarOption';
import { useDispatch } from 'react-redux';
import { showMessageBox } from '../redux-slices/uiSlice';

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <Button
        className="sidebar__composeBtn"
        // startIcon={<AddIcon />}
        onClick={() => dispatch(showMessageBox())}
      >
        <AddIcon />
        <span className="sidebar__composeTitle">Compose</span>
      </Button>

      <div className="sidebar__options">
        <SidebarOption
          Icon={InboxIcon}
          title="inbox"
          number={20}
          select={true}
        />
        <SidebarOption Icon={StarIcon} title="Starred" />
        <SidebarOption Icon={QueryBuilderIcon} title="Snoozed" />
        <SidebarOption Icon={SendIcon} title="Sent" />
        <SidebarOption Icon={DraftsIcon} title="Drafts" />
        <SidebarOption Icon={KeyboardArrowDownIcon} title="More" />
      </div>

      <div className="sidebar__meeting">
        <h4>Meet</h4>
        <SidebarOption Icon={VideoCallIcon} title="New a meeting" />
        <SidebarOption Icon={KeyboardIcon} title="Join a meeting" />
      </div>
    </div>
  );
};

export default Sidebar;
