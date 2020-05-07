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
  MAIN: string = PageLink.MAIN;
  DICTIONARY: string = PageLink.DICTIONARY;

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
  MAIN = 'MAIN',
  DICTIONARY = 'DICTIONARY',
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
  [PageType.TASKS]: '/tasks',
  [PageType.MAIN]: '/main',
  [PageType.DICTIONARY]: '/dictionary'
};

export const PageName = {
  [PageType.HOME]: 'О продукте',
  [PageType.AUTH]: 'Вход',
  [PageType.USERS]: 'Юзеры',
  [PageType.SETTINGS]: 'Настройки',
  [PageType.COMPONENTS]: 'Компоненты',
  [PageType.CHAT]: 'Чат',
  [PageType.POSTS]: 'Новости',
  [PageType.TASKS]: 'Задачи',
  [PageType.MAIN]: 'Главная',
  [PageType.DICTIONARY]: 'Словарь',
  [PageType.NOT_FOUND]: 'Страница не найдена'
};
