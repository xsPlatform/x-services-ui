import React, { forwardRef } from 'react';
import { string } from 'prop-types';
import InputMask from 'react-input-mask';
import { StyledLitleInput } from './StyledLitleInput';

export const LittleInput = forwardRef((props, ref) => (
  <InputMask mask={props.mask} maskChar={null} {...props}>
    {(inputProps) => <StyledLitleInput ref={ref} {...inputProps} />}
  </InputMask>
));

LittleInput.propTypes = {
  mask: string.isRequired,
};
