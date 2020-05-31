import { action, computed, observable } from 'mobx';
import { Singleton } from 'typescript-ioc';

interface TaskModel {
  text: string;
  status: string;
  id: number;
}

@Singleton
export default class TaskStore {
  @observable private _taskStatus: string = 'inWork';
  @observable private _tasks: Array<TaskModel> = [
    { text: 'В работе', status: 'inWork', id: 0 },
    { text: 'В работе', status: 'inWork', id: 1 },
    { text: 'Выполнено', status: 'completed', id: 2 },
    { text: 'Удалено', status: 'removed', id: 3 }
  ];

  @computed get taskStatus(): string {
    return this._taskStatus;
  }

  @computed get tasks(): Array<TaskModel> {
    return this._tasks;
  }

  @action.bound
  changeTaskStatus(status: string): void {
    this._taskStatus = status;
  }

  @action.bound
  addTask(text: string): void {
    const newTask = { text, status: 'inWork', id: this.tasks.length };
    this._tasks.push(newTask);
  }
}
