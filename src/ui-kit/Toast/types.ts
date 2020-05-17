export interface IToastDefinition {
  id?: string;
  icon?: string;
  title: string;
  type?: ToastType;
  content?: string;
  lifeTime?: number;
  removed?: boolean;
}

export enum ToastType {
  INFO = 'info',
  ERROR = 'error',
  WARNING = 'warning',
  SUCCESS = 'success'
}
