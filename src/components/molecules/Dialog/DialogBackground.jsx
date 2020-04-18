import styled from 'styled-components';
import ds from '../../../designSystem';

export const DialogBackground = styled.div`
  background: ${ds.color('dark')};
  bottom: 0;
  display: block;
  left: 0;
  opacity: ${ds.get('opacity.50')};
  outline: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: ${ds.z('low')};

  &.fade-in {
    display: block;
  }

  &.fade-out {
    display: none;
  }
`;
