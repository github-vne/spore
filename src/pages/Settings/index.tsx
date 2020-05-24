import { Layout } from 'common';
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
import { Avatar, Button, Input, Textarea } from 'ui-kit';
import {
  Container,
  EditProfile,
  UploadPhoto,
  UploadSvg,
  User,
  UserDescription,
  UserImage,
  UserInfo,
  UserName
} from './style';

@observer
export default class PageSettings extends React.Component<RouteComponentProps> {
  @Inject private mainStore: MainStore;
  @Inject private userStore: UserStore;

  @observable private tempUser: UserEntity = this.userStore.user;
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
      this.tempUser = await this.userStore.updateUserInfo(this.tempUser);
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
          Update
        </Button>
      </>
    );
  }

  render(): JSX.Element {
    return (
      <Layout>
        <Container>
          <UserInfo title="Edit Profile" footer={this.footer}>
            <EditProfile>
              <Input
                name="firstName"
                onChange={this.onChange}
                label="First name"
                defaultValue={this.tempUser.firstName}
                placeholder="Enter your first name..."
              />
              <Input
                name="lastName"
                onChange={this.onChange}
                label="Last name"
                defaultValue={this.tempUser.lastName}
                placeholder="Enter your last name..."
              />
              <Input
                name="middleName"
                onChange={this.onChange}
                label="Middle name"
                defaultValue={this.tempUser.middleName}
                placeholder="Enter your middle name..."
              />
              <Input
                name="status"
                onChange={this.onChange}
                label="Status"
                defaultValue={this.tempUser.status}
                placeholder="Enter your status..."
              />
            </EditProfile>
            <Textarea
              rows={3}
              name="description"
              defaultValue={this.tempUser.description}
              onChange={this.onChange}
              placeholder="Enter your description..."
            />
          </UserInfo>
          <User>
            <UserImage>
              <UploadPhoto onClick={this.openModal}>
                <UploadSvg icon="common/camera" />
              </UploadPhoto>
              <Avatar size={SIZE.EXTRA_LARGE} image={this.user.photo} />
            </UserImage>
            <UserName>{this.user.fullName}</UserName>
            <h3>{this.user.status}</h3>
            <UserDescription>{this.user.description}</UserDescription>
          </User>
        </Container>
      </Layout>
    );
  }
}
