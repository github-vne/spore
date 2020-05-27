import { SIZE, STYLED } from 'const';

export interface ButtonProps {
  size?: SIZE;
  icon?: string;
  href?: string;
  styled?: STYLED;
  pending?: boolean;
  className?: string;
  [nativeKey: string]: any;
  children?: any;
}
