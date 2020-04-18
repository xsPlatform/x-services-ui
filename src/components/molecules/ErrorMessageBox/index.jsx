import React from 'react';
import { node, string } from 'prop-types';
import ds from '../../../designSystem';
import { MessageBelowComponent } from '../../atoms/MessageBelowComponent';
import { Typography } from '../../atoms/Typography';

export const ErrorMessageBox = ({ children, id, textAlign }) => (
  <MessageBelowComponent>
    <Typography
      variant="body2"
      color={ds.color('error')}
      opacity={80}
      id={id}
      textAlign={textAlign}
    >
      {children}
    </Typography>
  </MessageBelowComponent>
);

ErrorMessageBox.propTypes = {
  children: node.isRequired,
  textAlign: string,
  id: string,
};
ErrorMessageBox.defaultProps = {
  id: '',
  textAlign: 'left',
};
