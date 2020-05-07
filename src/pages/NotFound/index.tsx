import { observer } from 'mobx-react';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { PageLink, PageType } from 'routers/Router';
import { MainStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { Comeback, Content, Image } from './style';

@observer
export default class NotFound extends React.Component<RouteComponentProps> {
  @Inject private mainStore: MainStore;

  componentDidMount(): void {
    this.mainStore.changeCurrentPage(PageType.NOT_FOUND);
  }

  render(): JSX.Element {
    return (
      <Content>
        <Comeback href={PageLink.HOME}>На главную</Comeback>
        <Image src={require('./404.svg')} />
      </Content>
    );
  }
}
