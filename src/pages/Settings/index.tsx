import { Box, Layout } from 'common';
import { SIZE, STYLED } from 'const';
import { action, computed, observable } from 'mobx';
import { observer } from 'mobx-react';
import { AddPhoto } from 'modals';
import { UserEntity } from 'models';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { PageType } from 'routers/Router';
import { MainStore, UserStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { Avatar, Button, Input, Textarea } from 'ui-kit';
import { Container, EditProfile, Profile, UploadPhoto, User, UserDescription, UserImage, UserName } from './style';

@observer
export default class PageSettings extends React.Component<RouteComponentProps> {
  @Inject private mainStore: MainStore;
  @Inject private userStore: UserStore;

  @observable private tempUser: UserEntity = this.userStore.user;
  @observable private pending: boolean;

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
    } finally {
      this.pending = false;
    }
  }

  render(): JSX.Element {
    return (
      <Layout>
        <Container>
          <Profile>
            <Box
              title="Edit Profile"
              footer={
                <Button styled={STYLED.TERTIARY} onClick={this.updateUserInfo} pending={this.pending}>
                  Update
                </Button>
              }
            >
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
                  defaultValue={status}
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
            </Box>
            {/* <Box title="Change Password" footer={<Button styled={STYLED.TERTIARY}>Change</Button>}>
              <FormInput placeholder="password" label="Current Password" />
              <FormInput placeholder="password" label="New Password" />
              <FormInput placeholder="Confirm New Password" label="Confirm New Password" />
            </Box> */}
          </Profile>
          <User>
            <UserImage>
              <UploadPhoto
                // tslint:disable-next-line: ter-max-len
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Circle-icons-camera.svg/1024px-Circle-icons-camera.svg.png"
                onClick={this.openModal}
              />
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
