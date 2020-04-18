import styled from 'styled-components';
import { pxToRem } from '../../../helpers/scales/converter';
import ds from '../../../designSystem';

export const Row = styled.div`
  align-items: ${(props) => props.align};
  display: flex;
  justify-content: ${(props) => props.justify};
  margin-bottom: ${(props) => ds.spacing(props.marginBottom)};
  width: 100%;

  div {
    margin-left: ${(props) => pxToRem(ds.get(`gutter.${props.gutter}`))};
  }

  div:first-child {
    margin-left: 0;
  }
`;

Row.defaultProps = {
  gutter: 0,
  justify: 'flex-start',
  marginBottom: 0,
  align: 'center',
};
