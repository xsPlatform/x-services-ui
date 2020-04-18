import styled from 'styled-components';
import { pxToRem } from '../../../helpers/scales/converter';
import ds from '../../../designSystem';

export const StyledCircleButton = styled.button.attrs(({ id }) => ({
  'data-test': `btn_${id}`,
}))`
  align-items: center;
  background-color: transparent;
  border: ${(props) => props.border};
  border-radius: 50%;
  color: ${ds.color('dark', '100')};
  display: flex;
  font-size: 15px;
  font-weight: bold;
  height: ${pxToRem(25)};
  justify-content: center;
  outline: none;
  text-decoration: none;
  width: ${pxToRem(25)};

  @media ${ds.get('device.l')} {
    cursor: pointer;
  }
`;

StyledCircleButton.defaultProps = {
  border: `${pxToRem(2)} solid ${ds.color('dark', '100')}`,
};
