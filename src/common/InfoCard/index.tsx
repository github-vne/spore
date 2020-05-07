import { Box } from 'common';
import React from 'react';
import { Image, Info, Percent, Status, StatusIcon, Title } from './style';
import { InfoCardProps } from './type';

export default ({ card }: { card: InfoCardProps }) => {
  return (
    <Box>
      <Info>
        <div>
          <Title>{card.title}</Title>
          <p>{card.value}</p>
        </div>
        <Image src={require('./example.png')} />
      </Info>
      <Status>
        <Percent positive={card.percent >= 0}>
          <StatusIcon icon="common/arrow" />
          <span>{card.percent}%</span>
        </Percent>
        <span>{card.lastUpdate}</span>
      </Status>
    </Box>
  );
};
