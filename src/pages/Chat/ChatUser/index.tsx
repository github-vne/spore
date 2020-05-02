import { SIZE } from 'const';
import React from 'react';
import { Avatar } from 'ui-kit';
import { Info, User } from './style';

export default class ChatUser extends React.Component<{ selected: boolean }> {
  render(): JSX.Element {
    return (
      <User selected={this.props.selected}>
        <Avatar size={SIZE.SMALL} />
        <Info>
          <p>User Name</p>
          <p>Last message</p>
        </Info>
      </User>
    );
  }
}
