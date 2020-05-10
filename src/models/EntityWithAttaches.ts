import { computed, observable } from 'mobx';
import { AttachmentEntity, UploadingFile } from 'models';
import { alias, custom, serializable, SKIP } from 'serializr';
import BaseEntity from './BaseEntity';

export default class EntityWithAttaches extends BaseEntity {
  @observable
  @serializable(
    alias(
      'photo_id',
      custom(
        arr => (arr.length ? arr.map(item => item.id)[0] : SKIP),
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
}
