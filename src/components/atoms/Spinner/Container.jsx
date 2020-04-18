import styled from 'styled-components';

const hidden = `overflow: hidden;
overflowY: hidden;
overflowX: hidden;`;

export const Container = styled.div.attrs(({ active }) => ({
  'data-test': 'spinner',
  'data-spinner': active,
}))`
  display: flex;
  ${(props) => (props.active ? hidden : '')}
  position: absolute;
  width: 100%;
`;
