import styled from 'styled-components';
import ds from '../../../designSystem';
import { pxToRem } from '../../../helpers/scales/converter';

export const DialogFooter = styled.div`
  align-items: center;
  display: flex;
  height: ${pxToRem(48)};
  justify-content: flex-end;
  padding: 0 ${ds.spacing('6')};
`;
