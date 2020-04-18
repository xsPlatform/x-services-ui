import styled from 'styled-components';
import { pxToRem } from '../../../helpers/scales/converter';

export const Image = styled.img.attrs(({ id }) => ({
  'data-test': `img_${id}`,
}))`
  height: ${(props) => pxToRem(props.height)};
  width: ${(props) => pxToRem(props.width)};
`;

Image.defaultProps = {
  height: 100,
  width: 100,
};
