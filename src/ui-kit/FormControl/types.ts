import { STYLED } from 'const';

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

export interface InputProps extends FormControlProps<string> {
  type?: string;
  icon?: string;
  label?: string;
  styled?: STYLED;
  placeholder?: string;
  error?: string | boolean;
  innerBtn?: {
    icon?: string | JSX.Element;
    tooltip?: string;
    onClick: () => void;
  };
}
