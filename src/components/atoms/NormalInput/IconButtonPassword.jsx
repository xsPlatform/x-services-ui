import React from 'react';
import styled from 'styled-components';
import { bool, func } from 'prop-types';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { pxToRem } from '../../../helpers/scales/converter';
import ds from '../../../designSystem';

const IconButtonPasswordStyle = styled.div`
  button {
    background-color: Transparent;
    background-repeat: no-repeat;
    border: 0;
    cursor: pointer;
    height: ${pxToRem(11)};
    outline: none;
    overflow: hidden;
    width: ${pxToRem(19)};
  }
  margin-right: ${ds.spacing('5')};
  position: absolute;
  right: 0;
  top: 50%;
  -webkit-touch-callout: none;
  transform: translateY(-50%);
  user-select: none;
`;

export const IconButtonPassword = ({ handleClickIconEye, showPass, error }) => (
  <IconButtonPasswordStyle>
    <button tabIndex={-1} type="button" onClick={handleClickIconEye}>
      {(!showPass && (
        <FaEye
          style={{ width: '100%' }}
          color={error ? ds.color('error') : ds.color('bright', 'darker')}
        />
      )) || (
        <FaEyeSlash
          style={{ width: '100%' }}
          color={error ? ds.color('error') : ds.color('bright', 'darker')}
        />
      )}
    </button>
  </IconButtonPasswordStyle>
);

IconButtonPassword.propTypes = {
  handleClickIconEye: func.isRequired,
  showPass: bool,
  error: bool,
};

IconButtonPassword.defaultProps = {
  showPass: false,
  error: false,
};
