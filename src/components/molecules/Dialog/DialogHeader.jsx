import styled from 'styled-components';
import ds from '../../../designSystem';
import { pxToRem } from '../../../helpers/scales/converter';

export const DialogHeader = styled.div`
  align-items: center;
  display: flex;
  height: ${pxToRem(48)};
  justify-content: space-between;
  padding: ${ds.spacing('3')} ${ds.spacing('6')};

  button {
    text-decoration: none;
    transition: 0.3s ease all;

    &:hover {
      background-color: ${ds.color('bright', 'dark')};
      color: ${ds.color('white')};
    }
  }
`;
