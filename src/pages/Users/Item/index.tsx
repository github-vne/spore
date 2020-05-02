import { SIZE } from 'const';
import { action } from 'mobx';
import { observer } from 'mobx-react';
import { UserCard } from 'modals';
import { UserEntity } from 'models';
import React from 'react';
import { Avatar } from 'ui-kit';
import { Block } from './style';

interface UserProps {
  user?: UserEntity;
}

@observer
export default class User extends React.Component<UserProps> {
  @action.bound
  private openModal = (user: UserEntity): void => {
    UserCard.openModal({ user });
  };

  render(): JSX.Element {
    const { login, avatar, id } = this.props.user;
    return (
      <Block onClick={this.openModal.bind(this, this.props.user)} key={id}>
        <Avatar image={`https://randomuser.me/api/portraits/men/${id}.jpg`} size={SIZE.SMALL} />
        <p>Login: {login}</p>
      </Block>
    );
  }
}
