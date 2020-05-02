import React from 'react';
import { Container, Footer, Title } from './style';

interface BoxProps {
  title?: string;
  className?: string;
  footer?: Array<JSX.Element> | JSX.Element;
}

export default class Box extends React.Component<BoxProps> {
  render(): JSX.Element {
    const { title, className, children, footer } = this.props;
    return (
      <Container className={className}>
        {title && <Title>{title}</Title>}
        {children}
        {footer && <Footer>{footer}</Footer>}
      </Container>
    );
  }
}
