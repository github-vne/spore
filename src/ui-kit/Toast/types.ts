export interface IToastDefinition {
  id?: string;
  icon?: string;
  type?: ToastType;
  title: string;
  lifeTime?: number;
  removed?: boolean;
  content?: string;
}

export enum ToastType {
  INFO = 'info',
  ERROR = 'error',
  WARNING = 'warning',
  SUCCESS = 'success'
}
