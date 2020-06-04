import { STYLED } from 'const';
import { TaskStatus, TaskStatusName, TaskStatusValues } from 'const/task';
import { action, computed, observable } from 'mobx';
import { observer } from 'mobx-react';
import { TaskEntity } from 'models';
import React, { Component } from 'react';
import { TaskStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { RawSvg } from 'ui-kit';
import { ActionBtn, List, TabItem, TabPanel, Task, TaskActions, TasksList, Textarea } from './style';

@observer
export default class TaskList extends Component {
  @Inject private taskStore: TaskStore;

  @observable private activeTab: TaskStatus = TaskStatus.TODO;
  @observable private editableId: number;
  @observable private editableText: string;

  @computed private get tasks(): Array<TaskEntity> {
    return this.taskStore.tasks;
  }

  @action.bound
  changeTab(status: TaskStatus): void {
    if (this.activeTab === status) return;
    this.activeTab = status;
  }

  @action.bound
  onChangeText(_: string, value: string): void {
    this.editableText = value;
  }

  @action.bound
  editTaskText(task: TaskEntity): void {
    this.editableText = task.text;
    this.editableId = task.id;
  }

  @action.bound
  acceptChange(task: TaskEntity): void {
    task.text = this.editableText;
    this.editableId = null;
  }

  render(): JSX.Element {
    return (
      <TasksList title="Список заданий">
        <TabPanel>
          {TaskStatusValues.map(status => (
            <TabItem key={status} active={this.activeTab === status} onClick={this.changeTab.bind(this, status)}>
              {TaskStatusName[status]}
            </TabItem>
          ))}
        </TabPanel>
        <List>
          {this.tasks
            .filter(task => task.status === this.activeTab)
            .map(el => (
              <Task key={el.id}>
                {this.editableId === el.id ? (
                  <>
                    <Textarea styled={STYLED.PRIMARY} value={this.editableText} onChange={this.onChangeText} />
                    <ActionBtn onClick={this.acceptChange.bind(this, el)}>
                      <RawSvg icon="tasks/accept" />
                    </ActionBtn>
                  </>
                ) : (
                  <>
                    <p>{el.text}</p>
                    <TaskActions>
                      <ActionBtn onClick={this.editTaskText.bind(this, el)}>
                        <RawSvg icon="tasks/edit" />
                      </ActionBtn>
                      <ActionBtn onClick={this.taskStore.changeTaskStatus.bind(this, el.id, TaskStatus.DONE)}>
                        <RawSvg icon="tasks/complete" />
                      </ActionBtn>
                      <ActionBtn onClick={this.taskStore.changeTaskStatus.bind(this, el.id, 's')}>
                        <RawSvg icon="tasks/delete" />
                      </ActionBtn>
                    </TaskActions>
                  </>
                )}
              </Task>
            ))}
        </List>
      </TasksList>
    );
  }
}
