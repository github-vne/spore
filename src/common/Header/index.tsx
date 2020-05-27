import { observer } from 'mobx-react';
import React from 'react';
import { PageName } from 'routers/MainRouter';
import { MainStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { RawSvg } from 'ui-kit';
import { Item, Menu, Nav, Panel, Wrapper } from './style';

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
        <Panel>
          <Menu>
            <Item>
              <RawSvg icon="header/bell" width={25} />
            </Item>
          </Menu>
        </Panel>
      </Wrapper>
    );
  }
}
