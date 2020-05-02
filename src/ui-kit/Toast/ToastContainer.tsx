import { action } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import { Inject } from 'typescript-ioc';
import { RawSvg } from 'ui-kit';
import { CloseBtn, Content, Header, Icon, Title, Toast, ToastsList } from './components';
import { ToastService } from './ToastService';
import { IToastDefinition } from './types';

@observer
export class ToastContainer extends React.Component {
  @Inject toastService: ToastService;

  @action.bound
  private handleCloseClick(id: string): void {
    this.toastService.dropToast(id);
  }

  render(): JSX.Element {
    return (
      <ToastsList>
        {this.toastService.toasts.map((toast: IToastDefinition) => (
          <Toast key={toast.id} removed={toast.removed}>
            <Header type={toast.type}>
              <Icon icon={toast.icon} />
              <Title>{toast.title}</Title>
              <CloseBtn onClick={this.handleCloseClick.bind(this, toast.id)}>
                <RawSvg icon="common/close" />
              </CloseBtn>
            </Header>
            {toast.content && <Content>{toast.content}</Content>}
          </Toast>
        ))}
      </ToastsList>
    );
  }
}
