import { SIZE } from 'const';
import { computed } from 'mobx';
import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { PageName } from 'routers/Router';
import { MainStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { Avatar, RawSvg } from 'ui-kit';
import { CurrentPage, Header, HomeIcon, Item, Menu, Nav, Panel } from './style';

@observer
export default class HeaderComponent extends Component {
  @Inject private mainStore: MainStore;

  @computed private get pageName(): string {
    return PageName[this.mainStore.currentPage];
  }

  render(): JSX.Element {
    return (
      <Header>
        <CurrentPage>{this.pageName}</CurrentPage>
        <Nav>
          <li>
            <HomeIcon icon="header/home" />
          </li>
          <li>{this.pageName}</li>
        </Nav>
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
