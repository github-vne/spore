import React from 'react';
import { Inject } from 'typescript-ioc';
import { ModalService } from './modal.service';

export class Modal<TScope = {}> extends React.Component<{ scope?: TScope }> {
  static fullHeight: boolean = false;
  static fullWidth: boolean = false;
  static width: string;

  @Inject static modalService: ModalService;

  static openModal(modalScope?: any): void {
    this.modalService.setModal(this, modalScope);
  }

  static dropModal(): void {
    this.modalService.dropModal();
  }

  closeModal(): void {
    Modal.modalService.dropModal();
  }
}
