import { action, computed, observable } from 'mobx';
import { observer } from 'mobx-react';
import { Modal, ModalLayout } from 'modals/Modal';
import { AttachmentEntity, PostEntity } from 'models';
import React from 'react';
import { PostStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { Button, Loader } from 'ui-kit';
import { FileService } from 'utils';
import { AddImage, Content, DemoImg, ImagePreview, Input, Textarea } from './style';

@observer
export class NewPost extends Modal {
  static width: string = '500px';

  @Inject private postStore: PostStore;
  @Inject private fileService: FileService;

  @observable private pending: boolean;
  @observable private tempPost: PostEntity = new PostEntity();

  componentWillUnmount(): void {
    this.fileService.dropFile();
  }

  @action.bound
  private onChange(name: string, value: string): void {
    this.tempPost[name] = value;
  }

  @action.bound
  private async createPost(): Promise<void> {
    this.pending = true;
    this.tempPost.photoId = this.fileService.uploading.id;
    try {
      await this.postStore.createPost(this.tempPost);
    } finally {
      this.pending = false;
      this.closeModal();
    }
  }

  @action.bound
  private openFileDialog(): void {
    this.fileService.openFileDialog();
  }

  @computed private get disabledBtn(): boolean {
    return !this.tempPost.text || !this.tempPost.title || !this.fileService.uploading;
  }

  @computed private get attachmentsEl(): JSX.Element {
    const file = this.fileService.uploading;

    if (!file) return;

    return (
      <ImagePreview>
        {file instanceof AttachmentEntity ? (
          <>
            <DemoImg alt="demo" src={file.url} />
            <button type="button" onClick={this.fileService.deleteUploading}>
              Удалить фото
            </button>
          </>
        ) : (
          <Loader fullScreen inverseColor />
        )}
      </ImagePreview>
    );
  }

  private get contentEl(): JSX.Element {
    return (
      <>
        <Input name="title" onChange={this.onChange} label="Заголовок" />
        <Textarea name="text" onChange={this.onChange} label="Текст" />
        <AddImage onClick={this.openFileDialog}>
          <span>Добавить изображение</span>
        </AddImage>
        {this.attachmentsEl}
      </>
    );
  }

  render(): JSX.Element {
    return (
      <ModalLayout
        header="Создать новый пост"
        footer={
          <Button onClick={this.createPost} disabled={this.disabledBtn} pending={this.pending}>
            Создать
          </Button>
        }
      >
        <Content>{this.contentEl}</Content>
      </ModalLayout>
    );
  }
}
