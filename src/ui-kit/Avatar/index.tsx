import React from 'react';
import { Avatar, Img } from './style';
import { AvatarProps } from './types';

export default ({ image, size, className }: AvatarProps) => {
  return (
    <Avatar size={size} className={className}>
      <Img
        src={image || 'https://demo.datingscript.com/assets/images/users/male_picture_none_p_2x.png'}
        alt="user_avatar"
      />
    </Avatar>
  );
};
