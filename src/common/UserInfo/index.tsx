import { SIZE } from 'const';
import { UserEntity } from 'models';
import React from 'react';
import { Avatar } from 'ui-kit';
import { Card, Description, Name, Status } from './style';

interface UserInfoProps {
  user: UserEntity;
  className?: string;
  hiddenDescription?: boolean;
}

export default ({ className, user, hiddenDescription }: UserInfoProps) => {
  const { photo, fullName, status, description } = user;
  return (
    <Card className={className}>
      <Avatar image={photo} size={SIZE.EXTRA_LARGE} />
      <Name>{fullName}</Name>
      <Status>{status}</Status>
      {!hiddenDescription ? <Description>{description}</Description> : null}
    </Card>
  );
};
