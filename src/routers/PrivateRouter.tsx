import { observer } from 'mobx-react';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { MainRouter } from './MainRouter';

@observer
export default class PrivateRouter extends Route {
  @Inject private userStore: UserStore;
  @Inject private mainRouter: MainRouter;

  render(): React.ReactNode {
    const { component, ...props } = this.props;
    const Component = component as React.ComponentType<any>;

    if (!this.userStore.user) return <Redirect to={this.mainRouter.AUTH} />;

    return <Component {...props} {...this.state} />;
  }
}
