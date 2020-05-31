import { PageLink } from 'const/pages';
import { createBrowserHistory, History } from 'history';
import { Singleton } from 'typescript-ioc';

@Singleton
export class MainRouter {
  AUTH: string = PageLink.AUTH;
  CHAT: string = PageLink.CHAT;
  MAIN: string = PageLink.MAIN;
  USERS: string = PageLink.USERS;
  POSTS: string = PageLink.POSTS;
  TASKS: string = PageLink.TASKS;
  LANDING: string = PageLink.LANDING;
  SETTINGS: string = PageLink.SETTINGS;
  COMPONENTS: string = PageLink.COMPONENTS;
  DICTIONARY: string = PageLink.DICTIONARY;

  history: History = createBrowserHistory();

  navigate(url: string): void {
    const method = this.history.push;
    method(url);
  }
}
