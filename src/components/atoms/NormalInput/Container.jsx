import styled from 'styled-components';
import ds from '../../../designSystem';

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;

  input:focus + span,
  input:not(:placeholder-shown) + span {
    font-size: ${ds.fontSize('xs')};
    top: 25%;
  }

  /* For IE Browsers */

  input:focus + span,
  input:not(:-ms-input-placeholder) + span {
    font-size: ${ds.fontSize('xs')};
    top: 25%;
  }
`;
