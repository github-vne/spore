import { computed, observable } from 'mobx';
import { AttachmentEntity, UploadingFile } from 'models';
import { alias, custom, serializable, SKIP } from 'serializr';
import BaseEntity from './BaseEntity';

export default class EntityWithAttaches extends BaseEntity {
  @observable
  @serializable(
    alias(
      'attachment_ids',
      custom(
        arr => (arr.length ? arr.map(item => item.id) : SKIP),
        _ => SKIP
      )
    )
  )
  uploadingAttachments: Array<UploadingFile | AttachmentEntity> = [];

  @observable
  errorAttachments: Array<UploadingFile> = [];

  @observable
  @serializable(
    custom(
      _ => SKIP,
      raw => AttachmentEntity.fromServer(raw)
    )
  )
  attachments: Array<AttachmentEntity> = [];

  @computed get hasPendingAttachment(): boolean {
    return this.uploadingAttachments.some(item => item instanceof UploadingFile);
  }
}
