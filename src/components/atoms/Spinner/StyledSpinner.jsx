import styled from 'styled-components';
import ds from '../../../designSystem';

const sizeOptions = (size) => {
  switch (size) {
    case 'sm':
      return ds.spacing('7');
    case 'md':
      return ds.spacing('10');
    case 'lg':
      return ds.spacing('12');
    default:
      return ds.spacing('10');
  }
};

export const StyledSpinner = styled.div`
  margin: 0px auto 10px auto;
  max-height: 100%;
  position: relative;
  width: ${(props) => sizeOptions(props.spinnerSize)};

  &:before {
    content: "";
    display: block;
    padding-top: 100%;
  }
`;
