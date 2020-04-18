import styled from 'styled-components';
import { pxToRem } from '../../../helpers/scales/converter';
import ds from '../../../designSystem';

const renderBackGrounColor = (type) => {
  switch (type) {
    case 'error':
      return ds.color('error');
    case 'success':
      return ds.color('success');
    case 'warning':
      return ds.color('warning');
    default:
      return ds.color('info');
  }
};

export const StyledSnackbar = styled.div.attrs({
  className: 'snackbar',
})`
  background-color: ${(props) => renderBackGrounColor(props.type)};
  border-radius: ${pxToRem(4)};
  bottom: ${pxToRem(-70)};
  box-shadow: ${ds.get('shadow.snackbar')};
  color: ${ds.color('white')};
  display: flex;
  font-family: ${ds.get('type.fontFamily.helvetica')};
  justify-content: space-between;
  left: 0;
  min-height: ${pxToRem(60)};
  padding: ${pxToRem(5)} ${pxToRem(20)};
  position: relative;
  transition: bottom 0.5s ease-in-out;
  z-index: ${ds.z('low')};

  p {
    width: 100%;
  }

  svg:first-child {
    margin-right: ${pxToRem(10)};
  }
`;
