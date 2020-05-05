import { SIZE } from 'const';
import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { PageName } from 'routers/Router';
import { MainStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { Avatar, RawSvg } from 'ui-kit';
import { Header, Item, Menu, Page, Panel } from './style';

@observer
export default class HeaderComponent extends Component {
  @Inject private mainStore: MainStore;

  render(): JSX.Element {
    return (
      <Header>
        <Page>Дом > {PageName[this.mainStore.currentPage]}</Page>
        <Panel>
          <Menu>
            {[1, 2, 3].map(el => (
              <Item key={el}>
                <RawSvg icon="header/message" />
              </Item>
            ))}
          </Menu>
          <Avatar size={SIZE.EXTRA_SMALL} />
        </Panel>
      </Header>
    );
  }
}
