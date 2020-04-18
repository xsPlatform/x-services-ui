import React from 'react';
import styled from 'styled-components';
import { MdDone } from 'react-icons/md';
import ds from '../../../designSystem';

const IconValidationSuccessStyle = styled.div`
  margin-right: ${ds.spacing('4')};
  position: absolute;
  right: 0;
  top: 60%;
  -webkit-touch-callout: none;
  transform: translateY(-50%);
  user-select: none;
`;

export const IconValidationSuccess = () => (
  <IconValidationSuccessStyle>
    <MdDone color={ds.color('success')} size="1.5rem" />
  </IconValidationSuccessStyle>
);
