import styled from 'styled-components';
import { pxToRem } from '../../../helpers/scales/converter';
import ds from '../../../designSystem';

const sizeButton = (value) => {
  switch (value) {
    case 'xxsm':
      return `font-size: ${ds.fontSize('xs')};
              font-weight: ${ds.get('type.fontWeight.bold')};
              line-height: ${ds.get('type.lineHeight.normal')};
              min-height: ${pxToRem(30)};`;
    case 'xsm':
      return `font-size: ${ds.fontSize('s')};
              line-height: ${ds.get('type.lineHeight.buttonSmall')};
              min-height: ${pxToRem(40)};`;
    case 'sm':
      return `font-size: ${ds.fontSize('s')};
              line-height: ${ds.get('type.lineHeight.buttonSmall')};
              min-height: ${pxToRem(46)};
              font-weight: ${ds.get('type.fontWeight.bold')};`;
    case 'md':
      return `font-size: ${ds.fontSize('s')};
              line-height: ${ds.get('type.lineHeight.base')};
              min-height: ${pxToRem(50)};
              font-weight: ${ds.get('type.fontWeight.bold')};`;
    case 'lg':
      return `font-size: ${ds.fontSize('s')};
              line-height: ${ds.get('type.lineHeight.base')};
              min-height: ${pxToRem(50)};`;
    default:
      return `font-size: ${ds.fontSize('s')};
              line-height: ${ds.get('type.lineHeight.base')};
              min-height: ${pxToRem(50)};`;
  }
};

export const Button = styled.button.attrs(({ id }) => ({
  'data-test': `btn_${id}`,
}))`
  background-color: ${ds.color('dark', 'lighter')};
  border: 0;
  border-radius: ${ds.get('borderRadius.md')};
  box-sizing: border-box;
  color: ${ds.color('white')};
  cursor: pointer;
  font-family: ${ds.get('type.fontFamily.helvetica')};
  ${(props) => sizeButton(props.size)};
  outline: none;
  text-align: center;
  width: 100%;

  :disabled {
    background-color: transparent;
    border: ${pxToRem(1)} solid ${ds.color('bright', 'dark')};
    color: ${ds.color('dark', 'lighter')};
    cursor: default;
  }

  @media ${ds.get('device.l')} {
    width: ${(props) => props.width};
  }
`;

Button.defaultProps = {
  width: '100%',
};

export default Button;
