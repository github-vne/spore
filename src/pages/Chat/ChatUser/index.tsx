import { SIZE } from 'const';
import React from 'react';
import { Avatar } from 'ui-kit';
import { Info, User } from './style';

export default class ChatUser extends React.Component<{ selected: boolean; user: any }> {
  render(): JSX.Element {
    const { selected, user } = this.props;
    return (
      <User selected={selected}>
        <Avatar size={SIZE.SMALL} />
        <Info>
          <p>{user.name}</p>
          <p>{user.lastMessage}</p>
        </Info>
      </User>
    );
  }
}
