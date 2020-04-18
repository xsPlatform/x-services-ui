import React from 'react';
import PropTypes from 'prop-types';
import { StyledSpinner } from './StyledSpinner';
import { SpinnerSvg } from './SpinnerSvg';
import { SpinnerCircle } from './SpinnerCircle';

export const SpinnerNode = ({ spinnerSize, color }) => (
  <StyledSpinner spinnerSize={spinnerSize}>
    <SpinnerSvg viewBox="25 25 50 50">
      <SpinnerCircle
        cx="50"
        cy="50"
        r="20"
        fill="none"
        strokeWidth="2"
        strokeMiterlimit="10"
        color={color}
      />
    </SpinnerSvg>
  </StyledSpinner>
);

SpinnerNode.propTypes = {
  spinnerSize: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
