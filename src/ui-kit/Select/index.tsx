import { action, computed, observable } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import { Arrow, List, Option, Select, Wrapper } from './style';

@observer
export default class UiSelect extends React.Component {
  @observable private hiddenList: boolean = true;

  @action.bound
  private toggle(): void {
    this.hiddenList = !this.hiddenList;
  }

  @computed private get list(): JSX.Element {
    if (!this.hiddenList) return;

    return (
      <List>
        <Option>123</Option>
        <Option>123</Option>
        <Option>123</Option>
        <Option>123</Option>
      </List>
    );
  }

  render(): JSX.Element {
    return (
      <Wrapper>
        <Select onClick={this.toggle}>
          Выбранный элемент
          <Arrow icon="common/arrow_down" opened={this.hiddenList} />
        </Select>
        {this.list}
      </Wrapper>
    );
  }
}
