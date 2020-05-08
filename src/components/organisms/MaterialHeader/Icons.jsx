import styled from 'styled-components';
import { Menu, MoreVert } from '@material-ui/icons';
import ds from '../../../designSystem';

export const MenuIcon = styled(Menu)`
  @media ${ds.get('device.s')} {
    color: #00909b !important;
  }
`;

export const MoreIcon = styled(MoreVert)`
  @media ${ds.get('device.s')} {
    color: #00909b !important;
  }
`;
