import { observer } from 'mobx-react';
import { Modal, ModalLayout } from 'modals/Modal';
import React from 'react';
import { Definition, Word, Wrapper } from './style';

@observer
export class WordDefinition extends Modal<{ word: string }> {
  render(): JSX.Element {
    const { word } = this.props.scope;
    return (
      <ModalLayout>
        <Wrapper>
          <Word>{word}</Word>
          <Definition>Описание слова</Definition>
        </Wrapper>
      </ModalLayout>
    );
  }
}
