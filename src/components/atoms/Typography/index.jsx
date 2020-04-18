import React from 'react';
import { string, node } from 'prop-types';
import { TypographyVariants } from './TypographyVariants';

export const Typography = ({ variant, children, ...other }) => (
  <TypographyVariants type={variant} {...other}>
    {children}
  </TypographyVariants>
);

Typography.propTypes = {
  variant: string,
  children: node.isRequired,
};

Typography.defaultProps = {
  variant: 'body1',
};
