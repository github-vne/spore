export enum TaskStatus {
  TODO = 'todo',
  IN_PROGRESS = 'inProgress',
  DONE = 'done'
}

export const TaskStatusName = {
  [TaskStatus.TODO]: 'Новые',
  [TaskStatus.IN_PROGRESS]: 'В работе',
  [TaskStatus.DONE]: 'Выполненные'
};

export const TaskStatusValues = Object.values(TaskStatus);
