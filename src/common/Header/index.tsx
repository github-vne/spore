import { SIZE } from 'const';
import { computed } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { PageName } from 'routers/MainRouter';
import { MainStore, UserStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { Avatar, RawSvg } from 'ui-kit';
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
            {[1, 2].map(el => (
              <Item key={el}>
                <RawSvg icon="header/book" />
              </Item>
            ))}
          </Menu>
          <Link to="/auth">
            <Avatar size={SIZE.EXTRA_SMALL} image={this.userStore.user?.photo} />
          </Link>
        </Panel>
      </Wrapper>
    );
  }
}
