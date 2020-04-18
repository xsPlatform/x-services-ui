import React from 'react';
import { string } from 'prop-types';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { StyledCircleButton } from './StyledCircleButton';

const getIcon = (icon, size) => {
  const props = {
    size: `${size}px`,
  };
  switch (icon) {
    case 'plus':
      return <FaPlus {...props} />;
    case 'minus':
      return <FaMinus {...props} />;
    case 'close':
      return <MdClose size={16} />;
    default:
      return '';
  }
};

export const CircleButton = ({ icon, size, ...others }) => (
  <StyledCircleButton {...others}>{getIcon(icon, size)}</StyledCircleButton>
);

CircleButton.propTypes = {
  icon: string,
  size: string,
};

CircleButton.defaultProps = {
  icon: '',
  size: '10',
};
