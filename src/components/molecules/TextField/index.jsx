import React from 'react';
import { bool, string, func, oneOfType, array } from 'prop-types';
import { NormalInput } from '../../atoms/NormalInput';
import { Container } from './Container';
import { ErrorMessageBox } from '../ErrorMessageBox';

const TextField = ({
  onChange,
  onBlur,
  value,
  fullWidth,
  placeholder,
  error,
  type,
  name,
  mask,
  touched,
  ...others
}) => (
  <Container>
    <NormalInput
      type={type}
      name={name}
      mask={mask}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      fullWidth={fullWidth}
      placeholder={placeholder}
      error={error}
      touched={touched}
      {...others}
    />
    <ErrorMessageBox id={`error_${name}`}>{error && touched && error}</ErrorMessageBox>
  </Container>
);

TextField.propTypes = {
  fullWidth: bool,
  placeholder: string,
  error: string,
  value: string,
  onChange: func,
  onBlur: func,
  type: string,
  mask: string,
  name: string.isRequired,
  touched: oneOfType([bool, array]),
};

TextField.defaultProps = {
  fullWidth: true,
  placeholder: '',
  error: '',
  mask: '',
  value: '',
  onChange: () => {},
  onBlur: () => {},
  type: 'text',
  touched: false,
};

export default TextField;
