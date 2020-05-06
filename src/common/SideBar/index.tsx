import { SHORT_SIDE_BAR } from 'const';
import { action, computed, observable } from 'mobx';
import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { PageLink, PageName, PageType } from 'routers/Router';
import { MainStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { Container, Logo, Navigation, NavItem, RawSvg, Toggle } from './style';

const nav = [
  { root: PageType.HOME, icon: 'home' },
  { root: PageType.POSTS, icon: 'news' },
  { root: PageType.USERS, icon: 'users' },
  { root: PageType.CHAT, icon: 'chat' },
  { root: PageType.TASKS, icon: 'tasks' },
  { root: PageType.SETTINGS, icon: 'settings' },
  { root: PageType.COMPONENTS, icon: 'components' }
];

@observer
export default class SideBar extends Component {
  @Inject mainStore: MainStore;
  @observable private expand: boolean = !localStorage.getItem(SHORT_SIDE_BAR);

  @computed get currentPage(): PageType {
    return this.mainStore.currentPage;
  }

  @action.bound
  toggle(): void {
    this.expand = !this.expand;
    localStorage.setItem(SHORT_SIDE_BAR, this.expand ? '' : 'true');
  }

  render(): JSX.Element {
    return (
      <Container expand={this.expand}>
        <Logo>
          <RawSvg icon="sideBar/logo" />
        </Logo>
        <Navigation>
          {nav.map((page, index) => (
            <NavItem
              to={PageLink[page.root]}
              key={index}
              selected={this.currentPage ? this.currentPage === PageType[page.root] : undefined}
            >
              <RawSvg icon={`sideBar/${page.icon}`} />
              <span>{PageName[page.root]}</span>
            </NavItem>
          ))}
        </Navigation>
        <Toggle onClick={this.toggle} expand={this.expand}>
          <RawSvg icon="sideBar/expand" />
        </Toggle>
      </Container>
    );
  }
}
