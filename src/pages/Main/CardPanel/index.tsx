import { Box } from 'common';
import { observer } from 'mobx-react';
import React from 'react';
import { Percent, Price, Status, StatusIcon, Title, Wrapper } from './style';
import { InfoCardProps } from './type';

@observer
export default class CardPanel extends React.Component {
  name: string;
  price: number;
  changesPercentage: number;
  private companies: Array<InfoCardProps> = [
    { name: 'Apple', price: 232.3, changesPercentage: 0.3 },
    { name: 'Facebook', price: 167.9, changesPercentage: 0.6 },
    { name: 'Google', price: 325.2, changesPercentage: -2.3 },
    { name: 'Yandex', price: 342, changesPercentage: 3 }
  ];

  render(): JSX.Element {
    return (
      <Wrapper>
        {this.companies.map((company, index) => (
          <Box key={index}>
            <div>
              <Title>{company.name}</Title>
              <Price>{company.price}$</Price>
            </div>
            <Status>
              <Percent positive={company.changesPercentage >= 0}>
                <StatusIcon icon="common/arrow" />
                <span>
                  {company.changesPercentage > 0 && '+'}
                  {company.changesPercentage}%
                </span>
              </Percent>
              <span>Только что</span>
            </Status>
          </Box>
        ))}
      </Wrapper>
    );
  }
}
