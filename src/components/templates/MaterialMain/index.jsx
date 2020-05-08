import React from 'react';
import { node, func } from 'prop-types';
import Header from '../../organisms/MaterialHeader';
import { Footer } from '../../organisms';
import { Content } from './Content';
import { Container } from './Container';

const MaterialMain = ({ children, redirect, onExit }) => (
  <Container>
    <Header redirect={redirect} onExit={onExit} />
    <Content>{children}</Content>
    <Footer />
  </Container>
);

MaterialMain.propTypes = {
  children: node.isRequired,
  redirect: func.isRequired,
  onExit: func.isRequired,
};

export default MaterialMain;
