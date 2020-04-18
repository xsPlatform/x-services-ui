import React, { forwardRef } from 'react';
import { string } from 'prop-types';
import { NormalInput } from '../NormalInput';
import { LittleInput } from '../LittleInput';

const renderInputType = ({ inputType, ...others }) => {
  switch (inputType) {
    case 'little':
      return <LittleInput {...others} />;

    default:
      return <NormalInput {...others} />;
  }
};

renderInputType.propTypes = {
  inputType: string,
};

renderInputType.defaultProps = {
  inputType: '',
};

const Input = forwardRef((props, ref) => renderInputType({ ...props, ref }));

export default Input;
