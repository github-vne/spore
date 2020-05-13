import { MAX_FILE_SIZE } from 'const';
import { action, observable } from 'mobx';
import { AttachmentEntity, UploadingFile } from 'models';
import AttachmentTransport from 'transport/AttachmentTransport';
import { Inject, Singleton } from 'typescript-ioc';

@Singleton
export default class FileService {
  @Inject private transport: AttachmentTransport;

  private fileInput: HTMLInputElement = document.getElementById('file-picker') as HTMLInputElement;
  private fileChangeHandler: () => void;

  @observable
  uploading: UploadingFile | AttachmentEntity;

  @observable
  error: UploadingFile;

  openFileDialog(): void {
    this.fileInput.value = null;
    this.fileInput.removeEventListener('change', this.fileChangeHandler);
    this.fileInput.click();
    this.fileChangeHandler = () => this.uploadFiles(this.fileInput.files);
    this.fileInput.addEventListener('change', this.fileChangeHandler);
  }

  @action.bound
  async uploadFiles(files: FileList): Promise<FileService> {
    const file = new UploadingFile(files[0]);
    if (files[0].size > MAX_FILE_SIZE) {
      this.error = file;
    } else {
      this.uploading = file;
      this.transport
        .uploadFile(file)
        .then(file => (this.uploading = file))
        .catch(_ => (this.error = file));
    }
    return this;
  }

  deleteUploading = (): void => (this.uploading = undefined);
  deleteError = (): void => (this.error = undefined);
}
