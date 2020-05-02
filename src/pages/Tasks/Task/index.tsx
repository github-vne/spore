import { computed } from 'mobx';
import React from 'react';
import { Container, Day, Item, List } from './style';

export default class Task extends React.Component {
  @computed private get taskItem(): JSX.Element {
    return (
      <Item>
        <input type="checkbox" />
        <p>Description</p>
        <div>
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
      </Item>
    );
  }

  render(): JSX.Element {
    return (
      <Container>
        <Day>TODAY</Day>
        <List>
          {this.taskItem}
          {this.taskItem}
        </List>
      </Container>
    );
  }
}
