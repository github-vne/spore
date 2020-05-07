import { EntityWithAttachType } from 'const';
import { action, computed, observable } from 'mobx';
import { observer } from 'mobx-react';
import { AttachmentEntity } from 'models';
import React from 'react';
import { Inject } from 'typescript-ioc';
import { Button } from 'ui-kit';
import { FileService } from 'utils';
import uuidv4 from 'uuid/v4';
import AttachmentItem from './AttachmentItem';

@observer
export default class AttachmentUpload extends React.Component<{
  entity?: EntityWithAttachType;
}> {
  @Inject private fileService: FileService;
  private hash: string = uuidv4();
  @observable private entity: EntityWithAttachType = this.props.entity;

  componentDidMount(): void {
    this.fileService.setUploadHash(this.hash);
  }

  componentWillUnmount(): void {
    this.fileService.setUploadHash(undefined);
  }

  @action.bound
  attachFiles(files?: FileList): void {
    if (!files?.length) {
      this.fileService.openFileDialog(this.entity, this.hash);
    } else {
      this.fileService.uploadFiles(files, this.entity, this.hash);
    }
  }

  @computed private get attachmentsEl(): JSX.Element {
    if (!this.entity) return null;
    return (
      <div>
        {this.entity.uploadingAttachments.map((file, index) => (
          <AttachmentItem
            key={index}
            attachment={file}
            onDelete={
              file instanceof AttachmentEntity
                ? this.fileService.deleteLoadingAttachment.bind(this, file.id, this.entity)
                : undefined
            }
          />
        ))}
        {this.entity.errorAttachments.map((file, index) => (
          <AttachmentItem
            key={this.entity.attachments.length + index}
            attachment={file}
            error
            onDelete={this.fileService.deleteErronAttachment.bind(this, index, this.entity)}
          />
        ))}
      </div>
    );
  }

  render(): JSX.Element {
    return (
      <>
        <Button onClick={this.attachFiles} disabled={this.entity?.uploadingAttachments.length >= 10}>
          <span>Добавить изображение</span>
        </Button>
        {this.attachmentsEl}
      </>
    );
  }
}
