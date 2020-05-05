import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import React, { RefObject } from 'react';
import { FormControl, RawSvg } from 'ui-kit';
import { Label } from 'ui-kit/FormControl';
import uuid from 'uuid';
import { InnerBtn, Input, InputBox, InputIcon, Wrapper } from './style';
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
    const { placeholder, disabled, label, icon, innerBtn, styled } = this.props;
    return (
      <Wrapper className={this.props.className}>
        {label && (
          <Label htmlFor={this.id} focus={this.inputFocused}>
            {label}
          </Label>
        )}
        <InputBox>
          {icon && <InputIcon icon={icon} focus={this.inputFocused} />}
          <Input
            id={this.id}
            styled={styled}
            name={name}
            ref={this.inputRef}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            disabled={disabled}
            placeholder={placeholder}
            onChange={this.onInnerChange}
            hasIcon={!!icon}
            hasInnerBtn={!!innerBtn}
            value={this.innerValue === undefined ? '' : this.innerValue}
          />
          {innerBtn ? (
            <InnerBtn onClick={innerBtn.onClick}>
              {typeof innerBtn.icon === 'object' ? innerBtn.icon : <RawSvg icon={innerBtn.icon || 'common/send'} />}
            </InnerBtn>
          ) : null}
        </InputBox>
      </Wrapper>
    );
  }
}
