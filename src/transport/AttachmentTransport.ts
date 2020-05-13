import { AttachmentEntity, UploadingFile } from 'models';
import { Inject, Singleton } from 'typescript-ioc';
import { Api } from 'utils';

@Singleton
export default class AttachmentTransport {
  @Inject api: Api;

  private FILE_UPLOAD: string = 'photos/upload';

  uploadFile(file: UploadingFile): Promise<AttachmentEntity> {
    const formData = new FormData();
    formData.append('file', file.file);
    return this.api
      .post(this.FILE_UPLOAD, formData, {
        config: {
          onUploadProgress: (e: ProgressEvent) => (file.uploadProgress = Math.round((e.loaded * 100) / e.total))
        }
      })
      .then(AttachmentEntity.fromServer);
  }
}
