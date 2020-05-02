import React from 'react';
import { Content, Item, Title } from './style';

interface FormItemProps {
  title?: string;
  className?: string;
  children?: JSX.Element | Array<JSX.Element>;
}

export default class FormItem extends React.Component<FormItemProps> {
  render(): JSX.Element {
    const { title, className, children } = this.props;
    if (!children && !title) return <div />;
    return (
      <Item className={className}>
        <Title>{title}</Title>
        <Content>{children}</Content>
      </Item>
    );
  }
}
