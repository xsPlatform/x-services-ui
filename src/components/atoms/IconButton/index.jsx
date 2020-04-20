import React from 'react';
import IconButtonMUI from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { string, func } from 'prop-types';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

const renderIcon = (icon) => {
  switch (icon) {
    case 'back':
      return <KeyboardBackspaceIcon style={{ color: '#fff' }} />;
    default:
      return <MenuIcon style={{ color: '#fff' }} />;
  }
};

export const IconButton = ({ onClick, icon }) => (
  <IconButtonMUI aria-haspopup="true" onClick={onClick} color="inherit">
    {renderIcon(icon)}
  </IconButtonMUI>
);

IconButton.propTypes = {
  icon: string.isRequired,
  onClick: func,
};

IconButton.defaultProps = {
  onClick: () => {},
};
