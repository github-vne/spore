import { observer } from 'mobx-react';
import React from 'react';
import { Inject } from 'typescript-ioc';
import { ModalService } from './modal.service';
import { ModalCloseButton, ModalInner, ModalOverlay, ModalWrapper } from './style';

@observer
export class ModalContainer extends React.Component {
  @Inject private modalService: ModalService;

  render(): JSX.Element {
    const destr = this.modalService.activeModal || {};
    const { fullHeight, fullWidth, width, hasCloseBtn = true, overlayClick = true } = destr;
    const { showModal, backdropVisible } = this.modalService;

    const activeModalComponent = this.modalService.activeModal
      ? (React.createElement(this.modalService.activeModal as any, { scope: this.modalService.modalScope }) as any)
      : null;

    return (
      <ModalWrapper showModal={showModal} backdropVisible={backdropVisible}>
        <ModalOverlay
          showModal={showModal}
          backdropVisible={backdropVisible}
          onClick={overlayClick ? this.modalService.dropModal : undefined}
        />
        <ModalInner fullHeight={fullHeight} fullWidth={fullWidth} width={width}>
          {hasCloseBtn ? <ModalCloseButton onClick={this.modalService.dropModal} /> : null}
          {this.modalService.activeModal ? activeModalComponent : null}
        </ModalInner>
      </ModalWrapper>
    );
  }
}
