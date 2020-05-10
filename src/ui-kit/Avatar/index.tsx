import React from 'react';
import RawSvg from '../RawSvg';
import { Avatar } from './style';
import { AvatarProps } from './types';

export default ({ image, size, className }: AvatarProps) => {
  return (
    <Avatar size={size} className={className}>
      {image ? <img src={image} alt="user_avatar" /> : <RawSvg icon="common/cat" />}
    </Avatar>
  );
};
