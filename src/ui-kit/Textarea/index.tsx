import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import React, { RefObject } from 'react';
import { FormControl } from 'ui-kit';
import { Label } from 'ui-kit/FormControl';
import uuid from 'uuid';
import { Textarea, TextareaBox } from './style';
import { TextareaProps } from './types';

@observer
export default class UiTextarea extends FormControl<string, TextareaProps> {
  @observable private textareaFocused: boolean = false;
  private textareaRef: RefObject<HTMLTextAreaElement> = React.createRef<HTMLTextAreaElement>();
  private id: string = this.props.id || uuid();

  @action
  resetValue(): void {
    this.innerValue = undefined;
  }

  @action.bound
  removeFocus(): void {
    this.textareaRef.current?.blur();
  }

  @action.bound
  setFocus(): void {
    this.textareaRef.current?.focus();
  }

  @action.bound
  private onBlur(e: React.FocusEvent<any>): void {
    this.textareaFocused = false;
    this.props.onBlur && this.props.onBlur(e);
  }

  @action.bound
  private onFocus(e: React.FocusEvent<any>): void {
    this.textareaFocused = true;
    this.props.onFocus && this.props.onFocus(e);
  }

  render(): JSX.Element {
    const { placeholder, disabled, label } = this.props;
    return (
      <TextareaBox className={this.props.className}>
        {label && (
          <Label htmlFor={this.id} focus={this.textareaFocused}>
            {label}
          </Label>
        )}
        <Textarea
          id={this.id}
          name={name}
          ref={this.textareaRef}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          disabled={disabled}
          placeholder={placeholder}
          onChange={this.onInnerChange}
          value={this.innerValue === undefined ? '' : this.innerValue}
        />
      </TextareaBox>
    );
  }
}
