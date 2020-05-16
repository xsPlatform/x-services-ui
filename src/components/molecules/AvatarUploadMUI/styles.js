import styled from 'styled-components';
import { Avatar, IconButton } from '@material-ui/core';

export const HiddenFileInput = styled.input.attrs(() => ({
  type: 'file',
}))`
  display: none;
`;

export const AvatarMUI = styled(Avatar)`
  height: 67px !important;
  width: 67px !important;
`;

export const IconButtonMUI = styled(IconButton)`
  width: 67px !important;
`;
