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

export const PageIcon = {
  [PageType.CHAT]: 'chat',
  [PageType.AUTH]: '',
  [PageType.USERS]: 'users',
  [PageType.TASKS]: 'tasks',
  [PageType.MAIN]: 'main',
  [PageType.POSTS]: 'posts',
  [PageType.LANDING]: '',
  [PageType.SETTINGS]: 'settings',
  [PageType.DICTIONARY]: 'dictionary',
  [PageType.COMPONENTS]: 'components',
  [PageType.NOT_FOUND]: ''
};

export const SideBarItems = [
  PageType.MAIN,
  PageType.POSTS,
  PageType.USERS,
  PageType.CHAT,
  PageType.TASKS,
  PageType.SETTINGS,
  PageType.COMPONENTS
];
