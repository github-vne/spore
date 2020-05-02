import { SIZE } from 'const';
import React from 'react';
import { Avatar, Input, RawSvg } from 'ui-kit';
import { ActionButton, ActionPanel, Container, CreateComment, Images, Statistics, Text } from './style';

export default class PostItem extends React.Component {
  render(): JSX.Element {
    return (
      <Container>
        <div>
          <Avatar size={SIZE.SMALL} />
        </div>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sequi nulla voluptatibus consequatur voluptatum,
          eaque repudiandae repellendus placeat modi atque voluptate molestias nihil aliquid optio neque ut
          necessitatibus sit dicta!
        </Text>
        <Images
          src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/ba444a28739655.55cfb1b2ee941.jpg"
          alt="user_images"
        />
        <Statistics>
          <li>Лайки: 1</li>
          <li>Комментарии: 2</li>
          <li>Просмотры: 3</li>
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
  }
}