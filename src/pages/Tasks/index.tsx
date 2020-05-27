import { Layout } from 'common';
import { observer } from 'mobx-react';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { PageType } from 'routers/MainRouter';
import { MainStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { Textarea } from 'ui-kit';
import { CreateTask, TabLine, TasksCard, Wrapper } from './style';

@observer
export default class PageTasks extends React.Component<RouteComponentProps> {
  @Inject private mainStore: MainStore;

  componentDidMount(): void {
    this.mainStore.changeCurrentPage(PageType.TASKS);
  }

  render(): JSX.Element {
    return (
      <Layout>
        <Wrapper>
          <CreateTask>
            <Textarea placeholder="New task" rows={3} label="Создать задание" />
          </CreateTask>
          <TasksCard title="Список заданий">
            <TabLine>Задание #1</TabLine>
          </TasksCard>
        </Wrapper>
      </Layout>
    );
  }
}
