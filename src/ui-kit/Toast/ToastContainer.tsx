import { action } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import { Inject } from 'typescript-ioc';
import { RawSvg } from 'ui-kit';
import { CloseBtn, Header, Icon, Toast, ToastsList } from './components';
import { ToastService } from './ToastService';
import { ToastDefinition } from './types';

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
        {this.toastService.toasts.map(({ id, type, icon, title, content }: ToastDefinition) => (
          <Toast key={id} type={type}>
            <Header>
              <Icon icon={icon} />
              <h5>{title}</h5>
              <CloseBtn onClick={this.handleCloseClick.bind(this, id)}>
                <RawSvg icon="common/close" />
              </CloseBtn>
            </Header>
            {content && <p>{content}</p>}
          </Toast>
        ))}
      </ToastsList>
    );
  }
}
