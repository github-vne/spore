import { PageLink, PageType } from 'const/pages';
import { observer } from 'mobx-react';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { MainStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { Comeback, Content, Image } from './style';

@observer
export default class PageNotFound extends React.Component<RouteComponentProps> {
  @Inject private mainStore: MainStore;

  componentDidMount(): void {
    this.mainStore.changeCurrentPage(PageType.NOT_FOUND);
  }

  render(): JSX.Element {
    return (
      <Content>
        <Comeback href={PageLink.MAIN}>На главную</Comeback>
        <Image src={require('./404.svg')} />
      </Content>
    );
  }
}
