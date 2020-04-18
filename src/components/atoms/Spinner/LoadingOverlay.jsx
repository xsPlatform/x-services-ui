import React from 'react';
import PropTypes from 'prop-types';
import { Overlay } from './Overlay';
import { Content } from './Content';
import { SpinnerNode } from './SpinnerNode';

export const LoadingOverlay = ({ color, spinnerSize }) => (
  <Overlay key="dimmer" color={color}>
    <Content>
      <SpinnerNode spinnerSize={spinnerSize} color={color} />
    </Content>
  </Overlay>
);

LoadingOverlay.propTypes = {
  spinnerSize: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
