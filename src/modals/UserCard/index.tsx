import { UserInfo } from 'common';
import { observer } from 'mobx-react';
import { Modal, ModalLayout } from 'modals/Modal';
import { UserEntity } from 'models';
import React from 'react';
import { Background, Content } from './style';

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
        </Content>
      </ModalLayout>
    );
  }
}
