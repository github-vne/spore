import { Layout } from 'common';
import { observer } from 'mobx-react';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { PageType } from 'routers/Router';
import { MainStore } from 'stores';
import { Inject } from 'typescript-ioc';
import Task from './Task';

@observer
export default class PageTasks extends React.Component<RouteComponentProps> {
  @Inject private mainStore: MainStore;

  componentDidMount(): void {
    this.mainStore.changeCurrentPage(PageType.TASKS);
  }

  render(): JSX.Element {
    return (
      <Layout>
        <Task />
        <Task />
      </Layout>
    );
  }
}
