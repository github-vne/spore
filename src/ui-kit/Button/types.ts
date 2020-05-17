import { SIZE, STYLED } from 'const';

export interface IButtonProps {
  size?: SIZE;
  icon?: string;
  href?: string;
  styled?: STYLED;
  pending?: boolean;
  className?: string;
  [nativeKey: string]: any;
  children?: JSX.Element | string;
}
