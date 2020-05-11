import styled from 'styled-components';
import { pxToRem } from '../../../helpers/scales/converter';
import ds from '../../../designSystem';

export const Container = styled.div`
  align-items: center;
  background: #ffffff;
  border-left: ${pxToRem(5)} solid #00909b;
  box-shadow: 0px 3px 12px #0000000f;
  display: flex;
  justify-content: space-between;
  font-size: ${pxToRem(14)};
  font-weight: bold;
  color: #232323;
  padding-left: ${pxToRem(20)};
  width: 100%;

  @media ${ds.get('device.s')} {
    font-size: ${pxToRem(30)};
  }
`;
