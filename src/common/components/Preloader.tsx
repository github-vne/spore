import { SIZE } from 'const';
import React from 'react';
import styled from 'styled-components';
import { Loader } from 'ui-kit';

const Preloader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(63, 94, 251);
  background: radial-gradient(circle, rgba(63, 94, 251, 1) 0%, rgba(47, 35, 38, 1) 100%);
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Name = styled.h4`
  font-size: 40px;
  text-align: center;
  text-shadow: 0 0 5px #ffffff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #49ff18, 0 0 30px #fff, 0 0 40px #fff,
    0 0 55px #fff, 0 0 75px #fff;
`;

export default () => {
  return (
    <Preloader>
      <Wrapper>
        <Loader size={SIZE.EXTRA_LARGE} />
        <Name>Spore</Name>
      </Wrapper>
    </Preloader>
  );
};
