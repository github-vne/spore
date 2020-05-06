import React from 'react';
import { Image, Info, InfoCard, InfoStatus, LastUpload, Status, StatusIcon, Title } from './style';
import { InfoCardProps } from './type';

export default ({ card }: { card: InfoCardProps }) => {
  return (
    <InfoCard>
      <Info>
        <div>
          <Title>{card.title}</Title>
          <p>{card.value}</p>
        </div>
        <Image src={require('./example.png')} />
      </Info>
      <InfoStatus positive={card.percent >= 0}>
        <div>
          <StatusIcon icon="common/arrow" />
          <Status>{card.percent}%</Status>
        </div>
        <LastUpload>{card.lastUpdate}</LastUpload>
      </InfoStatus>
    </InfoCard>
  );
};
