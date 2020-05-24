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
    console.info('URL = ', url);
    const method = this.history.replace;
    method(url);
  }
}

export enum PageType {
  AUTH = 'AUTH',
  CHAT = 'CHAT',
  MAIN = 'MAIN',
  USERS = 'USERS',
  POSTS = 'POSTS',
  TASKS = 'TASKS',
  LANDING = 'LANDING',
  SETTINGS = 'SETTINGS',
  NOT_FOUND = 'NOT_FOUND',
  DICTIONARY = 'DICTIONARY',
  COMPONENTS = 'COMPONENTS'
}

export const PageLink = {
  [PageType.MAIN]: '/',
  [PageType.AUTH]: '/auth',
  [PageType.CHAT]: '/chat',
  [PageType.USERS]: '/users',
  [PageType.POSTS]: '/posts',
  [PageType.TASKS]: '/tasks',
  [PageType.LANDING]: '/landing',
  [PageType.SETTINGS]: '/settings',
  [PageType.COMPONENTS]: '/components',
  [PageType.DICTIONARY]: '/dictionary'
};

export const PageName = {
  [PageType.CHAT]: 'Чат',
  [PageType.AUTH]: 'Вход',
  [PageType.USERS]: 'Юзеры',
  [PageType.TASKS]: 'Задачи',
  [PageType.MAIN]: 'Главная',
  [PageType.POSTS]: 'Новости',
  [PageType.LANDING]: 'О продукте',
  [PageType.SETTINGS]: 'Настройки',
  [PageType.DICTIONARY]: 'Словарь',
  [PageType.COMPONENTS]: 'Компоненты',
  [PageType.NOT_FOUND]: 'Страница не найдена'
};
