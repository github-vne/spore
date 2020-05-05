import { STYLED } from 'const';
import { FormControlProps } from 'ui-kit';

export interface InputProps extends FormControlProps<string> {
  type?: string;
  icon?: string;
  label?: string;
  clearable?: string;
  placeholder?: string;
  error?: string | boolean;
  styled?: STYLED;
  className?: string;
  innerBtn?: {
    icon?: string | JSX.Element;
    tooltip?: string;
    onClick: () => void;
  };
}
