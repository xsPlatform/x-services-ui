import styled from 'styled-components';
import ds from '../../../designSystem';

export const Container = styled.div`
  background-color: ${ds.color('bright')};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;
