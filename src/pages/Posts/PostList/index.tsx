import { SIZE } from 'const';
import { observer } from 'mobx-react';
import React from 'react';
import { PostStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { Avatar, Loader, RawSvg } from 'ui-kit';
import { DtFormatter } from 'utils/formatters';
import { ActionButton, ActionPanel, Date, Images, List, Owner, Post, Status, Text, Title } from './style';

@observer
export default class PostList extends React.Component {
  @Inject private postStore: PostStore;

  render(): JSX.Element {
    const posts = this.postStore.postList.get();

    if (this.postStore.postList.busy) return <Loader fullScreen />;

    if (!posts.length) return <Status>Список пуст, создайте новый пост</Status>;

    return (
      <List>
        {posts.map(post => (
          <Post key={post.id}>
            <Owner>
              <Avatar image={post.owner.photo} size={SIZE.SMALL} />
              <p>{post.owner.fullName}</p>
            </Owner>
            <Title>{post.title}</Title>
            {post.photo && <Images src={post.photo} alt="user_images" />}
            <Text>{post.text}</Text>
            <ActionPanel>
              <Date>{DtFormatter.formatDateTime(post.date)}</Date>
              <ActionButton onClick={this.postStore.likePost.bind(this, post.id)} active={post.likes.userLikes}>
                <RawSvg icon="post/like" width={24} />
                <span>{post.likes.count}</span>
              </ActionButton>
            </ActionPanel>
          </Post>
        ))}
      </List>
    );
  }
}
