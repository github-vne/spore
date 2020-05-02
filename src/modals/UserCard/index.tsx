import { observer } from 'mobx-react';
import { Modal, ModalLayout } from 'modals/Modal';
import { UserEntity } from 'models';
import React from 'react';

interface UserCardProps {
  user: UserEntity;
}

@observer
export class UserCard extends Modal<UserCardProps> {
  private user: UserEntity = this.props.scope?.user;

  private get headerEl(): JSX.Element {
    return (
      <>
        {this.user?.login}
        <p>Шапка модального окна</p>
      </>
    );
  }

  private get footerEl(): JSX.Element {
    return (
      <>
        <button>Футер модального окна</button>
      </>
    );
  }

  render(): JSX.Element {
    return (
      <ModalLayout header={this.headerEl} footer={this.footerEl}>
        <h1>User card</h1>
      </ModalLayout>
    );
  }
}
