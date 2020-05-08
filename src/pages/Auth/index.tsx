import { Box } from 'common';
import { STYLED } from 'const';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { PageLink, PageType } from 'routers/Router';
import { AccountStore, MainStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { Button, Input } from 'ui-kit';
import { Container, Footer } from './style';

@observer
export default class PageAuth extends React.Component<RouteComponentProps> {
  @Inject private mainStore: MainStore;
  @Inject private accountStore: AccountStore;
  @observable private login: string;
  @observable private password: string;

  componentDidMount(): void {
    this.mainStore.changeCurrentPage(PageType.COMPONENTS);
  }

  @action.bound
  private async signUp(): Promise<void> {
    try {
      const res = await this.accountStore.signUp(this.login, this.password);
      console.info(res);
    } catch {
      console.error('ERR');
    }
  }

  @action.bound
  onChange(name: string, value: string): void {
    this[name] = value;
  }

  @action.bound
  send(): void {
    fetch('http://cuddly-parakeet.herokuapp.com/api/v1/users', {
      method: 'POST',
      body: JSON.stringify({ login: 'qwerty', password: '123123123' }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => console.info(res));
  }

  render(): JSX.Element {
    return (
      <Container>
        <div>
          <Link to={PageLink.HOME}>
            <Button styled={STYLED.TERTIARY}>В сервис</Button>
          </Link>
        </div>
        <Box
          title="Регистрация"
          footer={
            <Button styled={STYLED.TERTIARY} onClick={this.signUp}>
              Sign up
            </Button>
          }
        >
          <Input placeholder="login" name="login" onChange={this.onChange} />
          <Input placeholder="password" name="password" onChange={this.onChange} />
        </Box>
        <Footer>2020 by Vasenkin</Footer>
      </Container>
    );
  }
}
