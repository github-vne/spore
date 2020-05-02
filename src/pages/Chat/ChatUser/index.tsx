import { SIZE } from 'const';
import React from 'react';
import { Avatar } from 'ui-kit';
import { Info, User } from './style';

export default class ChatUser extends React.Component {
  render(): JSX.Element {
    return (
      <User>
        <Avatar size={SIZE.SMALL} />
        <Info>
          <p>User Name</p>
          <p>Last message</p>
        </Info>
      </User>
    );
  }
}
