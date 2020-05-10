import { action, computed, observable } from 'mobx';
import { observer } from 'mobx-react';
import { Modal, ModalLayout } from 'modals/Modal';
import { AttachmentEntity, PostEntity } from 'models';
import React from 'react';
import { PostStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { Button, Loader } from 'ui-kit';
import { FileService } from 'utils';
import uuidv4 from 'uuid/v4';
import { AddImage, Content, DemoImg, ImagePreview, Input, Textarea } from './style';

@observer
export class NewPost extends Modal {
  static width: string = '500px';

  @Inject private postStore: PostStore;
  @Inject private fileService: FileService;

  private hash: string = uuidv4();
  @observable private pending: boolean;
  @observable private tempPost: PostEntity = new PostEntity();

  componentDidMount(): void {
    this.fileService.setUploadHash(this.hash);
  }

  componentWillUnmount(): void {
    this.fileService.setUploadHash(undefined);
  }

  @action.bound
  private onChange(name: string, value: string): void {
    this.tempPost[name] = value;
  }

  @action.bound
  private async createPost(): Promise<void> {
    this.pending = true;
    try {
      const res = await this.postStore.createPost(this.tempPost);
      if (res) this.postStore.pushNewPost(res);
    } finally {
      this.pending = false;
      this.closeModal();
    }
  }

  @action.bound
  attachFiles(files?: FileList): void {
    if (!files?.length) {
      this.fileService.openFileDialog(this.tempPost, this.hash);
    } else {
      this.fileService.uploadFiles(files, this.tempPost, this.hash);
    }
  }

  @computed
  private get disabledBtn(): boolean {
    return !this.tempPost.text || !this.tempPost.title || !this.tempPost.uploadingAttachments.length;
  }

  private get headerEl(): JSX.Element {
    return (
      <>
        <p>Создать новый пост</p>
      </>
    );
  }

  private get footerEl(): JSX.Element {
    return (
      <>
        <Button onClick={this.createPost} disabled={this.disabledBtn} pending={this.pending}>
          Создать
        </Button>
      </>
    );
  }

  @computed private get attachmentsEl(): JSX.Element {
    if (!this.tempPost) return null;
    return (
      <>
        {this.tempPost.uploadingAttachments.reverse().map((file, index) => (
          <ImagePreview key={index}>
            {file instanceof AttachmentEntity ? (
              <>
                <DemoImg alt="demo" src={file.url} />
                <button
                  type="button"
                  onClick={
                    file instanceof AttachmentEntity
                      ? this.fileService.deleteLoadingAttachment.bind(this, file.id, this.tempPost)
                      : undefined
                  }
                >
                  Удалить фото
                </button>
              </>
            ) : (
              <Loader fullScreen inverseColor />
            )}
          </ImagePreview>
        ))}
      </>
    );
  }

  private get contentEl(): JSX.Element {
    return (
      <>
        <Input name="title" onChange={this.onChange} label="Заголовок" />
        <Textarea name="text" onChange={this.onChange} label="Текст" />
        <AddImage onClick={this.attachFiles}>
          <span>Добавить изображение</span>
        </AddImage>
        {this.attachmentsEl}
      </>
    );
  }

  render(): JSX.Element {
    return (
      <ModalLayout header={this.headerEl} footer={this.footerEl}>
        <Content>{this.contentEl}</Content>
      </ModalLayout>
    );
  }
}
