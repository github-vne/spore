import { Layout } from 'common';
import { STYLED } from 'const';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { PageType } from 'routers/MainRouter';
import { MainStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { Button, RawSvg } from 'ui-kit';
import {
  CreatePanel,
  CreateTask,
  TabContent,
  TabItem,
  TabPanel,
  Task,
  TaskAction,
  TasksCard,
  Textarea,
  Title,
  Wrapper
} from './style';

@observer
export default class PageTasks extends React.Component<RouteComponentProps> {
  @Inject private mainStore: MainStore;
  @observable private tabIndex: number = 0;

  componentDidMount(): void {
    this.mainStore.changeCurrentPage(PageType.TASKS);
  }

  @action.bound
  changeTabIndex(index: number): void {
    this.tabIndex = index;
  }

  render(): JSX.Element {
    return (
      <Layout>
        <Wrapper>
          <CreateTask>
            <Textarea placeholder="Текст задания" label="Создать задание" rows={3} />
            <CreatePanel>
              <Button styled={STYLED.TERTIARY}>Создать (В разработке)</Button>
            </CreatePanel>
          </CreateTask>
          <TasksCard>
            <div>
              <Title>Список заданий</Title>
              <TabPanel>
                {['В работе', 'Выполнение', 'Удалённые'].map((tab, index) => (
                  <TabItem key={index} active={index === this.tabIndex} onClick={this.changeTabIndex.bind(this, index)}>
                    {tab}
                  </TabItem>
                ))}
              </TabPanel>
            </div>
            <TabContent>
              {/* <Loader size={SIZE.EXTRA_LARGE} fullScreen /> */}
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(el => (
                <Task key={el}>
                  <p>Задание №{el}</p>
                  <TaskAction>
                    <RawSvg icon="tasks/complete" />
                  </TaskAction>
                  <TaskAction>
                    <RawSvg icon="tasks/delete" />
                  </TaskAction>
                </Task>
              ))}
            </TabContent>
          </TasksCard>
        </Wrapper>
      </Layout>
    );
  }
}
