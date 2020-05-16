import React from 'react';
import { func, bool, string } from 'prop-types';
import { Checkbox, FormControlLabel } from '@material-ui/core';

const CheckBoxMUI = ({ checked, handleChange, label, id, disabled }) => (
  <FormControlLabel
    control={
      // eslint-disable-next-line react/jsx-wrap-multilines
      <Checkbox
        checked={checked}
        onChange={(e) => handleChange(id, e)}
        color="primary"
        disabled={disabled}
      />
    }
    label={label}
  />
);

CheckBoxMUI.propTypes = {
  handleChange: func.isRequired,
  checked: bool.isRequired,
  disabled: bool.isRequired,
  label: string.isRequired,
  id: string.isRequired,
};

export { CheckBoxMUI };
