import { Toolbar } from '@material-ui/core';
import styled from 'styled-components';
import ds from '../../../designSystem';
import { pxToRem } from '../../../helpers/scales/converter';

export const ToolbarMUI = styled(Toolbar)`
  & {
    height: ${pxToRem(100)};
  }
  @media ${ds.get('device.s')} {
    & {
      height: ${pxToRem(200)};
    }
  }
`;
