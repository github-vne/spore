import { Header, SideBar } from 'common';
import React from 'react';
import { Container, Layout, Main } from './style';

export default ({ children }: { children: any }) => {
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
