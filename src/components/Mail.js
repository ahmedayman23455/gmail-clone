import React from 'react';
import './Mail.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArchiveIcon from '@material-ui/icons/Archive';
import ErrorIcon from '@material-ui/icons/Error';
import DeleteIcon from '@material-ui/icons/Delete';
import ForumIcon from '@material-ui/icons/Forum';
import ScheduleIcon from '@material-ui/icons/Schedule';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PrintIcon from '@material-ui/icons/Print';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { IconButton } from '@material-ui/core';
import MailContent from './MailContent';
import { useHistory } from 'react-router';
import { selectActiveEmailData } from '../redux-slices/userSlice';
import { useSelector } from 'react-redux';

const Mail = () => {
  const history = useHistory();
  const email = useSelector(selectActiveEmailData);

  return (
    <div className="mail">
      <div className="mail__icons">
        <div className="mail__iconsLeft">
          <IconButton onClick={() => history.push('/')}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton>
            <ArchiveIcon />
          </IconButton>
          <IconButton>
            <ErrorIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <ForumIcon />
          </IconButton>
          <IconButton>
            <ScheduleIcon />
          </IconButton>
          \
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>

        <div className="mail__iconsRight">
          <IconButton>
            <PrintIcon />
          </IconButton>
          <IconButton>
            <KeyboardIcon />
          </IconButton>
          <IconButton>
            <OpenInNewIcon />
          </IconButton>
        </div>
      </div>
      <div className="mail__content">
        <MailContent
          to={email?.to}
          subject={email?.subject}
          message={email?.message}
          time={email?.time}
        />
      </div>
    </div>
  );
};

export default Mail;
