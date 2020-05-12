import { Box, Layout } from 'common';
import { SIZE, STYLED } from 'const';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import { AddPhoto } from 'modals';
import { UserEntity } from 'models';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { PageType } from 'routers/Router';
import { MainStore, UserStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { Avatar, Button, Input, Textarea } from 'ui-kit';
import { Container, EditProfile, Profile, User, UserDescription, UserName, UserPosition } from './style';

@observer
export default class PageSettings extends React.Component<RouteComponentProps> {
  @Inject private mainStore: MainStore;
  @Inject private userStore: UserStore;

  @observable private tempUser: UserEntity = new UserEntity();
  @observable private pending: boolean;

  componentDidMount(): void {
    this.mainStore.changeCurrentPage(PageType.SETTINGS);
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
                  placeholder="Enter your first name..."
                />
                <Input
                  name="lastName"
                  onChange={this.onChange}
                  label="Last name"
                  placeholder="Enter your last name..."
                />
                <Input
                  name="middleName"
                  onChange={this.onChange}
                  label="Middle name"
                  placeholder="Enter your middle name..."
                />
                <Input name="status" onChange={this.onChange} label="Status" placeholder="Enter your status..." />
              </EditProfile>
              <Textarea rows={3} placeholder="Enter your description..." />
            </Box>
            {/* <Box title="Change Password" footer={<Button styled={STYLED.TERTIARY}>Change</Button>}>
              <FormInput placeholder="password" label="Current Password" />
              <FormInput placeholder="password" label="New Password" />
              <FormInput placeholder="Confirm New Password" label="Confirm New Password" />
            </Box> */}
          </Profile>
          <User>
            <Avatar size={SIZE.EXTRA_LARGE} />
            <UserName>Name</UserName>
            <UserPosition>Position</UserPosition>
            <UserDescription>
              Do not be scared of the truth because we need to restart the human foundation in truth And I love you like
              Kanye loves Kanye I love Rick Owens’ bed design but the back.
            </UserDescription>
          </User>
        </Container>
      </Layout>
    );
  }
}
