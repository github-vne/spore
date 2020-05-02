import { createBrowserHistory, History } from 'history';
import { Singleton } from 'typescript-ioc';

@Singleton
export default class Router {
  HOME: string = PageLink.HOME;
  AUTH: string = PageLink.AUTH;
  SETTINGS: string = PageLink.SETTINGS;
  USERS: string = PageLink.USERS;
  CHAT: string = PageLink.CHAT;
  POSTS: string = PageLink.POSTS;
  COMPONENTS: string = PageLink.COMPONENTS;
  TASKS: string = PageLink.TASKS;

  history: History = createBrowserHistory();
}

export enum PageType {
  HOME = 'HOME',
  AUTH = 'AUTH',
  USERS = 'USERS',
  SETTINGS = 'SETTINGS',
  COMPONENTS = 'COMPONENTS',
  CHAT = 'CHAT',
  POSTS = 'POSTS',
  TASKS = 'TASKS',
  NOT_FOUND = 'NOT_FOUND'
}

export const PageLink = {
  [PageType.HOME]: '/',
  [PageType.AUTH]: '/auth',
  [PageType.USERS]: '/users',
  [PageType.SETTINGS]: '/settings',
  [PageType.COMPONENTS]: '/components',
  [PageType.CHAT]: '/chat',
  [PageType.POSTS]: '/posts',
  [PageType.TASKS]: '/tasks'
};

export const PageName = {
  [PageType.HOME]: 'Главная',
  [PageType.AUTH]: 'Вход',
  [PageType.USERS]: 'Юзеры',
  [PageType.SETTINGS]: 'Настройки',
  [PageType.COMPONENTS]: 'Компоненты',
  [PageType.CHAT]: 'Чат',
  [PageType.POSTS]: 'Лента новостей',
  [PageType.TASKS]: 'Задачи',
  [PageType.NOT_FOUND]: 'Страница не найдена'
};
