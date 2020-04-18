import styled from 'styled-components';
import { pxToRem } from '../../../helpers/scales/converter';
import ds from '../../../designSystem';

export const StyledInput = styled.input.attrs(({ id }) => ({
  'data-test': `txt_${id}`,
}))`
  border: ${pxToRem(1)} solid
    ${(props) => (props.error ? ds.color('error') : ds.color('bright', 'darker'))};
  border-radius: ${ds.get('borderRadius.md')};
  box-shadow: ${ds.get('shadow.input')};
  color: ${(props) => (props.error ? ds.color('error') : ds.color('dark'))};
  font-family: ${ds.get('type.fontFamily.helvetica')};
  font-size: ${ds.fontSize('s')};
  line-height: ${ds.get('type.lineHeight.base')};
  min-height: ${pxToRem(46)};
  opacity: ${ds.get('opacity.70')};
  padding-left: ${ds.spacing('6')};
  padding-top: ${ds.spacing('5')};
  width: ${(props) => (props.fullWidth ? '100%' : '')};
  z-index: ${ds.z('low')};

  :focus {
    outline: none;
  }
`;
