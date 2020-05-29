import { OAUTH, SHORT_SIDE_BAR } from 'const';
import { action, computed, observable } from 'mobx';
import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { PageLink, PageName, PageType } from 'routers/MainRouter';
import { MainStore, UserStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { Button, RawSvg } from 'ui-kit';
import { ButtonPanel, Container, IconButton, Navigation, NavItem } from './style';

const nav: Array<{ root: PageType; icon: string }> = [
  { root: PageType.MAIN, icon: 'main' },
  { root: PageType.POSTS, icon: 'news' },
  { root: PageType.USERS, icon: 'users' },
  { root: PageType.TASKS, icon: 'tasks' },
  { root: PageType.CHAT, icon: 'chat' },
  { root: PageType.DICTIONARY, icon: 'dictionary' },
  { root: PageType.SETTINGS, icon: 'settings' },
  { root: PageType.COMPONENTS, icon: 'components' }
];

@observer
export default class SideBar extends Component {
  @Inject mainStore: MainStore;
  @Inject userStore: UserStore;

  @observable private expand: boolean = !localStorage.getItem(SHORT_SIDE_BAR);

  @computed get currentPage(): PageType {
    return this.mainStore.currentPage;
  }

  @action.bound
  toggle(): void {
    this.expand = !this.expand;
    localStorage.setItem(SHORT_SIDE_BAR, this.expand ? '' : 'true');
  }

  @action.bound
  logout(): void {
    this.userStore.dropStore();
    localStorage.removeItem(OAUTH);
  }

  render(): JSX.Element {
    return (
      <Container expand={this.expand}>
        <div>
          <NavItem to={PageLink.LANDING}>
            <RawSvg icon="sideBar/logo" />
            <span>Spore</span>
          </NavItem>
          <Navigation>
            {nav.map((page, index) => (
              <NavItem key={index} to={PageLink[page.root]} selected={this.currentPage === PageType[page.root]}>
                <RawSvg icon={`sideBar/${page.icon}`} />
                <span>{PageName[page.root]}</span>
              </NavItem>
            ))}
          </Navigation>
        </div>
        {}
        {this.expand ? (
          <ButtonPanel>
            <Button onClick={this.toggle} icon="sideBar/expand">
              Свернуть
            </Button>
            <Button onClick={this.logout} icon="sideBar/logout">
              Выход
            </Button>
          </ButtonPanel>
        ) : (
          <ButtonPanel>
            <IconButton onClick={this.toggle}>
              <RawSvg icon="sideBar/expand" />
            </IconButton>
            <IconButton onClick={this.logout}>
              <RawSvg icon="sideBar/logout" />
            </IconButton>
          </ButtonPanel>
        )}
      </Container>
    );
  }
}
