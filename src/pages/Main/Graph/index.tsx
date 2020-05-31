import { observer } from 'mobx-react';
import React from 'react';
import { Line } from 'react-chartjs-2';
import { chartExample1 } from './charts';
import { Wrapper } from './style';

@observer
export default class Graph extends React.Component {
  render(): JSX.Element {
    return (
      <Wrapper>
        <Line data={chartExample1.data} options={chartExample1.options} />
      </Wrapper>
    );
  }
}
