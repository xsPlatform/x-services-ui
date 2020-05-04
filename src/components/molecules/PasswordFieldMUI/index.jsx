/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { string, func, bool } from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  InputAdornment,
  FormHelperText,
  InputLabel,
  Input,
  IconButton,
  FormControl,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
  textField: {
    width: '100%',
  },
}));
const PasswordFieldMUI = ({ label, onChange, onBlur, value, name, error, helperText }) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <FormControl className={clsx(classes.textField)}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Input
        id={name}
        name={name}
        type={values.showPassword ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={error}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
      <FormHelperText error id={name}>
        {helperText}
      </FormHelperText>
    </FormControl>
  );
};

PasswordFieldMUI.propTypes = {
  label: string.isRequired,
  name: string.isRequired,
  value: string.isRequired,
  error: bool,
  helperText: string.isRequired,
  onChange: func.isRequired,
  onBlur: func.isRequired,
};

PasswordFieldMUI.defaultProps = {
  error: false,
};

export { PasswordFieldMUI };
