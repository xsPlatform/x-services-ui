import React from 'react';
import { node } from 'prop-types';
import { Container } from './Container';
import { Content } from './Content';
import { Header, Footer } from '../../organisms';

const Main = ({ children }) => (
  <Container>
    <Header />
    <Content>{children}</Content>
    <Footer />
  </Container>
);

Main.propTypes = {
  children: node.isRequired,
};

export default Main;
