import { ModalContainer } from 'modals/Modal';
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from 'routers/AppRouter';
import { ToastContainer } from 'ui-kit';

const rootEl = document.getElementById('root');
const modalRoot = document.getElementById('modal-root');
const toastRoot = document.getElementById('toast-root');

class App extends React.Component {
  constructor(props: any) {
    super(props);
    ReactDOM.render(<ModalContainer />, modalRoot);
    ReactDOM.render(<ToastContainer />, toastRoot);
  }

  render(): JSX.Element {
    return <AppRouter />;
  }
}

ReactDOM.render(<App />, rootEl);
