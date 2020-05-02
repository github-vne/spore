import { Layout } from 'common';
import { action } from 'mobx';
import { observer } from 'mobx-react';
import { CreatePost } from 'modals';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { PageType } from 'routers/Router';
import { MainStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { Button } from 'ui-kit';
import Item from './Item';
import { Container, Panel, PostList } from './style';

@observer
export default class PagePosts extends React.Component<RouteComponentProps> {
  @Inject private mainStore: MainStore;
  private array: Array<any> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  componentDidMount(): void {
    this.mainStore.changeCurrentPage(PageType.POSTS);
    CreatePost.openModal();
  }

  @action.bound
  private createPost = (): void => {
    CreatePost.openModal();
  };

  render(): JSX.Element {
    return (
      <Layout>
        <Container>
          <Panel>
            <Button onClick={this.createPost}>Создать</Button>
          </Panel>
          <PostList>
            {this.array.map(el => (
              <Item key={el} />
            ))}
          </PostList>
          <Panel>Фильтры</Panel>
        </Container>
      </Layout>
    );
  }
}
