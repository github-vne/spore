import React from 'react';
import { Avatar, Img } from './style';
import { IAvatarProps } from './types';

export default ({ image, size, className }: IAvatarProps) => {
  return (
    <Avatar size={size} className={className}>
      <Img src={image || require('./default.png')} alt="avatar" />
    </Avatar>
  );
};
