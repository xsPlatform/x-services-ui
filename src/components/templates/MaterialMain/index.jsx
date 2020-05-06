import React from 'react';
import { node, func } from 'prop-types';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Header from '../../organisms/MaterialHeader';
import { Footer } from '../../organisms';
import { Content } from './Content';
import { Container } from './Container';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e9e9e9',
    },
  },
});

const MaterialMain = ({ children, redirect, onExit }) => (
  <ThemeProvider theme={theme}>
    <Container>
      <Header redirect={redirect} onExit={onExit} />
      <Content>{children}</Content>
      <Footer />
    </Container>
  </ThemeProvider>
);

MaterialMain.propTypes = {
  children: node.isRequired,
  redirect: func.isRequired,
  onExit: func.isRequired,
};

export default MaterialMain;
