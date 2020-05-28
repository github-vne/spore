import { Layout } from 'common';
import { action } from 'mobx';
import { observer } from 'mobx-react';
import { NewPost } from 'modals';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { PageType } from 'routers/MainRouter';
import { MainStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { Button } from 'ui-kit';
import PostList from './PostList';
import { Container, Panel } from './style';

@observer
export default class PagePosts extends React.Component<RouteComponentProps> {
  @Inject private mainStore: MainStore;

  componentDidMount(): void {
    this.mainStore.changeCurrentPage(PageType.POSTS);
  }

  @action.bound
  private newPost = (): void => {
    NewPost.openModal();
  };

  render(): JSX.Element {
    return (
      <Layout>
        <Container>
          <Panel>
            <Button onClick={this.newPost}>Создать</Button>
          </Panel>
          <PostList />
          <Panel>Фильтры (в разработке)</Panel>
        </Container>
      </Layout>
    );
  }
}
