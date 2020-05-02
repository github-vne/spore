import { Inject, Singleton } from 'typescript-ioc';
import { ToastService, ToastType } from 'ui-kit';

@Singleton
export default class NotificationService {
  @Inject private toastService: ToastService;

  example(type: ToastType): void {
    const title = {
      [ToastType.INFO]: 'Информация',
      [ToastType.SUCCESS]: 'Успешно',
      [ToastType.WARNING]: 'Внимание',
      [ToastType.ERROR]: 'Ошибка'
    };

    const content = {
      [ToastType.INFO]: 'информационного',
      [ToastType.SUCCESS]: 'успешно выполненного',
      [ToastType.WARNING]: 'предупреждающего',
      [ToastType.ERROR]: 'ошибочного'
    };

    this.toastService.showToast(
      type,
      title[type],
      `Пример ${content[type]} уведомления`,
      'common/report_problem',
      3000
    );
  }
}
