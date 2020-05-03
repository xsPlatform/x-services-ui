import styled from 'styled-components';
import { pxToRem } from '../../../helpers/scales/converter';

export const Container = styled.div`
  align-items: center;
  background-color: #00909b;
  display: flex;
  height: ${pxToRem(60)};
  padding: 0 ${pxToRem(5)};
  width: 100vw;

  h1 {
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    margin-left: 10px;
  }
`;
