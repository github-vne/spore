import 'globalCss.css';
import { Auth, Chat, Components, Dictionary, Home, Main, NotFound, Posts, Settings, Tasks, Users } from 'pages';
import React, { Suspense } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { Inject } from 'typescript-ioc';
import MainRouter from './Router';

export default class AppRouter extends React.PureComponent {
  @Inject private mainRouter: MainRouter;

  render(): JSX.Element {
    return (
      <Router history={this.mainRouter.history}>
        <Suspense fallback={<h2>Is loading...</h2>}>
          <Switch>
            <Route exact path={this.mainRouter.MAIN} component={Main} />
            <Route exact path={this.mainRouter.HOME} component={Home} />
            <Route exact path={this.mainRouter.AUTH} component={Auth} />
            <Route exact path={this.mainRouter.SETTINGS} component={Settings} />
            <Route exact path={this.mainRouter.USERS} component={Users} />
            <Route exact path={this.mainRouter.COMPONENTS} component={Components} />
            <Route exact path={this.mainRouter.CHAT} component={Chat} />
            <Route exact path={this.mainRouter.POSTS} component={Posts} />
            <Route exact path={this.mainRouter.DICTIONARY} component={Dictionary} />
            <Route exact path={this.mainRouter.TASKS} component={Tasks} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}
