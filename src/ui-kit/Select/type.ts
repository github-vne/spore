export interface SelectProps {
  name?: string;
  isOpen?: boolean;
  list?: Array<OptionProps>;
  defaultValue?: OptionProps;
  onChange?: () => ReturnedOption;
}

export interface OptionProps {
  title: string;
  value: string | number;
}

export interface ReturnedOption {
  name: string;
  value: string | number;
}
