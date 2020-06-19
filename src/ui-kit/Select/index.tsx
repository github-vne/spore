import { action, computed, observable } from 'mobx';
import { observer } from 'mobx-react';
import React, { RefObject } from 'react';
import ReactDOM from 'react-dom';
import { Arrow, List, Option, Select, Wrapper } from './style';
import { OptionProps, SelectProps } from './type';

@observer
export default class UiSelect extends React.Component<SelectProps> {
  @observable private openList: boolean = true;
  @observable private selected: OptionProps;

  private selectRef: RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>();
  private exampleList: Array<OptionProps> = [
    { title: 'name1', value: 'value' },
    { title: 'name2', value: 'value' },
    { title: 'name3', value: 'value' },
    { title: 'name4', value: 'value' },
    { title: 'name4', value: 'value' },
    { title: 'name4', value: 'value' },
    { title: 'name4', value: 'value' },
    { title: 'name4', value: 'value' },
    { title: 'name4', value: 'value' },
    { title: 'name4', value: 'value' },
    { title: 'name4', value: 'value' }
  ];

  componentDidMount(): void {
    window.addEventListener('click', this.closeList);
  }

  componentWillUnmount(): void {
    window.removeEventListener('click', this.closeList);
  }

  @action.bound
  private closeList = (e: any): void => {
    const domNode = ReactDOM.findDOMNode(this.selectRef.current);
    if (!domNode || !domNode.contains(e.target)) this.openList = false;
  };

  @action.bound
  private toggle(): void {
    this.openList = !this.openList;
  }

  @action.bound
  private selectOption(option: OptionProps): void {
    this.selected = option;
    this.openList = false;
  }

  @computed private get list(): JSX.Element {
    if (!this.openList || !this.exampleList.length) return;

    return (
      <List>
        {this.exampleList.map((el, i) => (
          <Option key={i} onClick={this.selectOption.bind(this, el)}>
            {el.title}
          </Option>
        ))}
      </List>
    );
  }

  render(): JSX.Element {
    return (
      <Wrapper ref={this.selectRef}>
        <Select onClick={this.toggle}>
          {this.selected ? this.selected.title : 'Выбранный элемент'}
          <Arrow icon="common/arrow_down" opened={this.openList} />
        </Select>
        {this.list}
      </Wrapper>
    );
  }
}
