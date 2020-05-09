import autosize from 'autosize';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import React, { RefObject } from 'react';
import { FormControl, RawSvg } from 'ui-kit';
import uuid from 'uuid';
import { InnerBtn, Textarea, TextareaBox } from './style';
import { TextareaProps } from './types';

@observer
export default class UiTextarea extends FormControl<string, TextareaProps> {
  @observable private autoSize: boolean = true;
  private textareaRef: RefObject<HTMLTextAreaElement> = React.createRef<HTMLTextAreaElement>();
  private id: string = this.props.id || uuid();

  componentDidMount(): void {
    this.autoSize && autosize(this.textareaRef.current);
  }

  componentDidUpdate(): void {
    this.autoSize && autosize.update(this.textareaRef.current);
  }

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
    this.props.onBlur && this.props.onBlur(e);
  }

  @action.bound
  private onFocus(e: React.FocusEvent<any>): void {
    this.props.onFocus && this.props.onFocus(e);
  }

  render(): JSX.Element {
    const { placeholder, disabled, innerBtn, styled, rows, className } = this.props;
    return (
      <TextareaBox className={className}>
        <Textarea
          id={this.id}
          rows={rows || 1}
          styled={styled}
          name={name}
          ref={this.textareaRef}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          disabled={disabled}
          placeholder={placeholder}
          onChange={this.onInnerChange}
          value={this.innerValue === undefined ? '' : this.innerValue}
          hasInnerBtn={!!innerBtn}
        />
        {innerBtn ? (
          <InnerBtn onClick={innerBtn.onClick}>
            {typeof innerBtn.icon === 'object' ? innerBtn.icon : <RawSvg icon={innerBtn.icon || 'common/send'} />}
          </InnerBtn>
        ) : null}
      </TextareaBox>
    );
  }
}
