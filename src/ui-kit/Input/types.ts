import { FormControlProps } from 'ui-kit';

export interface InputProps extends FormControlProps<string> {
  type?: string;
  label?: string;
  clearable?: string;
  placeholder?: string;
  error?: string | boolean;
}
