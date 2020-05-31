import { PageName } from 'const/pages';
import { observer } from 'mobx-react';
import React from 'react';
import { MainStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { RawSvg } from 'ui-kit';
import { BreadCrumbs, Crumb, Notification, Wrapper } from './style';

@observer
export default class Header extends React.Component {
  @Inject private mainStore: MainStore;

  render(): JSX.Element {
    return (
      <Wrapper>
        <BreadCrumbs>
          <Crumb>
            <RawSvg icon="header/home" width={20} />
          </Crumb>
          <Crumb>{PageName[this.mainStore.currentPage]}</Crumb>
        </BreadCrumbs>
        <Notification>
          <RawSvg icon="header/bell" />
        </Notification>
      </Wrapper>
    );
  }
}
