import styled from 'styled-components';
import { pxToRem } from '../../../helpers/scales/converter';
import ds from '../../../designSystem';

export const Header = styled.div`
  background-color: ${ds.color('bright', '100')};
  box-shadow: ${ds.get('shadow.header')};
  min-height: ${pxToRem(67)};
`;
