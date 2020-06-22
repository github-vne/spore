import { SIZE, STYLED } from 'const';

export interface ButtonProps {
  size?: SIZE;
  icon?: string;
  href?: string;
  to?: string;
  styled?: STYLED;
  pending?: boolean;
  className?: string;
  children?: any;
  [nativeKey: string]: any;
}
