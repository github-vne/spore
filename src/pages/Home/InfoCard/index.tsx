import React from 'react';
import { Image, Info, InfoCard, InfoStatus, LastUpload, Status, StatusIcon, Title } from './style';

export default ({ value }: { value: number }) => {
  return (
    <InfoCard>
      <Info>
        <div>
          <Title>Toatal trafic</Title>
          <p>123,412</p>
        </div>
        <Image src="" />
      </Info>
      <InfoStatus positive={value >= 0}>
        <div>
          <StatusIcon icon="common/arrow" />
          <Status>{value}%</Status>
        </div>
        <LastUpload>2 ч. назад</LastUpload>
      </InfoStatus>
    </InfoCard>
  );
};
