import React from 'react';
import { string, bool, func, oneOfType, array, shape } from 'prop-types';
import { Button, NormalInput, Col, Row, Grid } from '../../atoms';

import { ErrorMessageBox } from '../ErrorMessageBox';

export const Search = ({
  buttonText,
  error,
  touched,
  placeholder,
  handleClick,
  mask,
  value,
  onChange,
  onBlur,
  fullWidth,
  inputProps,
  buttonProps,
}) => (
  <Grid>
    <Row gutter="3">
      <Col size={inputProps.size}>
        <NormalInput
          error={error}
          touched={touched}
          mask={mask}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          fullWidth={fullWidth}
          placeholder={placeholder}
          name={inputProps.name}
          id={inputProps.id}
        />
      </Col>
      {buttonProps.visible && (
        <Col size="4">
          <Button
            id={buttonProps.id}
            type="button"
            size="sm"
            onClick={() => handleClick(value)}
            disabled={!!error || !value}
          >
            {buttonText}
          </Button>
        </Col>
      )}
    </Row>
    <Row>
      <ErrorMessageBox>{error && touched && error}</ErrorMessageBox>
    </Row>
  </Grid>
);

Search.propTypes = {
  buttonText: string,
  fullWidth: bool,
  placeholder: string,
  error: string,
  value: string,
  onChange: func,
  onBlur: func,
  mask: string,
  touched: oneOfType([bool, array]),
  inputProps: shape({ name: string, id: string }),
  buttonProps: shape({ id: string }),
  handleClick: func.isRequired,
};

Search.defaultProps = {
  buttonText: 'OK',
  placeholder: 'Buscar',
  fullWidth: true,
  error: '',
  mask: '',
  value: '',
  onChange: () => {},
  onBlur: () => {},
  touched: false,
  inputProps: {
    id: '',
    name: '',
  },
  buttonProps: {
    id: '',
  },
};
