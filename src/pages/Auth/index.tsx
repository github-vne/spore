import { STYLED } from 'const';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import { AuthEntity } from 'models';
import React from 'react';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { PageType } from 'routers/MainRouter';
import { MainStore, UserStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { Button } from 'ui-kit';
import { Box, Container, Input, Tab, Tabs, Wrapper } from './style';

@observer
export default class PageAuth extends React.Component<RouteComponentProps> {
  @Inject private mainStore: MainStore;
  @Inject private userStore: UserStore;

  @observable private auth: AuthEntity = new AuthEntity();
  @observable private tabs: Array<string> = ['Вход', 'Регистрация'];
  @observable private tabIndex: number = 0;

  componentDidMount(): void {
    this.mainStore.changeCurrentPage(PageType.COMPONENTS);
  }

  @action.bound
  private changeTab(index: number): void {
    this.tabIndex = index;
  }

  @action.bound
  private async signUp(): Promise<void> {
    const res = await this.userStore.signUp(this.auth);
  }

  @action.bound
  private async signIn(): Promise<void> {
    try {
      await this.userStore.signIn(this.auth);
    } catch {
      console.error('err');
    }
  }

  @action.bound
  onChange(name: string, value: string): void {
    this.auth[name] = value;
  }

  render(): JSX.Element {
    if (this.userStore.user) return <Redirect to="/" />;

    return (
      <Container>
        <Wrapper>
          <Tabs>
            {this.tabs.map((el, i) => (
              <Tab onClick={this.changeTab.bind(this, i)} selected={this.tabIndex === i} key={i}>
                {el}
              </Tab>
            ))}
          </Tabs>
          <Box
            footer={
              <>
                <Button href="/">main</Button>
                {this.tabIndex === 0 ? (
                  <Button styled={STYLED.TERTIARY} onClick={this.signIn}>
                    Вход
                  </Button>
                ) : (
                  <Button styled={STYLED.TERTIARY} onClick={this.signUp}>
                    Регистрация
                  </Button>
                )}
              </>
            }
          >
            <Input label="Логин" placeholder="egor_krid" name="login" onChange={this.onChange} />
            <Input label="Пароль" type="password" placeholder="ilovePenis" name="password" onChange={this.onChange} />
          </Box>
        </Wrapper>
      </Container>
    );
  }
}
