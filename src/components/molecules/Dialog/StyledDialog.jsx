import styled from 'styled-components';
import ds from '../../../designSystem';

const getPropsByType = (type) => {
  switch (type) {
    case 'form':
      return 'padding: 0 4%;';
    default:
      return 'padding: 0 10%;';
  }
};

const StyledDialog = styled.div`
  align-items: center;
  justify-content: center;
  left: 0;
  margin: ${ds.spacing('8')} auto;
  ${(props) => getPropsByType(props.type)}
  opacity: 0;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity linear 0.15s;
  z-index: ${ds.z('high')};

  &.fade-in {
    display: flex;
    opacity: 1;
    transition: opacity linear 0.15s;
  }

  &.fade-out {
    display: none;
    opacity: 0;
    transition: opacity linear 0.15s;
  }
`;

export default StyledDialog;
