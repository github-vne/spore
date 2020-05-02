import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import React, { RefObject } from 'react';
import { Footer, Header, ModalContent } from './style';
import { Layout } from './types';

@observer
export class ModalLayout extends React.Component<Layout> {
  private contentRef: RefObject<HTMLDivElement> = React.createRef();
  @observable private scrollContent: boolean;

  @action.bound
  onContentScroll(): void {
    const contentRef = this.contentRef.current;
    this.scrollContent = !!contentRef.scrollTop;
  }

  render(): JSX.Element {
    const { header, children, footer } = this.props;
    return (
      <>
        <Header>{header}</Header>
        <ModalContent ref={this.contentRef} onScroll={this.onContentScroll} scrollContent={this.scrollContent}>
          {children}
        </ModalContent>
        {footer && <Footer>{footer}</Footer>}
      </>
    );
  }
}
