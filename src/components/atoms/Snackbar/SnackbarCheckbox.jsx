import styled from 'styled-components';
import { pxToRem } from '../../../helpers/scales/converter';
import ds from '../../../designSystem';

export const SnackbarCheckbox = styled.input.attrs({
  type: 'checkbox',
  id: 'close',
})`
  border: 0;
  bottom: ${pxToRem(-70)};
  display: none;
  position: absolute;
  z-index: ${ds.z('low')};

  :checked ~ .snackbar,
  :checked,
  :checked + label {
    animation-delay: 0s;
    animation-name: snackbar-hide;
  }

  @keyframes snackbar-hide {
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
`;
