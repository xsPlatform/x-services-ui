import styled from 'styled-components';
import ds from '../../../designSystem';

export const Overlay = styled.div`
  background-color: ${ds.color('dark')};
  color: ${(props) => props.color};
  display: flex;
  font-size: 1.2em;
  height: 100%;
  left: 0;
  opacity: ${ds.get('opacity.70')};
  position: absolute;
  text-align: center;
  top: 0;
  transition: opacity 1ms ease-out;
  width: 100%;
  z-index: ${ds.z('high')};

  &.loading-overlay-transition-appear.loading-overlay-transition-appear-active,
  &.loading-overlay-transition-enter.loading-overlay-transition-enter-active {
    opacity: 0;
    transition: opacity 0.5s ease-in;
  }

  &.loading-overlay-transition-exit.loading-overlay-transition-exit-active {
    opacity: 0;
    transition: opacity 0.5s ease-in;
  }
`;
