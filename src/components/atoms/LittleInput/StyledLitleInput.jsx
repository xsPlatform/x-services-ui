import styled from 'styled-components';
import ds from '../../../designSystem';
import { pxToRem } from '../../../helpers/scales/converter';

export const StyledLitleInput = styled.input.attrs(({ id }) => ({
  'data-test': `txt_${id}`,
  maxLength: 1,
}))`
  border: ${pxToRem(1)} solid ${ds.color('bright', 'darker')};
  border-radius: ${ds.get('borderRadius.sm')};
  box-shadow: ${ds.get('shadow.input')};
  caret-color: ${ds.color('white')};
  font-family: ${ds.get('type.fontFamily.helvetica')};
  font-size: ${ds.fontSize('l')};
  height: ${pxToRem(48)};
  line-height: ${ds.get('type.lineHeight.base')};
  opacity: ${ds.get('opacity.70')};
  text-align: center;
  width: ${pxToRem(37)};
  z-index: ${ds.z('low')};

  :focus {
    border: ${pxToRem(2)} solid ${ds.color('bright', 'darker')};
    outline: none;
  }
`;
