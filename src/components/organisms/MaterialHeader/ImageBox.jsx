import styled from 'styled-components';
import ds from '../../../designSystem';

export const ImageBox = styled.div`
  display: none;

  @media ${ds.get('device.s')} {
    display: block;
  }
`;
