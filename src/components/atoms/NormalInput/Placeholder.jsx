import styled from 'styled-components';
import ds from '../../../designSystem';

export const Placeholder = styled.span.attrs(({ id }) => ({
  'data-test': `msg_placeholder_${id}`,
}))`
  color: ${(props) => ds.color(props.error ? 'error' : 'dark')};
  font-family: ${ds.get('type.fontFamily.helvetica')};
  font-size: ${ds.fontSize('s')};
  left: 0;
  margin-left: ${ds.spacing('6')};
  opacity: ${ds.get('opacity.40')};
  pointer-events: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.2s;
  transition-timing-function: ease;
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
`;
