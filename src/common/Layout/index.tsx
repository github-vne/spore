import { Header, SideBar } from 'common';
import React from 'react';
import { Container, Layout, Main } from './style';

interface LayoutProps {
  children: Array<JSX.Element> | JSX.Element;
}

export default (props: LayoutProps) => {
  return (
    <Layout>
      <SideBar />
      <Container>
        <Header />
        <Main>{props.children}</Main>
      </Container>
    </Layout>
  );
};
