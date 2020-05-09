import { SIZE } from 'const';
import { PostEntity } from 'models';
import React from 'react';
import { Avatar, Input, RawSvg } from 'ui-kit';
import { ActionButton, ActionPanel, Container, CreateComment, Images, Statistics, Text } from './style';

export default ({ post }: { post: PostEntity }) => {
  const { text, title } = post;
  return (
    <Container>
      <div>
        <Avatar size={SIZE.SMALL} />
      </div>
      <h2>{title}</h2>
      <Text>{text}</Text>
      <Images
        src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/ba444a28739655.55cfb1b2ee941.jpg"
        alt="user_images"
      />
      <Statistics>
        <li>Лайки: 1</li>
        {/* <li>Просмотры: 3</li> */}
      </Statistics>
      <ActionPanel>
        <ActionButton>
          <RawSvg icon="post/comment" />
        </ActionButton>
        <ActionButton>
          <RawSvg icon="post/like" />
        </ActionButton>
      </ActionPanel>
      <CreateComment>
        <Avatar size={SIZE.EXTRA_SMALL} />
        <Input placeholder="Добавить комментарий..." />
      </CreateComment>
    </Container>
  );
};
