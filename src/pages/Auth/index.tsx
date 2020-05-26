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
import { Box, Container, Footer, Input, Tab, Tabs, Wrapper } from './style';

@observer
export default class PageAuth extends React.Component<RouteComponentProps> {
  @Inject private mainStore: MainStore;
  @Inject private userStore: UserStore;

  @observable private auth: AuthEntity = new AuthEntity();
  @observable private tabs: Array<string> = ['Вход', 'Регистрация'];
  @observable private pending: boolean;
  @observable private status: string;
  @observable private tabIndex: number = 0;

  componentDidMount(): void {
    this.mainStore.changeCurrentPage(PageType.COMPONENTS);
  }

  @action.bound
  private changeTab(index: number): void {
    this.tabIndex = index;
  }

  @action.bound
  private async guest(): Promise<void> {
    const guestData = new AuthEntity();
    guestData.login = guestData.password = 'guest';
    await this.userStore.signIn(guestData);
  }

  @action.bound
  private showStatus(text: string): void {
    this.status = text;
    setTimeout(() => (this.status = ''), 2000);
  }

  @action.bound
  private checkData(): boolean {
    const { login, password } = this.auth;
    const hasData = login && password;
    if (!hasData) this.showStatus('Заполните поля');
    return !!hasData;
  }

  @action.bound
  private async signIn(): Promise<void> {
    if (!this.checkData()) return;
    this.pending = true;
    try {
      await this.userStore.signIn(this.auth);
      this.showStatus('Выполняется вход...');
    } catch (err) {
      console.error(err);
      this.showStatus('Ошибка');
    } finally {
      this.pending = false;
    }
  }

  @action.bound
  private async signUp(): Promise<void> {
    if (!this.checkData()) return;
    this.pending = true;
    try {
      await this.userStore.signUp(this.auth);
      this.showStatus('Профиль создан');
      this.auth = new AuthEntity();
    } catch (err) {
      console.error(err);
      this.showStatus('Ошибка');
    } finally {
      this.pending = false;
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
              <Footer>
                <div>
                  <Button onClick={this.guest} styled={STYLED.PRIMARY}>
                    Гость
                  </Button>
                  <span>{this.status}</span>
                </div>
                <Button
                  pending={this.pending}
                  styled={STYLED.TERTIARY}
                  onClick={this.tabIndex === 0 ? this.signIn : this.signUp}
                >
                  {this.tabIndex === 0 ? 'Вход' : 'Регистрация'}
                </Button>
              </Footer>
            }
          >
            <Input label="Логин" placeholder="login" name="login" onChange={this.onChange} value={this.auth.login} />
            <Input
              label="Пароль"
              type="password"
              placeholder="password"
              name="password"
              onChange={this.onChange}
              value={this.auth.password}
            />
          </Box>
        </Wrapper>
      </Container>
    );
  }
}
