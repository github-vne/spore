import React from 'react';
import { FullScreen, Loader } from './style';
import { LoaderProps } from './types';

export default class UiLoader extends React.Component<LoaderProps> {
  render(): JSX.Element {
    const { fullScreen, ...props } = this.props;
    if (fullScreen) {
      return (
        <FullScreen>
          <Loader icon="common/loader" {...props} />
        </FullScreen>
      );
    }
    return <Loader icon="common/loader" {...props} />;
  }
}
