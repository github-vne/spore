import { Box, Layout } from 'common';
import { SIZE, STYLED } from 'const';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { PageType } from 'routers/MainRouter';
import { MainStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { Button, Loader, RawSvg } from 'ui-kit';
import {
  ActionBtn,
  TabContent,
  TabItem,
  TabPanel,
  Task,
  TaskActions,
  TasksCard,
  TaskSettings,
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
          <TaskSettings>
            <Box title="Создать задание (В разработке)" footer={<Button styled={STYLED.TERTIARY}>Создать</Button>}>
              <Textarea placeholder="Текст задания" rows={4} />
            </Box>
            <Box title="Статистика (В разработке)" />
          </TaskSettings>
          <TasksCard>
            <div>
              <Title>Список заданий (В разработке)</Title>
              <TabPanel>
                {['В работе', 'Выполнение', 'Удалённые'].map((tab, index) => (
                  <TabItem key={index} active={index === this.tabIndex} onClick={this.changeTabIndex.bind(this, index)}>
                    {tab}
                  </TabItem>
                ))}
              </TabPanel>
            </div>
            <TabContent>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(el => (
                <Task key={el}>
                  <p>Задание №{el}</p>
                  <TaskActions>
                    <ActionBtn>
                      <RawSvg icon="tasks/edit" />
                    </ActionBtn>
                    <ActionBtn>
                      <RawSvg icon="tasks/complete" />
                    </ActionBtn>
                    <ActionBtn>
                      <RawSvg icon="tasks/delete" />
                    </ActionBtn>
                  </TaskActions>
                </Task>
              ))}
            </TabContent>
          </TasksCard>
        </Wrapper>
      </Layout>
    );
  }
}
