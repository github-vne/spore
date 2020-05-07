import { observer } from 'mobx-react';
import { Modal, ModalLayout } from 'modals/Modal';
import { UserEntity } from 'models';
import React from 'react';

@observer
export class UserCard extends Modal<{ user: UserEntity }> {
  private user: UserEntity = this.props.scope?.user;

  render(): JSX.Element {
    return (
      <ModalLayout>
        <p>User card (login: {this.user?.login})</p>
      </ModalLayout>
    );
  }
}
