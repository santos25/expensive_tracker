import React from 'react';
import { GlobalStyle } from './GlobalStles';
import { Container, Title } from "./AppStyled";
import Main from './components/main/main';
import Total from './components/total/total';

const App: React.FC = (): React.ReactElement => {
  return (
    <Container>
      <GlobalStyle />
      <Title>
        Seguimiento de Gastos
      </Title>
      <Total />
      <Main />
    </Container>
  );
}

export default App;
