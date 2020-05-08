import { AppBar } from '@material-ui/core';
import styled from 'styled-components';
import ds from '../../../designSystem';

export const AppBarMUI = styled(AppBar)`
  @media ${ds.get('device.s')} {
    & {
      background-color: #fff !important;
    }
  }
`;
