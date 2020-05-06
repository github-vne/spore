import { InfoCard, Layout } from 'common';
import { chartExample1 } from 'const/charts';
import { observer } from 'mobx-react';
import React from 'react';
import { Line } from 'react-chartjs-2';
import { RouteComponentProps } from 'react-router-dom';
import { PageName, PageType } from 'routers/Router';
import { MainStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { CardPanel, Flex, Graph, PageIcon, PagesItem, ProgressBar, ProgressPages } from './style';

const nav = [
  { root: PageType.HOME, icon: 'home', value: 15 },
  { root: PageType.POSTS, icon: 'news', value: 49 },
  { root: PageType.USERS, icon: 'users', value: 10 },
  { root: PageType.CHAT, icon: 'chat', value: 60 },
  { root: PageType.TASKS, icon: 'tasks', value: 2 },
  { root: PageType.SETTINGS, icon: 'settings', value: 29 },
  { root: PageType.COMPONENTS, icon: 'components', value: 72 }
];

const infoCards = [
  { title: 'Tesla', value: 243.23, percent: 5.2, lastUpdate: '2ч. назад' },
  { title: 'Apple', value: 361.25, percent: -6, lastUpdate: '2ч. назад' },
  { title: 'Yandex', value: 223.3, percent: 45.2, lastUpdate: '2ч. назад' },
  { title: 'Google', value: 343, percent: -4.2, lastUpdate: '2ч. назад' }
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
          {infoCards.map((card, index) => (
            <InfoCard card={card} key={index} />
          ))}
        </CardPanel>
        <Flex>
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
          <Graph>
            <Line data={chartExample1.data} options={chartExample1.options} />
          </Graph>
        </Flex>
      </Layout>
    );
  }
}
