import { Box, Layout } from 'common';
import { STYLED } from 'const';
import { PageType } from 'const/pages';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { MainStore, TaskStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { Button } from 'ui-kit';
import { TabItem, TabPanel, TasksCard, TaskSettings, Textarea, Title, Wrapper } from './style';
import TaskList from './TaskList';

@observer
export default class PageTasks extends React.Component<RouteComponentProps> {
  @Inject private mainStore: MainStore;
  @Inject private taskStore: TaskStore;
  @observable private taskText: string;

  componentDidMount(): void {
    this.mainStore.changeCurrentPage(PageType.TASKS);
  }

  @action.bound
  private onChange(name: string, value: string): void {
    this[name] = value;
  }

  @action.bound
  addTask(): void {
    if (!this.taskText) return;
    this.taskStore.addTask(this.taskText);
    this.taskText = undefined;
  }

  @action.bound
  render(): JSX.Element {
    return (
      <Layout>
        <Wrapper>
          <TaskSettings>
            <Box
              title="Создать задание (В разработке)"
              footer={
                <Button styled={STYLED.TERTIARY} onClick={this.addTask}>
                  Создать
                </Button>
              }
            >
              <Textarea rows={4} name="taskText" onChange={this.onChange} placeholder="Текст задания" />
            </Box>
            <Box title="Статистика (В разработке)" />
          </TaskSettings>
          <TasksCard>
            <div>
              <Title>Список заданий (В разработке)</Title>
              <TabPanel>
                {[
                  { title: 'В работе', name: 'inWork' },
                  { title: 'Выполнение', name: 'completed' },
                  { title: 'Удалённые', name: 'removed' }
                ].map((tab, index) => (
                  <TabItem
                    key={index}
                    active={this.taskStore.taskStatus === tab.name}
                    onClick={this.taskStore.changeTaskStatus.bind(this, tab.name)}
                  >
                    {tab.title}
                  </TabItem>
                ))}
              </TabPanel>
            </div>
            <TaskList />
          </TasksCard>
        </Wrapper>
      </Layout>
    );
  }
}
