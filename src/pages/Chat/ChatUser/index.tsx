import { SIZE } from 'const';
import React from 'react';
import { Avatar } from 'ui-kit';
import { Info, User } from './style';

export default class ChatUser extends React.Component<{ selected: boolean; el: number }> {
  render(): JSX.Element {
    const { selected, el } = this.props;
    return (
      <User selected={selected}>
        <Avatar size={SIZE.SMALL} />
        <Info>
          <p>Пользователь #{el}</p>
          <p>Сообщение - {el}</p>
        </Info>
      </User>
    );
  }
}
