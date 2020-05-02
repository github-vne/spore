import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import React, { RefObject } from 'react';
import { FormControl } from 'ui-kit';
import { Label } from 'ui-kit/FormControl';
import uuid from 'uuid';
import { Input, InputBox } from './style';
import { InputProps } from './types';

@observer
export default class UiInput extends FormControl<string, InputProps> {
  @observable private inputFocused: boolean = false;
  private inputRef: RefObject<HTMLInputElement> = React.createRef<HTMLInputElement>();
  private id: string = this.props.id || uuid();

  @action
  resetValue(): void {
    this.innerValue = undefined;
  }

  @action.bound
  removeFocus(): void {
    this.inputRef.current?.blur();
  }

  @action.bound
  setFocus(): void {
    this.inputRef.current?.focus();
  }

  @action.bound
  private onBlur(e: React.FocusEvent<any>): void {
    this.inputFocused = false;
    this.props.onBlur && this.props.onBlur(e);
  }

  @action.bound
  private onFocus(e: React.FocusEvent<any>): void {
    this.inputFocused = true;
    this.props.onFocus && this.props.onFocus(e);
  }

  render(): JSX.Element {
    const { placeholder, disabled, label } = this.props;
    return (
      <InputBox className={this.props.className}>
        {label && (
          <Label htmlFor={this.id} focus={this.inputFocused}>
            {label}
          </Label>
        )}
        <Input
          id={this.id}
          name={name}
          ref={this.inputRef}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          disabled={disabled}
          placeholder={placeholder}
          onChange={this.onInnerChange}
          value={this.innerValue === undefined ? '' : this.innerValue}
        />
      </InputBox>
    );
  }
}
