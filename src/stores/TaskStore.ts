import { TaskStatus } from 'const/task';
import { action, computed, observable } from 'mobx';
import { TaskEntity } from 'models';
import { Singleton } from 'typescript-ioc';

@Singleton
export default class TaskStore {
  @observable private _tasks: Array<TaskEntity> = [
    { text: '1', status: TaskStatus.TODO, id: 0 },
    { text: '2', status: TaskStatus.DONE, id: 1 },
    { text: '3', status: TaskStatus.IN_PROGRESS, id: 2 },
    { text: '4', status: TaskStatus.IN_PROGRESS, id: 3 }
  ];

  @computed get tasks(): Array<TaskEntity> {
    return this._tasks;
  }

  @action.bound
  changeTaskStatus(id: number, status: TaskStatus): void {
    const task = this.tasks.find(el => el.id === id);
    task.status = status;
  }

  @action.bound
  changeTaskText(id: number, text: string): void {
    const task = this.tasks.find(el => el.id === id);
    task.text = text;
  }

  @action.bound
  createTask(text: string): void {
    const newTask = new TaskEntity({ text, status: TaskStatus.TODO, id: this.tasks.length });
    this._tasks.push(newTask);
  }
}
