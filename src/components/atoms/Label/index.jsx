import styled from 'styled-components';
import { pxToRem } from '../../../helpers/scales/converter';
import ds from '../../../designSystem';

export const Label = styled.label`
  height: ${pxToRem(24)};
  margin-bottom: ${ds.spacing('row')};
`;
