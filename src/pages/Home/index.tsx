import { Layout } from 'common';
import { observer } from 'mobx-react';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { PageType } from 'routers/Router';
import { MainStore } from 'stores';
import { Inject } from 'typescript-ioc';

@observer
export default class PageHome extends React.Component<RouteComponentProps> {
  @Inject private mainStore: MainStore;

  componentDidMount(): void {
    this.mainStore.changeCurrentPage(PageType.HOME);
  }

  render(): JSX.Element {
    return (
      <Layout>
        <h1>Home Page</h1>
      </Layout>
    );
  }
}
