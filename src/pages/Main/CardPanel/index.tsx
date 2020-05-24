import { Box } from 'common';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import { Percent, Price, Status, StatusIcon, Title, Wrapper } from './style';
import { InfoCardProps } from './type';

@observer
export default class CardPanel extends React.Component {
  private companyNames: Array<string> = ['AAPL', 'YNDX', 'FB', 'MSFT', 'BTCUSD'];
  @observable private companyData: Array<InfoCardProps>;

  componentDidMount(): void {
    // this.initRequest();
  }

  // @action.bound
  // private async initRequest(): Promise<void> {
  //   // await fetch(`https://financialmodelingprep.com/api/v3/quote/${this.companyNames.join(',')}`)
  //   //   .then(res => res.json())
  //   //   .then(arr => (this.companyData = arr));
  // }

  render(): JSX.Element {
    return (
      <Wrapper>
        {!this.companyData
          ? this.companyNames.map((_, index) => (
              <Box key={index}>
                <span>Загрузка...</span>
              </Box>
            ))
          : this.companyData.map((company, index) => (
              <Box key={index}>
                <div>
                  <Title>{company.name}</Title>
                  <Price>{company.price}$</Price>
                </div>
                <Status>
                  <Percent positive={company.changesPercentage >= 0}>
                    <StatusIcon icon="common/arrow" />
                    <span>{company.changesPercentage}%</span>
                  </Percent>
                  <span>Только что</span>
                </Status>
              </Box>
            ))}
      </Wrapper>
    );
  }
}
