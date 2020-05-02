import { action, computed, observable } from 'mobx';
import { Singleton } from 'typescript-ioc';
import { ModalDefinition } from './types';

@Singleton
export class ModalService {
  @observable private _activeModal: ModalDefinition;
  @observable private _modalScope?: any;

  @observable private _showModal: boolean;
  @observable private _backdropVisible: boolean;

  @computed get backdropVisible(): boolean {
    return this._backdropVisible;
  }
  @computed get showModal(): boolean {
    return this._showModal;
  }
  @computed get activeModal(): ModalDefinition {
    return this._activeModal;
  }
  @computed get modalScope(): any {
    return this._modalScope;
  }
  @computed get hasModal(): boolean {
    return !!this.activeModal;
  }

  private fixScroll = (): void => {
    document.documentElement.style.overflow = this.hasModal ? 'hidden' : null;
  };

  @action.bound
  private onEscPress(e: Event): void {
    const keyCode = String((e as any).keyCode || (e as any).code || (e as any).keyIdentifier);
    const escKeyCode = '27';
    if (keyCode === escKeyCode) this.dropModal();
  }

  @action.bound
  setModal(ModalDefinition: ModalDefinition, modalScope?: any): void {
    this._modalScope = modalScope;
    this._activeModal = ModalDefinition;
    this._showModal = true;
    this._backdropVisible = true;
    this.fixScroll();
    window.addEventListener('keyup', this.onEscPress);
  }

  @action.bound
  dropModal(): void {
    this._showModal = false;

    setTimeout(() => {
      this._backdropVisible = false;
      this._activeModal = null;
      this._modalScope = null;
      this.fixScroll();
    }, 300);
    window.removeEventListener('keyup', this.onEscPress);
  }
}
