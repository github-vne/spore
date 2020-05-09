import { Layout } from 'common';
import { action, computed } from 'mobx';
import { observer } from 'mobx-react';
import { NewPost } from 'modals';
import { PostEntity } from 'models';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { PageType } from 'routers/Router';
import { MainStore, PostStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { Button } from 'ui-kit';
import Item from './Item';
import { Container, Panel, PostList } from './style';

@observer
export default class PagePosts extends React.Component<RouteComponentProps> {
  @Inject private mainStore: MainStore;
  @Inject private postStore: PostStore;

  componentDidMount(): void {
    this.mainStore.changeCurrentPage(PageType.POSTS);
  }

  @action.bound
  private newPost = (): void => {
    NewPost.openModal();
  };

  @computed private get postList(): Array<PostEntity> {
    return this.postStore.postList.get();
  }

  render(): JSX.Element {
    return (
      <Layout>
        <Container>
          <Panel>
            <Button onClick={this.newPost}>Создать</Button>
          </Panel>
          <PostList>
            {this.postList.map((post, index) => (
              <Item key={index} post={post} />
            ))}
          </PostList>
          <Panel>Фильтры</Panel>
        </Container>
      </Layout>
    );
  }
}
