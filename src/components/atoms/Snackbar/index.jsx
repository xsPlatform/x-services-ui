import React, { useState, useEffect } from 'react';
import { string, bool, number } from 'prop-types';
import { MdError, MdClose, MdCheckCircle, MdInfo, MdWarning } from 'react-icons/md';
import { StyledSnackbar } from './StyledSnackbar';
import { SnackbarCheckbox } from './SnackbarCheckbox';
import { SnackbarLabel } from './SnackbarLabel';
import { Container } from './Container';
import { Typography } from '../Typography';
import ds from '../../../designSystem';

const renderIcon = (type) => {
  const props = {
    size: 25,
  };
  switch (type) {
    case 'error':
      return <MdError {...props} />;
    case 'success':
      return <MdCheckCircle {...props} />;
    case 'warning':
      return <MdWarning {...props} />;
    default:
      return <MdInfo {...props} />;
  }
};

export const Snackbar = ({ type, show, alwaysVisible, secondTimeOutToClose, message }) => {
  const [showSnackbar, setShowSnackbar] = useState(false);

  useEffect(() => {
    setShowSnackbar(show);
    if (show) {
      setTimeout(() => {
        setShowSnackbar(false);
      }, secondTimeOutToClose * 1000);
    }
  }, [show]);

  const handleChangeCheck = (e) => {
    setShowSnackbar(!e.target.checked);
  };

  return (
    <>
      {show && (
        <Container
          show={showSnackbar}
          alwaysVisible={alwaysVisible}
          secondTimeOutToClose={secondTimeOutToClose}
        >
          <SnackbarCheckbox onChange={handleChangeCheck} />
          <SnackbarLabel />
          <StyledSnackbar type={type}>
            {renderIcon(type)}
            <Typography variant="subtitle2" color={ds.color('white')} id="snackbar">
              {message}
            </Typography>
            <MdClose size={20} />
          </StyledSnackbar>
        </Container>
      )}
    </>
  );
};
Snackbar.propTypes = {
  type: string,
  show: bool,
  alwaysVisible: bool,
  secondTimeOutToClose: number,
  message: string,
};

Snackbar.defaultProps = {
  type: 'info',
  show: false,
  alwaysVisible: false,
  secondTimeOutToClose: 5,
  message: '',
};
