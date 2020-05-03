import { FormControlProps } from 'ui-kit';

export interface TextareaProps extends FormControlProps<string> {
  type?: string;
  label?: string;
  clearable?: string;
  placeholder?: string;
  error?: string | boolean;
  innerBtn?: {
    icon?: string | JSX.Element;
    onClick: () => void;
  };
}
