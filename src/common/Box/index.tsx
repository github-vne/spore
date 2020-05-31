import React from 'react';
import { Box, Footer, Title } from './style';
import { BoxProps } from './types';

export default ({ title, className, children, footer }: BoxProps) => {
  return (
    <Box className={className}>
      {title && <Title>{title}</Title>}
      {children}
      {footer && <Footer>{footer}</Footer>}
    </Box>
  );
};
