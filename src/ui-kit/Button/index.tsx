import { SIZE } from 'const';
import React from 'react';
import { Loader } from 'ui-kit';
import { BtnHref, BtnLink, Button, ButtonRawSvg } from './style';
import { ButtonProps } from './types';

export default ({ children, styled, icon, className, pending, href, to, disabled, ...props }: ButtonProps) => {
  if (href) {
    return (
      <BtnHref href={href} styled={styled} className={className} {...props}>
        {icon && <ButtonRawSvg icon={icon} />}
        <span>{children}</span>
      </BtnHref>
    );
  }

  if (to) {
    return (
      <BtnLink to={to} styled={styled} className={className} {...props}>
        {icon && <ButtonRawSvg icon={icon} />}
        <span>{children}</span>
      </BtnLink>
    );
  }

  return (
    <Button styled={styled} className={className} disabled={disabled || pending} {...props}>
      {pending ? (
        <Loader fullScreen size={SIZE.SMALL} />
      ) : (
        <>
          {icon && <ButtonRawSvg icon={icon} />}
          <span>{children}</span>
        </>
      )}
    </Button>
  );
};
