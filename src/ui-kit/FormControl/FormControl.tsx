import { action, observable } from 'mobx';
import React from 'react';
import { FormControlProps } from './types';

export abstract class FormControl<V, P extends FormControlProps<V>> extends React.Component<P> {
  @observable protected innerValue: V = this.props.defaultValue || this.props.value;
  @observable focused: boolean = false;

  componentDidUpdate(prevProps: P): void {
    if (prevProps.value !== this.props.value) {
      this.storeValue(this.props.value);
    }
  }

  @action
  storeValue(value: V): void {
    this.innerValue = value;
  }

  @action
  resetValue(): void {
    this.innerValue = undefined;
  }

  @action.bound
  onBlur(e: React.FocusEvent<any>): void {
    this.focused = false;
    this.props.onBlur && this.props.onBlur(e);
  }

  @action.bound
  onFocus(e: React.FocusEvent<any>): void {
    this.focused = true;
    this.props.onFocus && this.props.onFocus(e);
  }

  @action.bound
  protected onInnerChange(e: React.ChangeEvent<any>, innerValue?: V): void {
    e && e.stopPropagation && e.stopPropagation();
    const value = innerValue !== undefined ? innerValue : e && e.target.value;
    if (this.innerValue === value && e) return;
    this.storeValue(value);
    this.props.onChange && this.props.onChange(this.props.name, value);
  }
}
