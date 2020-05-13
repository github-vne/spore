// tslint:disable: max-classes-per-file
import { observable } from 'mobx';
import { deserialize, serializable } from 'serializr';

export class UploadingFile {
  @serializable
  id: number;

  file: File;

  @observable
  uploadProgress: number;

  constructor(file: File) {
    this.file = file;
  }
}

export class AttachmentEntity {
  @serializable
  id: number;

  @serializable
  name: string;

  @serializable
  url: string;

  static fromServer(rawData: object): AttachmentEntity {
    if (!rawData) return;
    return deserialize(AttachmentEntity, rawData);
  }
}
