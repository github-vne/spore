import { Box } from 'common';
import { STYLED } from 'const';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import { AuthEntity } from 'models';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { PageType } from 'routers/Router';
import { AccountStore, MainStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { Button, Input } from 'ui-kit';
import { Container, Tab, Tabs, Wrapper } from './style';

@observer
export default class PageAuth extends React.Component<RouteComponentProps> {
  @Inject private mainStore: MainStore;
  @Inject private accountStore: AccountStore;

  @observable private auth: AuthEntity = new AuthEntity();

  componentDidMount(): void {
    this.mainStore.changeCurrentPage(PageType.COMPONENTS);
  }

  @action.bound
  private async signUp(): Promise<void> {
    const res = await this.accountStore.signUp(this.auth);
    console.info(res);
  }

  @action.bound
  private async signIn(): Promise<void> {
    try {
      const res = await this.accountStore.signIn(this.auth);
      console.info('AUTH!', res);
    } catch {
      console.error('err');
    }
  }

  @action.bound
  onChange(name: string, value: string): void {
    this.auth[name] = value;
  }

  render(): JSX.Element {
    return (
      <Container>
        <Wrapper>
          <Tabs>
            <Tab selected>Вход</Tab>
            <Tab>Регистрация</Tab>
          </Tabs>
          <Box
            footer={
              <>
                <Button styled={STYLED.TERTIARY} onClick={this.signIn}>
                  Sign In
                </Button>
                <Button styled={STYLED.TERTIARY} onClick={this.signUp}>
                  Sign up
                </Button>
              </>
            }
          >
            <Input label="Login" placeholder="login" name="login" onChange={this.onChange} />
            <Input label="Password" placeholder="password" name="password" onChange={this.onChange} />
          </Box>
        </Wrapper>
      </Container>
    );
  }
}
