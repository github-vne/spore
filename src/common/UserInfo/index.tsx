import { UserEntity } from 'models';
import React from 'react';
import { Avatar } from 'ui-kit';
import { Card, FullName, Status } from './style';

export default ({ className, user }: { className?: string; user: UserEntity }) => {
  return (
    <Card className={className}>
      <Avatar image={user.photo} />
      <FullName>{user.fullName}</FullName>
      <Status>{user.status}</Status>
    </Card>
  );
};
