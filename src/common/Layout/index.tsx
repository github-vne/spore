import { Header, SideBar } from 'common';
import React from 'react';
import { Container, Layout, Main } from './style';

export default ({ children }: { children: Array<JSX.Element> | JSX.Element }) => {
  return (
    <Layout>
      <SideBar />
      <Container>
        <Header />
        <Main>{children}</Main>
      </Container>
    </Layout>
  );
};
