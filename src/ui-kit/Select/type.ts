type OptionValue = string | number | object;

export interface SelectProps {
  name: string;
  isOpen?: boolean;
  options: Array<OptionProps>;
  defaultValue?: OptionProps;
  placeholder?: string;
  clearable?: boolean;
  onChange?(name: string, value: OptionValue): void;
}

export interface OptionProps {
  title: string;
  value: OptionValue;
}
