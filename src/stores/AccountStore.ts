import { observable } from 'mobx';
import { AuthEntity } from 'models';
import { UserStore } from 'stores';
import AccountTransport from 'transport/AccountTransport';
import { Inject, Singleton } from 'typescript-ioc';

@Singleton
export default class AccountStore {
  @Inject private transport: AccountTransport;
  @Inject private userStore: UserStore;
  @observable _token: string;

  async signUp(auth: AuthEntity): Promise<void> {
    const res = await this.transport.signUp(auth);
    console.info(res);
  }

  async signIn(auth: AuthEntity): Promise<void> {
    const res = await this.transport.signIn(auth);
    console.info(res);
    this._token = res.token;
    this.userStore.setUser(res.user);
  }
}
