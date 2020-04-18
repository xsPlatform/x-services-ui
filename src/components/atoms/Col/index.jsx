import styled from 'styled-components';
import ds from '../../../designSystem';

export const Col = styled.div`
  align-items: center;
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  width: ${(props) => ds.get(`col.${props.size}`)}%;

  @media ${ds.get('device.m')} {
    width: ${(props) => ds.get(`col.${props.md || props.size}`)}%;
  }
`;

Col.defaultProps = {
  size: 12,
  md: null,
  direction: 'row',
  justify: 'flex-start',
};
