import { computed } from 'mobx';
import React from 'react';
import RawSvg from '../RawSvg';
import { Avatar } from './style';
import { AvatarProps } from './types';

export default class UiAvatar extends React.Component<AvatarProps> {
  @computed private get content(): JSX.Element {
    const { image, initials } = this.props;
    if (initials) return <span>{initials}</span>;
    if (image) return <img src={image} alt="user" />;
    return <RawSvg icon="common/cat" />;
  }

  render(): JSX.Element {
    const { size, className } = this.props;
    return (
      <Avatar size={size} className={className}>
        {this.content}
      </Avatar>
    );
  }
}
