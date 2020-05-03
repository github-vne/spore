import { FormControlProps } from 'ui-kit';

export interface InputProps extends FormControlProps<string> {
  type?: string;
  icon?: string;
  label?: string;
  clearable?: string;
  placeholder?: string;
  error?: string | boolean;
  innerBtn?: {
    icon?: string | JSX.Element;
    tooltip?: string;
    onClick: () => void;
  };
}
