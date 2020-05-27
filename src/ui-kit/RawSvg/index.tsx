import React from 'react';
import styled, { css } from 'styled-components';

interface RawSvgProps {
  html?: any;
  icon?: string;
  width?: number;
  className?: string;
}

const RawSvg = styled.span`
  display: inline-block;
  line-height: 0;
  svg {
    height: inherit;
    width: inherit;
  }
  ${({ width }: { width: number }) =>
    css`
      width: ${width}px;
    `}
`;

export default class UiRawSvg extends React.Component<RawSvgProps> {
  render(): JSX.Element {
    const { icon, html, width, className } = this.props;
    return (
      <RawSvg
        width={width}
        className={className}
        dangerouslySetInnerHTML={{ __html: icon ? require(`icons/${icon}.raw.svg`) : html }}
      />
    );
  }
}
