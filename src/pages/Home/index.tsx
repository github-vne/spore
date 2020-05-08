import { observer } from 'mobx-react';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { PageType } from 'routers/Router';
import { MainStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { Button } from 'ui-kit';
import { Logo, Main, MainForm, Tagline } from './style';

@observer
export default class PageHome extends React.Component<RouteComponentProps> {
  @Inject private mainStore: MainStore;

  componentDidMount(): void {
    this.mainStore.changeCurrentPage(PageType.MAIN);
  }

  render(): JSX.Element {
    return (
      <div>
        <Main>
          <MainForm>
            <Logo src={require('./image/logo.svg')} alt="" />
            <Tagline>Портфолио Front-end разработчика</Tagline>
            <Button>Начать</Button>
            <span>Другие проекты</span>
            <div>
              <div>gitHub</div>
            </div>
          </MainForm>
        </Main>
        <img src={require('./image/line.svg')} alt="" />
      </div>
    );
  }
}
