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
          <div>
            <h2>Создать задание</h2>
            <CreateTask>
              <Textarea placeholder="New task" rows={3} />
            </CreateTask>
          </div>
          <TasksCard title="Список заданий">
            <TabLine>123</TabLine>
          </TasksCard>
        </Wrapper>
      </Layout>
    );
  }
}
