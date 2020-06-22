import { SIZE } from 'const';
import React from 'react';
import { Loader } from 'ui-kit';
import { BtnHref, BtnLink, Button, Children, Icon } from './style';
import { ButtonProps } from './types';

export default ({ children, styled, icon, className, pending, href, to, disabled, ...props }: ButtonProps) => {
  if (href) {
    return (
      <BtnHref href={href} styled={styled} className={className} {...props}>
        {icon && <Icon icon={icon} />}
        <span>{children}</span>
      </BtnHref>
    );
  }

  if (to) {
    return (
      <BtnLink to={to} styled={styled} className={className} {...props}>
        {icon && <Icon icon={icon} />}
        {children && <Children>{children}</Children>}
      </BtnLink>
    );
  }

  return (
    <Button styled={styled} className={className} disabled={disabled} {...props}>
      {pending ? (
        <Loader size={SIZE.SMALL} />
      ) : (
        <>
          {icon && <Icon icon={icon} />}
          {children && <Children>{children}</Children>}
        </>
      )}
    </Button>
  );
};
