import { computed } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import { PageName } from 'routers/MainRouter';
import { MainStore, UserStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { RawSvg } from 'ui-kit';
import { HomeIcon, Item, Menu, Nav, Panel, Wrapper } from './style';

@observer
export default class Header extends React.Component {
  @Inject private mainStore: MainStore;
  @Inject private userStore: UserStore;

  @computed private get pageName(): string {
    return PageName[this.mainStore.currentPage];
  }

  render(): JSX.Element {
    return (
      <Wrapper>
        <Nav>
          <li>
            <HomeIcon icon="header/house" />
          </li>
          <li>{this.pageName}</li>
        </Nav>
        <Panel>
          <Menu>
            <Item>
              <RawSvg icon="header/book" />
            </Item>
          </Menu>
        </Panel>
      </Wrapper>
    );
  }
}
