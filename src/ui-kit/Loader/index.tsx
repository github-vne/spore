import { SIZE } from 'const';
import React from 'react';
import { FullScreen, Loader } from './style';
import { LoaderProps } from './types';

export default ({ fullScreen, ...props }: LoaderProps) => {
  if (fullScreen) {
    return (
      <FullScreen>
        <Loader icon="common/loader" size={SIZE.EXTRA_LARGE} {...props} />
      </FullScreen>
    );
  }

  return <Loader icon="common/loader" {...props} />;
};
