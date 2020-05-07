import { Progress } from 'common/components';
import { FormatIcon, FormatSizeUnits } from 'const';
import { action } from 'mobx';
import { observer } from 'mobx-react';
import { AttachmentEntity, UploadingFile } from 'models';
import React from 'react';
import { RawSvg } from 'ui-kit';
import { ClearBtn, Container, Content, Error, Link } from './style';

@observer
export default class AttachmentItem extends React.Component<{
  attachment: AttachmentEntity | UploadingFile;
  onDelete?: () => void;
  error?: boolean;
  className?: string;
}> {
  @action.bound
  private onDelete(e: React.MouseEvent): void {
    e.stopPropagation();
    this.props.onDelete();
  }

  render(): JSX.Element {
    const { onDelete, attachment, error, className } = this.props;
    const file = attachment instanceof AttachmentEntity ? attachment : attachment.file;

    return (
      <Container className={className}>
        <RawSvg icon={`files/${FormatIcon(file.type)}`} />
        {attachment instanceof UploadingFile && !error ? (
          <Progress value={attachment.uploadProgress} max={100} />
        ) : (
          <>
            <Content>
              <span>{file.name}</span>
              {error ? <Error>Ошибка</Error> : <p>{FormatSizeUnits(file.size)}</p>}
            </Content>
            {onDelete && (
              <ClearBtn onClick={this.onDelete} type="reset">
                <RawSvg icon="common/close" />
              </ClearBtn>
            )}
          </>
        )}
        <Link download={file.name} href={'href'} target="_blank" />
      </Container>
    );
  }
}
