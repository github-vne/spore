import { Box, Layout, UserInfo } from 'common';
import { SIZE, STYLED } from 'const';
import { action, computed, observable } from 'mobx';
import { observer } from 'mobx-react';
import { AddPhoto } from 'modals';
import { UserEntity } from 'models';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { PageType } from 'routers/MainRouter';
import { MainStore, UserStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { Button, Input, Textarea } from 'ui-kit';
import { Container, EditWrapper, UploadPhoto, UploadSvg, User } from './style';

enum fields {
  firstName = 'firstName',
  lastName = 'lastName',
  middleName = 'middleName',
  status = 'status'
}

const fieldsName = {
  [fields.firstName]: 'Имя',
  [fields.lastName]: 'Отчество',
  [fields.middleName]: 'Фамилия',
  [fields.status]: 'Статус'
};

@observer
export default class PageSettings extends React.Component<RouteComponentProps> {
  @Inject private mainStore: MainStore;
  @Inject private userStore: UserStore;

  @observable private tempUser: UserEntity = new UserEntity(this.user);
  @observable private pending: boolean;
  @observable private success: boolean;

  componentDidMount(): void {
    this.mainStore.changeCurrentPage(PageType.SETTINGS);
  }

  @computed private get user(): UserEntity {
    return this.userStore.user;
  }

  @action.bound
  openModal(): void {
    AddPhoto.openModal();
  }

  @action.bound
  onChange(name: string, value: string): void {
    this.tempUser[name] = value;
  }

  @action.bound
  private async updateUserInfo(): Promise<void> {
    this.pending = true;
    try {
      await this.userStore.updateUserInfo(this.tempUser);
      this.success = true;
      setTimeout(() => (this.success = false), 3000);
    } finally {
      this.pending = false;
    }
  }

  @computed private get footer(): JSX.Element {
    return (
      <>
        {this.success ? <span>Данные обновлены</span> : null}
        <Button styled={STYLED.TERTIARY} onClick={this.updateUserInfo} pending={this.pending}>
          Изменить
        </Button>
      </>
    );
  }

  render(): JSX.Element {
    return (
      <Layout>
        <Container>
          <Box title="Настройки профиля" footer={this.footer}>
            <EditWrapper>
              {Object.values(fields).map(param => (
                <Input
                  key={param}
                  name={param}
                  onChange={this.onChange}
                  label={fieldsName[param]}
                  value={this.tempUser[param]}
                  placeholder="Введите данные..."
                />
              ))}
            </EditWrapper>
            <Textarea
              rows={3}
              label="Описание"
              name="description"
              defaultValue={this.tempUser.description}
              onChange={this.onChange}
              placeholder="Enter your description..."
            />
          </Box>
          <User>
            <UploadPhoto onClick={this.openModal}>
              <UploadSvg icon="common/camera" />
            </UploadPhoto>
            <UserInfo user={this.user} size={SIZE.EXTRA_LARGE} />
          </User>
          <Box title="Сменить пароль" footer={<Button styled={STYLED.TERTIARY}>Сменить пароль</Button>}>
            <EditWrapper>
              <Input name="oldPassword" label="Старый пароль" placeholder="Введите старый пароль..." />
              <Input name="newPassword" label="Новый пароль" placeholder="Введите новый пароль..." />
            </EditWrapper>
          </Box>
          <Box title="Уведомления" />
        </Container>
      </Layout>
    );
  }
}
