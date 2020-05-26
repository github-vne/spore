import { observer } from 'mobx-react';
import { Modal, ModalLayout } from 'modals/Modal';
import React from 'react';
import { Definition, Word } from './style';

@observer
export class WordDefinition extends Modal<{ word: string }> {
  static hasCloseBtn: boolean = false;
  render(): JSX.Element {
    const { word } = this.props.scope;
    return (
      <ModalLayout>
        <Word>{word}</Word>
        <Definition>Описание слова</Definition>
      </ModalLayout>
    );
  }
}
