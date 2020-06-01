import { TaskStatus } from 'const/task';
import { observable } from 'mobx';

export default class TaskEntity {
  @observable
  status: TaskStatus;

  @observable
  text: string;

  @observable
  id: number;
}
