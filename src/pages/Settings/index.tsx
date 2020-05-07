import { Box, Layout } from 'common';
import { SIZE, STYLED } from 'const';
import { observer } from 'mobx-react';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { PageType } from 'routers/Router';
import { MainStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { Avatar, Button } from 'ui-kit';
import { Container, EditProfile, FormInput, Profile, User, UserDescription, UserName, UserPosition } from './style';

@observer
export default class PageSettings extends React.Component<RouteComponentProps> {
  @Inject private mainStore: MainStore;

  componentDidMount(): void {
    this.mainStore.changeCurrentPage(PageType.SETTINGS);
  }

  render(): JSX.Element {
    return (
      <Layout>
        <Container>
          <Profile>
            <EditProfile title="Edit Profile" footer={<Button styled={STYLED.TERTIARY}>Update</Button>}>
              <FormInput placeholder="name" label="Name" />
              <FormInput placeholder="email" label="Email" />
            </EditProfile>
            <Box title="Change Password" footer={<Button styled={STYLED.TERTIARY}>Change</Button>}>
              <FormInput placeholder="password" label="Current Password" />
              <FormInput placeholder="password" label="New Password" />
              <FormInput placeholder="Confirm New Password" label="Confirm New Password" />
            </Box>
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
