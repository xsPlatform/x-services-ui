import React, { useState, useEffect } from 'react';
import { bool, string, func, oneOfType, array } from 'prop-types';
import InputMask from 'react-input-mask';
import { Container } from './Container';
import { Placeholder } from './Placeholder';
import { IconButtonPassword } from './IconButtonPassword';
import { IconValidationSuccess } from './IconValidationSuccess';
import { Label } from './Label';
import { StyledInput } from './StyledInput';

export const NormalInput = ({
  fullWidth,
  placeholder,
  error,
  type,
  onChange,
  onBlur,
  value,
  name,
  mask,
  touched,
  maxLength,
  disabled,
}) => {
  const [showPass, setShowPass] = useState(false);
  const [typeInput, setTypeInput] = useState('text');
  const [containsError, setContainsError] = useState(false);

  useEffect(() => {
    setTypeInput(...type);
  }, []);

  useEffect(() => {
    setContainsError(error !== '' && touched === true);
  }, [error, touched]);

  useEffect(() => {
    if (type === 'password') setTypeInput(showPass ? 'text' : 'password');
  }, [showPass]);

  const handleClickIconEye = () => {
    setShowPass(!showPass);
  };

  return (
    <Container>
      <Label>
        <InputMask
          mask={mask}
          maskChar={null}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          id={name}
          disabled={disabled}
        >
          {(inputProps) => (
            <StyledInput
              {...inputProps}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              id={name}
              type={typeInput}
              fullWidth={fullWidth}
              placeholder=" "
              error={containsError}
              autoComplete={name}
              maxLength={maxLength}
              disabled={disabled}
            />
          )}
        </InputMask>
        <Placeholder id={name} error={containsError}>
          {placeholder}
        </Placeholder>
      </Label>
      {type === 'password' && (
        <IconButtonPassword
          handleClickIconEye={handleClickIconEye}
          showPass={showPass}
          error={containsError}
        />
      )}
      {type !== 'password' && !error && value && <IconValidationSuccess />}
    </Container>
  );
};

NormalInput.propTypes = {
  fullWidth: bool,
  placeholder: string,
  error: string,
  value: string,
  onChange: func,
  onBlur: func,
  type: string,
  name: string,
  maxLength: string,
  mask: string,
  touched: oneOfType([bool, array]),
  disabled: bool,
};

NormalInput.defaultProps = {
  fullWidth: true,
  placeholder: '',
  error: '',
  value: '',
  onChange: () => {},
  onBlur: () => {},
  type: 'text',
  mask: '',
  name: '',
  touched: false,
  maxLength: '99',
  disabled: false,
};

export default NormalInput;
