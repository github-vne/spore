import 'globalCss.css';
import { Auth, Chat, Components, Dictionary, Landing, Main, NotFound, Posts, Settings, Tasks, Users } from 'pages';
import React, { Suspense } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { Inject } from 'typescript-ioc';
import { MainRouter } from './MainRouter';
import PrivateRouter from './PrivateRouter';

export default class AppRouter extends React.PureComponent {
  @Inject private mainRouter: MainRouter;

  render(): JSX.Element {
    return (
      <Router history={this.mainRouter.history}>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Switch>
            <PrivateRouter exact path={this.mainRouter.MAIN} component={Main} />
            {/* <Route exact path={this.mainRouter.LANDING} component={Landing} /> */}
            <Route exact path={this.mainRouter.AUTH} component={Auth} />
            <PrivateRouter exact path={this.mainRouter.SETTINGS} component={Settings} />
            <PrivateRouter exact path={this.mainRouter.USERS} component={Users} />
            <PrivateRouter exact path={this.mainRouter.COMPONENTS} component={Components} />
            <PrivateRouter exact path={this.mainRouter.CHAT} component={Chat} />
            <PrivateRouter exact path={this.mainRouter.POSTS} component={Posts} />
            <PrivateRouter exact path={this.mainRouter.DICTIONARY} component={Dictionary} />
            <PrivateRouter exact path={this.mainRouter.TASKS} component={Tasks} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}
