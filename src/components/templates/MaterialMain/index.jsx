import React from 'react';
import { node, func, arrayOf, shape } from 'prop-types';
import Header from '../../organisms/MaterialHeader';
import { Footer } from '../../organisms';
import { Content } from './Content';
import { Container } from './Container';

const MaterialMain = ({ children, redirect, onExit, sideMenuItens }) => (
  <Container>
    <Header redirect={redirect} onExit={onExit} sideMenuItens={sideMenuItens} />
    <Content>{children}</Content>
    <Footer />
  </Container>
);

MaterialMain.propTypes = {
  children: node.isRequired,
  redirect: func.isRequired,
  onExit: func.isRequired,
  sideMenuItens: arrayOf(shape({})).isRequired,
};

export default MaterialMain;
