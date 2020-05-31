import { action, computed, observable } from 'mobx';
import { observer } from 'mobx-react';
import { Modal, ModalLayout } from 'modals/Modal';
import { AttachmentEntity } from 'models';
import React from 'react';
import { UserStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { Button, Loader } from 'ui-kit';
import { FileService } from 'utils';
import { Content, DemoImg, Preview } from './style';

@observer
export class AddPhoto extends Modal {
  static width: string = '400px';

  @Inject private userStore: UserStore;
  @observable private fileService: FileService = new FileService();

  @action.bound
  openFileDialog(): void {
    this.fileService.openFileDialog();
  }

  @action.bound
  async savePhoto(): Promise<void> {
    try {
      this.userStore.updatePhoto(this.fileService.uploading.id);
      this.closeModal();
    } catch {
      console.error('ERR');
    }
  }

  @computed private get contentEl(): JSX.Element {
    const file = this.fileService.uploading;

    if (!file) {
      return (
        <Button onClick={this.openFileDialog}>
          <span>Выбрать изображение</span>
        </Button>
      );
    }

    if (this.fileService.error) return <h1>Ошибка загрузки изображение</h1>;

    if (file instanceof AttachmentEntity) {
      return (
        <>
          <DemoImg alt="demo" src={file.url} />
          <Button onClick={this.savePhoto}>
            <span>Сохранить</span>
          </Button>
        </>
      );
    }

    return <Loader fullScreen inverseColor />;
  }

  render(): JSX.Element {
    return (
      <ModalLayout>
        <Content>
          <Preview>{this.contentEl}</Preview>
        </Content>
      </ModalLayout>
    );
  }
}
