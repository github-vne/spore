export interface WrapperProps {
  showModal?: boolean;
  backdropVisible?: boolean;
}

export interface ModalDefinition {
  width?: string;
  fullWidth?: boolean;
  fullHeight?: boolean;
  hasCloseBtn?: boolean;
  overlayClick?: boolean;
}

export interface Layout {
  header?: JSX.Element | string;
  footer?: JSX.Element;
}
