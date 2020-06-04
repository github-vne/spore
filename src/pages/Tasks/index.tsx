import { Box, Layout } from 'common';
import { STYLED } from 'const';
import { PageType } from 'const/pages';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import React, { RefObject } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { MainStore, TaskStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { Button, Textarea as _Textarea } from 'ui-kit';
import { TaskSettings, Textarea, Wrapper } from './style';
import TaskList from './TaskList';

@observer
export default class PageTasks extends React.Component<RouteComponentProps> {
  @Inject private mainStore: MainStore;
  @Inject private taskStore: TaskStore;

  private textAreaRef: RefObject<_Textarea> = React.createRef<_Textarea>();
  @observable private taskText: string;

  componentDidMount(): void {
    this.mainStore.changeCurrentPage(PageType.TASKS);
  }

  @action.bound
  private onChange(_: string, value: string): void {
    this.taskText = value;
  }

  @action.bound
  createTask(): void {
    if (!this.taskText) return;
    this.taskStore.createTask(this.taskText);
    this.taskText = null;
    this.textAreaRef?.current.resetValue();
  }

  render(): JSX.Element {
    return (
      <Layout>
        <Wrapper>
          <TaskList />
          <TaskSettings>
            <Box
              title="Создать задание"
              footer={
                <Button styled={STYLED.TERTIARY} onClick={this.createTask}>
                  Создать
                </Button>
              }
            >
              <Textarea
                rows={4}
                value={this.taskText}
                ref={this.textAreaRef}
                onChange={this.onChange}
                placeholder="Текст задания"
              />
            </Box>
            <Box title="Статистика (В разработке)" />
          </TaskSettings>
        </Wrapper>
      </Layout>
    );
  }
}
