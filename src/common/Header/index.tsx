import { observer } from 'mobx-react';
import React from 'react';
import { PageName } from 'routers/MainRouter';
import { MainStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { RawSvg } from 'ui-kit';
import { Nav, Notification, Wrapper } from './style';

@observer
export default class Header extends React.Component {
  @Inject private mainStore: MainStore;

  render(): JSX.Element {
    return (
      <Wrapper>
        <Nav>
          <li>
            <RawSvg icon="header/house" width={20} />
          </li>
          <li>{PageName[this.mainStore.currentPage]}</li>
        </Nav>
        <Notification>
          <RawSvg icon="header/bell" />
        </Notification>
      </Wrapper>
    );
  }
}
