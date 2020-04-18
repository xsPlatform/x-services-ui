import styled from 'styled-components';
import { pxToRem } from '../../../helpers/scales/converter';
import ds from '../../../designSystem';

export const SnackbarLabel = styled.label.attrs({
  htmlFor: 'close',
})`
  border: 0;
  bottom: ${pxToRem(-70)};
  color: ${ds.color('white')};
  cursor: pointer;
  display: block;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: ${ds.z('mid')};
`;
