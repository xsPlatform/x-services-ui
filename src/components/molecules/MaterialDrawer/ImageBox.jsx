import styled from 'styled-components';
import ds from '../../../designSystem';
import { pxToRem } from '../../../helpers/scales/converter';

export const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  margin: ${pxToRem(20)} 0;
  width: 100%;

  @media ${ds.get('device.s')} {
    display: none;
  }
`;
