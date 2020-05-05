import { STYLED } from 'const';
import { FormControlProps } from 'ui-kit';

export interface TextareaProps extends FormControlProps<string> {
  type?: string;
  label?: string;
  clearable?: string;
  placeholder?: string;
  error?: string | boolean;
  styled?: STYLED;
  className?: string;
  innerBtn?: {
    icon?: string | JSX.Element;
    onClick: () => void;
  };
}
