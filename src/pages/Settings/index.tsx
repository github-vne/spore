import { Box, FormItem, Layout } from 'common';
import { SIZE, STYLED } from 'const';
import { observer } from 'mobx-react';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { PageType } from 'routers/Router';
import { MainStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { Avatar, Button, Input } from 'ui-kit';
import { ChangePhoto, Container, EditProfile, Profile, User, UserDescription, UserName, UserPosition } from './style';

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
              <FormItem title="Profile photo">
                <ChangePhoto>
                  <Avatar />
                  <Button>Add photo</Button>
                </ChangePhoto>
              </FormItem>
              <FormItem title="Name">
                <Input placeholder="Name" />
              </FormItem>
              <FormItem title="Email">
                <Input placeholder="Email" />
              </FormItem>
            </EditProfile>
            <Box title="Change Password" footer={<Button styled={STYLED.TERTIARY}>Change</Button>}>
              <FormItem title="Current Password">
                <Input placeholder="Current Password" />
              </FormItem>
              <FormItem title="New Password">
                <Input placeholder="New Password" />
              </FormItem>
              <FormItem title="Confirm New Password">
                <Input placeholder="Confirm New Password" />
              </FormItem>
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
