import { STYLED } from 'const';
import { action, computed, observable } from 'mobx';
import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { TaskStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { RawSvg } from 'ui-kit';
import { ActionBtn, List, Task, TaskActions, Textarea } from './style';

interface TaskModel {
  text: string;
  status: string;
  id: number;
}

@observer
export default class TaskList extends Component {
  @Inject private taskStore: TaskStore;

  @observable private editableId: number;
  @observable private editableText: string;

  @computed private get tasks(): Array<TaskModel> {
    return this.taskStore.tasks;
  }

  @action.bound
  changeTask(task: TaskModel): void {
    this.editableText = task.text;
    this.editableId = task.id;
  }

  @action.bound
  onChange(_: string, value: string): void {
    this.editableText = value;
  }

  @action.bound
  acceptChange(task: TaskModel): void {
    task.text = this.editableText;
    this.editableId = null;
  }

  @action.bound
  changeStatus(task: TaskModel, status: string): void {
    task.status = status;
  }

  render(): JSX.Element {
    return (
      <List>
        {this.tasks
          .filter(task => task.status === this.taskStore.taskStatus)
          .map(el => (
            <Task key={el.id}>
              {this.editableId === el.id ? (
                <>
                  <Textarea styled={STYLED.PRIMARY} value={this.editableText} onChange={this.onChange} />
                  <ActionBtn onClick={this.acceptChange.bind(this, el)}>
                    <RawSvg icon="tasks/accept" />
                  </ActionBtn>
                </>
              ) : (
                <>
                  <p>{el.text}</p>
                  <TaskActions>
                    <ActionBtn onClick={this.changeTask.bind(this, el)}>
                      <RawSvg icon="tasks/edit" />
                    </ActionBtn>
                    <ActionBtn onClick={this.changeStatus.bind(this, el, 'completed')}>
                      <RawSvg icon="tasks/complete" />
                    </ActionBtn>
                    <ActionBtn onClick={this.changeStatus.bind(this, el, 'removed')}>
                      <RawSvg icon="tasks/delete" />
                    </ActionBtn>
                  </TaskActions>
                </>
              )}
            </Task>
          ))}
      </List>
    );
  }
}
