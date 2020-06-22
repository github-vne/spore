import { OAUTH, SHORT_SIDE_BAR } from 'const/localStorage';
import { PageIcon, PageLink, PageName, PageType, SideBarItems } from 'const/pages';
import { action, computed, observable } from 'mobx';
import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { MainStore, UserStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { RawSvg } from 'ui-kit';
import { ActionButton, ButtonPanel, Container, Navigation, NavItem, ToggleIcon } from './style';

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
          <NavItem to={PageLink.MAIN}>
            <RawSvg icon="sideBar/logo" />
            <span>Spore</span>
          </NavItem>
          <Navigation>
            {SideBarItems.map(page => (
              <NavItem key={page} to={PageLink[page]} selected={this.currentPage === PageType[page]}>
                <RawSvg icon={`pages/${PageIcon[page]}`} />
                <span>{PageName[page]}</span>
              </NavItem>
            ))}
          </Navigation>
        </div>
        <ButtonPanel>
          <ActionButton onClick={this.toggle}>
            <ToggleIcon icon="sideBar/expand" expand={this.expand} />
            <span>Свернуть</span>
          </ActionButton>
          <ActionButton onClick={this.logout}>
            <RawSvg icon="sideBar/logout" />
            <span>Выход</span>
          </ActionButton>
        </ButtonPanel>
      </Container>
    );
  }
}
