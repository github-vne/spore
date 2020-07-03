import { Layout } from 'common';
import { Progress } from 'common/components';
import { PageIcon, PageName, PageType, SideBarItems } from 'const/pages';
import { observer } from 'mobx-react';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { MainStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { RawSvg } from 'ui-kit';
import CardPanel from './CardPanel';
import Graph from './Graph';
import { PagesItem, ProgressPages, Wrapper } from './style';

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
          <ProgressPages title="Загруженность страниц">
            {SideBarItems.map((page, index) => (
              <PagesItem key={index}>
                <RawSvg icon={`pages/${PageIcon[page]}`} />
                <div>
                  <span>{PageName[page]}</span>
                  <Progress value={~~(Math.random() * 100)} max={100} />
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
