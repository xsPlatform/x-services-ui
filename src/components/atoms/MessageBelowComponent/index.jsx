import styled from 'styled-components';
import { pxToRem } from '../../../helpers/scales/converter';

export const MessageBelowComponent = styled.div`
  margin: ${pxToRem(3)} ${pxToRem(15)};
  min-height: ${pxToRem(15)};
`;
