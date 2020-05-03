import React from 'react';
import { func, string } from 'prop-types';
import { IconButton } from '../../atoms';
import { Container } from './styles';

const PageHeaderTool = ({ title, handleClickBack }) => (
  <Container>
    <IconButton icon="back" onClick={handleClickBack} />
    <h1>{title}</h1>
  </Container>
);

PageHeaderTool.propTypes = {
  handleClickBack: func.isRequired,
  title: string.isRequired,
};

export { PageHeaderTool };
