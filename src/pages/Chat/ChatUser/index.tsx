import { SIZE } from 'const';
import React from 'react';
import { Avatar } from 'ui-kit';
import { Info, User } from './style';

export default ({ selected, user }: { selected: boolean; user: any }) => {
  return (
    <User selected={selected}>
      <Avatar size={SIZE.SMALL} />
      <Info>
        <p>{user.name}</p>
        <p>{user.lastMessage}</p>
      </Info>
    </User>
  );
};
