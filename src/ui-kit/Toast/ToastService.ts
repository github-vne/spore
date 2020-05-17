import { action, observable } from 'mobx';
import { Singleton } from 'typescript-ioc';
import uuidv4 from 'uuid/v4';
import { IToastDefinition, ToastType } from './types';

@Singleton
export class ToastService {
  @observable toasts: Array<IToastDefinition> = [];

  @action.bound
  showToast(type: ToastType, title: string, content?: string, icon?: string, lifeTime?: number): string {
    const toast: IToastDefinition = {
      id: uuidv4(),
      type,
      title,
      content,
      icon,
      lifeTime
    };
    this.toasts.push(toast);
    lifeTime && this.setToastDropTimeout(toast.id, lifeTime);
    return toast.id;
  }

  @action
  dropToast(id: string): void {
    this.toasts = this.toasts.filter(t => t.id !== id);
  }

  private setToastDropTimeout(id: string, lifeTime: number): void {
    setTimeout(
      action(_ => this.dropToast(id)),
      lifeTime
    );
  }
}
