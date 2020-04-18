import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { LoadingOverlay } from './LoadingOverlay';
import { FirstChild } from './FirstChild';
import { Container } from './Container';
import ds from '../../../designSystem';

export const Spinner = ({ active, children, ...props }) => {
  let loadNode = active && (
    <CSSTransition
      appear
      classNames="loading-overlay-transition"
      timeout={{ enter: 500, exit: 500 }}
    >
      <LoadingOverlay key="the_dimmer" {...props} />
    </CSSTransition>
  );

  loadNode = (
    <TransitionGroup appear component={FirstChild}>
      {loadNode}
    </TransitionGroup>
  );

  return (
    <Container active={active} className="loading-overlay">
      {children}
      {loadNode}
    </Container>
  );
};

Spinner.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool,
  spinnerSize: PropTypes.string,
  color: PropTypes.string,
};

Spinner.defaultProps = {
  active: false,
  spinnerSize: 'md',
  color: ds.color('white'),
};
