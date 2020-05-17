import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import dayOfYear from 'dayjs/plugin/dayOfYear';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import utc from 'dayjs/plugin/utc';
import { observer } from 'mobx-react';
import { ModalContainer } from 'modals/Modal';
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from 'routers/AppRouter';
import { UserStore } from 'stores';
import { Inject } from 'typescript-ioc';
import { ToastContainer } from 'ui-kit';

const rootEl = document.getElementById('root');
const modalRoot = document.getElementById('modal-root');
const toastRoot = document.getElementById('toast-root');

@observer
class App extends React.Component {
  @Inject private userStore: UserStore;

  constructor(props: any) {
    super(props);
    ReactDOM.render(<ModalContainer />, modalRoot);
    ReactDOM.render(<ToastContainer />, toastRoot);

    dayjs.locale('ru');
    dayjs.extend(dayOfYear);
    dayjs.extend(LocalizedFormat);
    dayjs.extend(utc);

    this.userStore.retrieveUser('1');
  }

  render(): JSX.Element {
    if (!this.userStore.user) return null;
    return <AppRouter />;
  }
}

ReactDOM.render(<App />, rootEl);
