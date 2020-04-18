import styled from 'styled-components';
import { pxToRem } from '../../../helpers/scales/converter';
import ds from '../../../designSystem';

export const Container = styled.div`
  align-items: center;
  background-color: ${ds.color('bright', '200')};
  display: flex;
  justify-content: space-between;
  min-height: ${pxToRem(70)};
  order: 3;
  padding: 0 ${ds.spacing('5')};
`;
