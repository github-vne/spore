import { Box, Layout } from 'common';
import { STYLED } from 'const';
import { PageType } from 'const/pages';
import { TaskStatusName, TaskStatusValues } from 'const/task';
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
    console.info(TaskStatusValues);
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
                {TaskStatusValues.map(status => (
                  <TabItem
                    key={status}
                    active={this.taskStore.taskStatus === status}
                    onClick={this.taskStore.changeTaskStatus.bind(this, status)}
                  >
                    {TaskStatusName[status]}
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
