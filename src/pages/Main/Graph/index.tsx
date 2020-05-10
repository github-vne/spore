import { chartExample1 } from 'const/charts';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Wrapper } from './style';

@observer
export default class Graph extends React.Component {
  @observable private graphData: Array<any>;
  @observable private labels: Array<string> = [];
  @observable private data: Array<any> = [];

  componentDidMount(): void {
    this.initRequest();
  }

  @action.bound
  private async initRequest(): Promise<void> {
    await fetch('https://financialmodelingprep.com/api/v3/historical-chart/1hour/ETHUSD')
      .then(res => res.json())
      .then(arr => {
        this.labels = arr.map(el => el.date);
        this.data = arr.map(el => el.open);
      });
  }

  render(): JSX.Element {
    return (
      <Wrapper>
        <Line
          data={{
            labels: this.labels,
            datasets: [
              {
                label: 'Value',
                fill: true,
                borderColor: '#1f8ef1',
                borderWidth: 2,
                borderDash: [],
                borderDashOffset: 0.0,
                pointBackgroundColor: '#1f8ef1',
                pointBorderColor: 'rgba(255,255,255,0)',
                pointHoverBackgroundColor: '#1f8ef1',
                pointBorderWidth: 20,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 15,
                pointRadius: 4,
                data: [...this.data]
              }
            ]
          }}
          options={chartExample1.options}
        />
      </Wrapper>
    );
  }
}
