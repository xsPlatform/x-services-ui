import React from 'react';
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

export { CheckBoxMUI };
