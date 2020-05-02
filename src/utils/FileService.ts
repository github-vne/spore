import { EntityWithAttachType, MAX_FILE_SIZE } from 'const';
import { action, observable } from 'mobx';
import { AttachmentEntity, UploadingFile } from 'models';
import AttachmentTransport from 'transport/AttachmentTransport';
import { Inject, Singleton } from 'typescript-ioc';

@Singleton
export default class FileService {
  @Inject private transport: AttachmentTransport;

  @observable private attUploadHash: string;
  private link: HTMLAnchorElement = document.getElementById('download-link') as HTMLAnchorElement;
  private fileInput: HTMLInputElement = document.getElementById('file-picker') as HTMLInputElement;
  private fileChangeHandler: () => void;

  saveFile(name: string, blob: Blob): void {
    const blobUrl = window.URL.createObjectURL(blob);
    this.link.download = name;
    this.link.href = blobUrl;
    this.link.click();
    window.URL.revokeObjectURL(blobUrl);
  }

  openFileDialog(entity: EntityWithAttachType, hash: string): void {
    this.fileInput.value = null;
    this.fileInput.removeEventListener('change', this.fileChangeHandler);
    this.fileInput.click();
    this.fileChangeHandler = () => this.uploadFiles(this.fileInput.files, entity, hash);
    this.fileInput.addEventListener('change', this.fileChangeHandler);
  }

  @action.bound
  setUploadHash(hash: string): void {
    this.attUploadHash = hash;
  }

  @action.bound
  async uploadFiles(files: FileList, entity: EntityWithAttachType, hash: string): Promise<EntityWithAttachType> {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < files.length; i++) {
      const file = new UploadingFile(files[i]);
      if (entity?.uploadingAttachments?.length >= 10 || files[i].size > MAX_FILE_SIZE) {
        entity.errorAttachments.push(file);
      } else {
        entity.uploadingAttachments.push(file);
        this.transport
          .uploadFile(file)
          .then(file => hash === this.attUploadHash && this.fileUploadSuccess(file, entity))
          .catch(() => hash === this.attUploadHash && this.fileUploadFail(file, entity));
      }
    }

    return entity;
  }

  private fileUploadSuccess = (attachment: AttachmentEntity, entity: EntityWithAttachType): EntityWithAttachType => {
    const foundIndex = entity.uploadingAttachments.findIndex(
      item => item instanceof UploadingFile && item.file.name === attachment.name
    );
    entity.uploadingAttachments.splice(foundIndex, 1, attachment);
    return entity;
  };

  private fileUploadFail = (file: UploadingFile, entity: EntityWithAttachType): EntityWithAttachType => {
    entity.uploadingAttachments = entity.uploadingAttachments.filter(
      item => item instanceof UploadingFile && item.file.name !== file.file.name
    );
    entity.errorAttachments.push(file);
    return entity;
  };

  deleteLoadingAttachment = (id: string, entity: EntityWithAttachType): void => {
    entity.uploadingAttachments = entity.uploadingAttachments.filter(item =>
      item instanceof UploadingFile ? true : item.id !== id
    );
  };

  deleteErronAttachment = (index: number, entity: EntityWithAttachType): void => {
    entity.errorAttachments.splice(index, 1);
  };
}
