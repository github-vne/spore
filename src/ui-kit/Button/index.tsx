import { SIZE } from 'const';
import React from 'react';
import { Loader } from 'ui-kit';
import { BtnLink, Button, ButtonRawSvg } from './style';
import { IButtonProps } from './types';

export default ({ children, styled, icon, className, pending, href, disabled, ...props }: IButtonProps) => {
  if (href) {
    return (
      <BtnLink to={href} styled={styled} className={className}>
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
