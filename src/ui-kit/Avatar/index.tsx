import React from 'react';
import { Avatar, Img } from './style';
import { AvatarProps } from './types';

export default ({ image, size, className }: AvatarProps) => {
  return (
    <Avatar size={size} className={className}>
      <Img src={image || require('./default.png')} alt="avatar" />
    </Avatar>
  );
};
