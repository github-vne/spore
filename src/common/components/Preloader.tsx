import { COLOR } from 'const';
import React from 'react';
import styled from 'styled-components';
import { RawSvg } from 'ui-kit';

const Preloader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(63, 94, 251, 1) 0%, rgba(47, 35, 38, 1) 100%);
`;

const Name = styled.span`
  font-size: 40px;
  text-shadow: 0 0 10px ${COLOR.WHITE};
`;

export default () => {
  return (
    <Preloader>
      <RawSvg icon="common/loader" width={130} />
      <Name>Spore</Name>
    </Preloader>
  );
};
