import dayjs, { Dayjs } from 'dayjs';
import inflect from './inflect';

export const TIME_FORMAT = 'HH:mm';
export const DATE_FORMAT = 'LL'; // DD MMMM YYYY г.
export const TIME_DATE_FORMAT = `${TIME_FORMAT}, ${DATE_FORMAT}`;

export abstract class DtFormatter {
  static formatDate(val: Dayjs): string {
    if (!val) return '';
    if (val.isSame(dayjs(), 'day')) return 'Сегодня';
    if (val.isSame(dayjs().subtract(1, 'day'), 'day')) return 'Вчера';
    if (val.isSame(dayjs().add(1, 'day'), 'day')) return 'Завтра';
    return val.format(val.isSame(dayjs(), 'year') ? 'DD MMMM' : DATE_FORMAT);
  }

  static formatTime(val: Dayjs): string {
    if (!val) return '';
    const diffM = dayjs().diff(val, 'm');
    if (diffM < 0) return val.format(TIME_FORMAT);
    if (diffM < 1) return 'Только что';
    if (diffM < 16) return `${inflect(diffM, ['минуту', 'минуты', 'минут'])} назад`;
    return val.format(TIME_FORMAT);
  }

  static formatDateTime(val: Dayjs, full?: boolean): string {
    if (!val) return '';
    if (full) return val.format(TIME_DATE_FORMAT);
    if (!val.isSame(dayjs(), 'year')) return val.format(`${TIME_FORMAT}, ll`);
    if (val.isSame(dayjs(), 'day')) return this.formatTime(val);
    return `${val.format(TIME_FORMAT)}, ${DtFormatter.formatDate(val)}`;
  }
}
