import { TaskStatus } from 'const/task';
import { observable } from 'mobx';

export default class TaskEntity {
  @observable
  status: TaskStatus;

  @observable
  text: string;

  @observable
  id: number;

  constructor(props: Partial<TaskEntity>) {
    if (!props) return;
    this.id = props.id;
    this.text = props.text;
    this.status = props.status;
  }
}
