import { action } from 'mobx';
import { observer } from 'mobx-react';
import React, { RefObject } from 'react';
import styled from 'styled-components';
import { FormControl, InputProps, RawSvg } from 'ui-kit';
import { Icon, InnerBtn, Label, Relative, styleEl, Wrapper } from 'ui-kit/FormControl';
import uuid from 'uuid';

export const Input = styled.input`
  ${styleEl}
`;

@observer
export default class UiInput extends FormControl<string, InputProps> {
  private inputRef: RefObject<HTMLInputElement> = React.createRef<HTMLInputElement>();
  private id: string = this.props.id || uuid();

  @action.bound
  removeFocus(): void {
    this.inputRef.current?.blur();
  }

  @action.bound
  setFocus(): void {
    this.inputRef.current?.focus();
  }

  render(): JSX.Element {
    const { placeholder, disabled, label, innerBtn, styled, type } = this.props;
    const icon = type === 'search' ? 'common/search' : this.props.icon;
    return (
      <Wrapper className={this.props.className}>
        {label && (
          <Label htmlFor={this.id} focus={this.focused}>
            {label}
          </Label>
        )}
        <Relative>
          {icon && <Icon icon={icon} focus={this.focused} />}
          <Input
            name={name}
            type={type}
            id={this.id}
            styled={styled}
            hasIcon={!!icon}
            ref={this.inputRef}
            disabled={disabled}
            onBlur={this.onBlur}
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
