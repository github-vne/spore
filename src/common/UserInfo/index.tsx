import { SIZE } from 'const';
import { UserEntity } from 'models';
import React from 'react';
import { Avatar } from 'ui-kit';
import { Description, Name, Status, UserInfo } from './style';

interface UserInfoProps {
  user: UserEntity;
  className?: string;
}

export default ({ className, user }: UserInfoProps) => {
  const { photo, fullName, status, description } = user;
  return (
    <UserInfo className={className}>
      <Avatar image={photo} size={SIZE.EXTRA_LARGE} />
      <Name>{fullName}</Name>
      <Status>{status}</Status>
      <Description>{description}</Description>
    </UserInfo>
  );
};
