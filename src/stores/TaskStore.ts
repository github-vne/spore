import { TaskStatus } from 'const/task';
import { action, computed, observable } from 'mobx';
import { TaskEntity } from 'models';
import { Singleton } from 'typescript-ioc';

@Singleton
export default class TaskStore {
  @observable private _taskStatus: TaskStatus = TaskStatus.TODO;
  @observable private _tasks: Array<TaskEntity> = [
    { text: '1', status: TaskStatus.TODO, id: 0 },
    { text: '2', status: TaskStatus.DONE, id: 1 },
    { text: '3', status: TaskStatus.IN_PROGRESS, id: 2 },
    { text: '4', status: TaskStatus.IN_PROGRESS, id: 3 }
  ];

  @computed get taskStatus(): TaskStatus {
    return this._taskStatus;
  }

  @computed get tasks(): Array<TaskEntity> {
    return this._tasks;
  }

  @action.bound
  changeTaskStatus(status: TaskStatus): void {
    console.info(status);
    this._taskStatus = status;
  }

  @action.bound
  addTask(text: string): void {
    const newTask = ({ text, status: 'inWork', id: this.tasks.length } as unknown) as TaskEntity;
    this._tasks.push(newTask);
  }
}
