import { SIZE } from 'const';
import { PostEntity } from 'models';
import React from 'react';
import { Avatar, Input, RawSvg } from 'ui-kit';
import { ActionButton, ActionPanel, Container, CreateComment, Images, Owner, Title } from './style';

export default ({ post }: { post: PostEntity }) => {
  const { text, title, photo, owner } = post;
  return (
    <Container>
      <Owner>
        <Avatar image={owner.photo} size={SIZE.SMALL} />
        <p>{owner.fullName}</p>
      </Owner>
      <Title>{title}</Title>
      <Images src={photo} alt="user_images" />
      <p>{text}</p>
      <ActionPanel>
        <ActionButton>
          <RawSvg icon="post/comment" />
          <span>1</span>
        </ActionButton>
        <ActionButton>
          <RawSvg icon="post/like" />
          <span>1</span>
        </ActionButton>
      </ActionPanel>
      <CreateComment>
        <Avatar size={SIZE.EXTRA_SMALL} />
        <Input placeholder="Добавить комментарий..." />
      </CreateComment>
    </Container>
  );
};
