import styled from 'styled-components';
import { pxToRem } from '../../../helpers/scales/converter';
import ds from '../../../designSystem';

export const Container = styled.div.attrs(({ show }) => ({
  'data-test-snackbar': show,
}))`
  animation-delay: ${(props) => (props.alwaysVisible ? 99999999 : props.secondTimeOutToClose)}s;
  animation-direction: forwards;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  animation-name: cssAnimation;
  animation-timing-function: ease-in;
  bottom: 0;
  display: block;
  left: ${pxToRem(10)};
  padding: 0;
  position: fixed;
  width: ${pxToRem(320)};
  z-index: ${ds.z('xhigh')};

  @keyframes cssAnimation {
    0%,
    7.5% {
      bottom: ${pxToRem(10)};
    }

    5%,
    10% {
      bottom: ${pxToRem(15)};
    }

    100% {
      bottom: ${pxToRem(-70)};
    }
  }

  label,
  .snackbar {
    align-items: center;
    animation-delay: 1s;
    animation-direction: forwards;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
    animation-name: snackbar-show;
    animation-timing-function: ease-in-out;

    @keyframes snackbar-show {
      0% {
        bottom: ${pxToRem(-70)};
      }

      90%,
      95% {
        bottom: ${pxToRem(15)};
      }

      92.5%,
      100% {
        bottom: ${pxToRem(10)};
      }
    }
  }
`;
