import { UserInfo } from 'common';
import { SIZE } from 'const';
import { observer } from 'mobx-react';
import { Modal, ModalLayout } from 'modals/Modal';
import { UserEntity } from 'models';
import React from 'react';
import { Background, Content, UserAvatar } from './style';

@observer
export class UserCard extends Modal<{ user: UserEntity }> {
  static width: string = '350px';
  private user: UserEntity = this.props.scope?.user;

  render(): JSX.Element {
    if (!this.user) return;

    return (
      <ModalLayout>
        <Content>
          <Background />
          <UserInfo user={this.user} />
          {/* <UserAvatar image={this.user?.photo} size={SIZE.EXTRA_LARGE} /> */}
        </Content>
      </ModalLayout>
    );
  }
}
