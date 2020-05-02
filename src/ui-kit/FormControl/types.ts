export interface BaseFormControlProps<T> {
  defaultValue?: T;
  value?: T;
  className?: string;
  onChange?(name: string, value: T): void;
}

export interface FormControlProps<T> extends BaseFormControlProps<T> {
  name?: string;
  disabled?: boolean;
  [nativeKey: string]: any;
}
