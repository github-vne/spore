import React from 'react';
import styled from 'styled-components';

interface RawSvgProps {
  html?: any;
  icon?: string;
  className?: string;
}

const RawSvg = styled.span`
  display: inline-block;
  line-height: 0;
  svg {
    height: inherit;
    width: inherit;
  }
`;

export default class UiRawSvg extends React.Component<RawSvgProps> {
  render(): JSX.Element {
    const { icon, html, className } = this.props;
    return (
      <RawSvg
        className={className}
        dangerouslySetInnerHTML={{ __html: icon ? require(`icons/${icon}.raw.svg`) : html }}
      />
    );
  }
}
