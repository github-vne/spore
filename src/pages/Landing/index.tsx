import { STYLED } from 'const';
import { observer } from 'mobx-react';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { PageType } from 'routers/MainRouter';
import { MainStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { Logo, Main, MainForm, SporeBtn, Tagline } from './style';

@observer
export default class PageHome extends React.Component<RouteComponentProps> {
  @Inject private mainStore: MainStore;

  componentDidMount(): void {
    this.mainStore.changeCurrentPage(PageType.LANDING);
  }

  render(): JSX.Element {
    return (
      <div>
        <Main>
          <MainForm>
            <Logo src={require('./image/logo.svg')} alt="logo" />
            <Tagline>Портфолио Front-end разработчика</Tagline>
            <SporeBtn href="/" styled={STYLED.PRIMARY}>
              Spore
            </SporeBtn>
          </MainForm>
        </Main>
        <img src={require('./image/line.svg')} alt="line" />
      </div>
    );
  }
}
