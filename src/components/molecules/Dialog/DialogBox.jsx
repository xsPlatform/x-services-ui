import styled from 'styled-components';
import ds from '../../../designSystem';
import { pxToRem } from '../../../helpers/scales/converter';

export const DialogBox = styled.div`
  background-color: ${ds.color('bright')};
  box-shadow: ${ds.get('shadow.dialog')};
  max-width: ${pxToRem(600)};
  width: 100%;
  z-index: ${ds.z('mid')};

  @media ${ds.get('device.m')} {
    max-width: ${pxToRem(730)};
  }
`;
