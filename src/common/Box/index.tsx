import React from 'react';
import { Container, Footer, Title } from './style';
import { BoxProps } from './types';

export default ({ title, className, children, footer }: BoxProps) => {
  return (
    <Container className={className}>
      {title && <Title>{title}</Title>}
      {children}
      {footer && <Footer>{footer}</Footer>}
    </Container>
  );
};
