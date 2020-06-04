import autosize from 'autosize';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import React, { RefObject } from 'react';
import styled from 'styled-components';
import { FormControl, InputProps, RawSvg } from 'ui-kit';
import { Icon, InnerBtn, Label, Relative, styleEl, Wrapper } from 'ui-kit/FormControl';
import uuid from 'uuid';

export const Textarea = styled.textarea`
  ${styleEl};
  &::-webkit-scrollbar {
    width: 0;
  }
  overflow: auto;
`;

@observer
export default class UiTextarea extends FormControl<string, InputProps> {
  @observable private autoSize: boolean = true;
  private textareaRef: RefObject<HTMLTextAreaElement> = React.createRef<HTMLTextAreaElement>();
  private id: string = this.props.id || uuid();

  componentDidMount(): void {
    this.autoSize && autosize(this.textareaRef.current);
  }

  componentDidUpdate(): void {
    this.autoSize && autosize.update(this.textareaRef.current);
    if (!this.props.value) this.resetValue();
  }

  @action.bound
  removeFocus(): void {
    this.textareaRef.current?.blur();
  }

  @action.bound
  setFocus(): void {
    this.textareaRef.current?.focus();
  }

  render(): JSX.Element {
    const { placeholder, disabled, label, icon, innerBtn, styled, rows } = this.props;
    return (
      <Wrapper className={this.props.className}>
        {label && (
          <Label htmlFor={this.id} focus={this.focused}>
            {label}
          </Label>
        )}
        <Relative>
          {icon && <Icon icon={icon} focus={this.focused} />}
          <Textarea
            name={name}
            id={this.id}
            styled={styled}
            rows={rows || 1}
            hasIcon={!!icon}
            disabled={disabled}
            onBlur={this.onBlur}
            ref={this.textareaRef}
            onFocus={this.onFocus}
            hasInnerBtn={!!innerBtn}
            placeholder={placeholder}
            onChange={this.onInnerChange}
            value={this.innerValue === undefined ? '' : this.innerValue}
          />
          {innerBtn ? (
            <InnerBtn onClick={innerBtn.onClick}>
              {typeof innerBtn.icon === 'object' ? innerBtn.icon : <RawSvg icon={innerBtn.icon || 'common/send'} />}
            </InnerBtn>
          ) : null}
        </Relative>
      </Wrapper>
    );
  }
}
