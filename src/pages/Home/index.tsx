import { Layout } from 'common';
import { observer } from 'mobx-react';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { PageName, PageType } from 'routers/Router';
import { MainStore } from 'stores';
import { Inject } from 'typescript-ioc';
import InfoCard from './InfoCard';
import { CardPanel, PageIcon, PagesItem, ProgressBar, ProgressPages } from './style';

const nav = [
  { root: PageType.HOME, icon: 'home', value: 15 },
  { root: PageType.POSTS, icon: 'news', value: 49 },
  { root: PageType.USERS, icon: 'users', value: 10 },
  { root: PageType.CHAT, icon: 'chat', value: 60 },
  { root: PageType.TASKS, icon: 'tasks', value: 2 },
  { root: PageType.SETTINGS, icon: 'settings', value: 29 },
  { root: PageType.COMPONENTS, icon: 'components', value: 72 }
];
@observer
export default class PageHome extends React.Component<RouteComponentProps> {
  @Inject private mainStore: MainStore;

  componentDidMount(): void {
    this.mainStore.changeCurrentPage(PageType.HOME);
  }

  render(): JSX.Element {
    return (
      <Layout>
        <CardPanel>
          <InfoCard value={0.2} />
          <InfoCard value={12} />
          <InfoCard value={-6} />
          <InfoCard value={3.5} />
        </CardPanel>
        <ProgressPages title="Вёрстка">
          {nav.map((page, item) => (
            <PagesItem key={item}>
              <PageIcon icon={`sideBar/${page.icon}`} />
              <div>
                <span>
                  {PageName[page.root]} ({page.value}%)
                </span>
                <ProgressBar value={page.value} max={100} />
              </div>
            </PagesItem>
          ))}
        </ProgressPages>
      </Layout>
    );
  }
}
