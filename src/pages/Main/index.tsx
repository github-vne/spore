import { Layout } from 'common';
import { Progress } from 'common/components';
import { chartExample1 } from 'const/charts';
import { observer } from 'mobx-react';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { PageName, PageType } from 'routers/Router';
import { MainStore } from 'stores';
import { Inject } from 'typescript-ioc';
import CardPanel from './CardPanel';
import Graph from './Graph';
import { PageIcon, PagesItem, ProgressPages, Wrapper } from './style';

const nav = [
  { root: PageType.MAIN, icon: 'main', value: 15 },
  { root: PageType.POSTS, icon: 'news', value: 49 },
  { root: PageType.USERS, icon: 'users', value: 10 },
  { root: PageType.CHAT, icon: 'chat', value: 60 },
  { root: PageType.TASKS, icon: 'tasks', value: 2 },
  { root: PageType.SETTINGS, icon: 'settings', value: 29 },
  { root: PageType.COMPONENTS, icon: 'components', value: 72 }
];

@observer
export default class PageMain extends React.Component<RouteComponentProps> {
  @Inject private mainStore: MainStore;

  componentDidMount(): void {
    this.mainStore.changeCurrentPage(PageType.MAIN);
  }

  render(): JSX.Element {
    return (
      <Layout>
        <CardPanel />
        <Wrapper>
          <ProgressPages title="Вёрстка">
            {nav.map((page, item) => (
              <PagesItem key={item}>
                <PageIcon icon={`sideBar/${page.icon}`} />
                <div>
                  <span>
                    {PageName[page.root]} ({page.value}%)
                  </span>
                  <Progress value={page.value} max={100} />
                </div>
              </PagesItem>
            ))}
          </ProgressPages>
          <Graph />
        </Wrapper>
      </Layout>
    );
  }
}
