import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import { Avatar, Img } from './style';
import { AvatarProps } from './types';

@observer
export default class UiAvatar extends React.Component<AvatarProps> {
  @observable private err: boolean;

  @action.bound
  onError(): void {
    this.err = true;
  }

  render(): JSX.Element {
    const { image, size, className } = this.props;
    return (
      <Avatar size={size} className={className}>
        <Img
          alt="avatar"
          onError={this.onError}
          src={(this.err && require('./default.png')) || image || require('./default.png')}
        />
      </Avatar>
    );
  }
}
