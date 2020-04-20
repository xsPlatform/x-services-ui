import styled from 'styled-components';
import ds from '../../../designSystem';

export const Button = styled.button.attrs(({ id }) => ({
  'data-test': `btn_${id}`,
}))`
  background-color: ${(props) => props.backgroundColor};
  border: 0;
  border-radius: 5px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  font-family: ${ds.get('type.fontFamily.poppins')};
  outline: none;
  text-align: center;
`;

export default Button;
