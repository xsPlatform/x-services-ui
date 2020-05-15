import React from 'react';
import IconButtonMUI from '@material-ui/core/IconButton';
import { string, func, number } from 'prop-types';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Delete from '@material-ui/icons/Delete';

const renderIcon = (icon, iconSize) => {
  switch (icon) {
    case 'back':
      return <KeyboardBackspaceIcon style={{ color: '#fff' }} />;
    case 'delete':
      return <Delete style={{ color: '#000' }} size={iconSize} />;
    default:
      return <KeyboardBackspaceIcon style={{ color: '#fff' }} />;
  }
};

export const IconButton = ({ onClick, icon, iconSize }) => (
  <IconButtonMUI aria-haspopup="true" onClick={onClick} color="inherit">
    {renderIcon(icon, iconSize)}
  </IconButtonMUI>
);

IconButton.propTypes = {
  icon: string.isRequired,
  onClick: func,
  iconSize: number,
};

IconButton.defaultProps = {
  onClick: () => {},
  iconSize: 10,
};
