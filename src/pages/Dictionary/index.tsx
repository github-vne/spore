import { Layout } from 'common';
import { action } from 'mobx';
import { observer } from 'mobx-react';
import { WordDefinition } from 'modals';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { PageType } from 'routers/MainRouter';
import { MainStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { Section, Title, Word } from './style';

@observer
export default class PageDictionary extends React.Component<RouteComponentProps> {
  @Inject private mainStore: MainStore;

  componentDidMount(): void {
    this.mainStore.changeCurrentPage(PageType.DICTIONARY);
  }

  @action.bound
  private openDefinition = (word: string): void => {
    WordDefinition.openModal({ word });
  };

  render(): JSX.Element {
    return (
      <Layout>
        <Title>Пример</Title>
        <Section>
          {'Пример разных слов которые будут использоваться в качестве словарей и определений этих слов в будущем'
            .split(' ')
            .map((word, index) => (
              <Word key={index} onClick={this.openDefinition.bind(this, word)}>
                {word}
              </Word>
            ))}
        </Section>
        <Title>Пример 2</Title>
        <Section>
          {'Пример разных слов которые будут использоваться в качестве словарей и определений этих слов в будущем'
            .split(' ')
            .map((word, index) => (
              <Word key={index} onClick={this.openDefinition.bind(this, word)}>
                {word}
              </Word>
            ))}
        </Section>
        <Title>Пример 3</Title>
        <Section>
          {'Пример разных слов которые будут использоваться в качестве словарей и определений этих слов в будущем'
            .split(' ')
            .map((word, index) => (
              <Word key={index} onClick={this.openDefinition.bind(this, word)}>
                {word}
              </Word>
            ))}
        </Section>
      </Layout>
    );
  }
}
