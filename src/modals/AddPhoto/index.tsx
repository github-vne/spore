import { action, computed, observable } from 'mobx';
import { observer } from 'mobx-react';
import { Modal, ModalLayout } from 'modals/Modal';
import { AttachmentEntity, PostEntity } from 'models';
import EntityWithAttaches from 'models/EntityWithAttaches';
import React, { Fragment } from 'react';
import { UserStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { Button, Loader } from 'ui-kit';
import { FileService } from 'utils';
import uuidv4 from 'uuid/v4';
import { Content, DemoImg, Preview } from './style';

@observer
export class AddPhoto extends Modal {
  static width: string = '400px';

  @Inject private fileService: FileService;
  @Inject private userStore: UserStore;

  private hash: string = uuidv4();
  @observable private attachment: EntityWithAttaches = new EntityWithAttaches();

  componentDidMount(): void {
    this.fileService.setUploadHash(this.hash);
  }

  componentWillUnmount(): void {
    this.fileService.setUploadHash(undefined);
  }

  @action.bound
  attachFiles(): void {
    this.fileService.openFileDialog(this.attachment, this.hash);
  }

  @action.bound
  async savePhoto(): Promise<void> {
    try {
      const res = this.userStore.updatePhoto(this.attachment.uploadingAttachments[0].id);
      console.info(res);
    } finally {
      console.info('red');
    }
  }

  @computed private get attachmentsEl(): JSX.Element {
    if (!this.attachment) return null;

    return (
      <>
        {this.attachment.uploadingAttachments.reverse().map((file, index) => (
          <Fragment key={index}>
            {file instanceof AttachmentEntity ? (
              <DemoImg alt="demo" src={file.url} />
            ) : (
              <Loader fullScreen inverseColor />
            )}
          </Fragment>
        ))}
      </>
    );
  }

  private get contentEl(): JSX.Element {
    return (
      <>
        {this.attachmentsEl}
        {this.attachment.uploadingAttachments.length ? (
          <Button onClick={this.savePhoto}>
            <span>Сохранить</span>
          </Button>
        ) : (
          <Button onClick={this.attachFiles}>
            <span>Выбрать изображение</span>
          </Button>
        )}
      </>
    );
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
