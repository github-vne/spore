// tslint:disable: max-classes-per-file
import { observable } from 'mobx';
import { deserialize, serializable } from 'serializr';

export class UploadingFile {
  file: File;

  @observable
  uploadProgress: number;

  constructor(file: File) {
    this.file = file;
  }
}

export class AttachmentEntity {
  @serializable
  type: string;

  @serializable
  id: string;

  @serializable
  name: string;

  @serializable
  created: string;

  @serializable
  size: number;

  @serializable
  url: string;

  static fromServer(rawData: object): AttachmentEntity {
    if (!rawData) return;
    return deserialize(AttachmentEntity, rawData);
  }
}
