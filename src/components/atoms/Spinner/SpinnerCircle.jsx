import styled, { keyframes } from 'styled-components';

const spinnerDash = keyframes`
  0% {
    stroke-dasharray: 1,200;
    stroke-dashoffset: 0;
  }
  
  50% {
    stroke-dasharray: 89,200;
    stroke-dashoffset: -35px;
  }

  100% {
    stroke-dasharray: 89,200;
    stroke-dashoffset: -124px;
  }
`;

export const SpinnerCircle = styled.circle`
  animation: ${spinnerDash} 1.5s ease-in-out infinite;
  stroke: ${(props) => props.color};
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
`;
