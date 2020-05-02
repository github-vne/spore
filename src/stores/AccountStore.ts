import AccountTransport from 'transport/AccountTransport';
import { Inject, Singleton } from 'typescript-ioc';

@Singleton
export default class AccountStore {
  @Inject private transport: AccountTransport;

  async signUp(login: string, password: string): Promise<void> {
    const res = await this.transport.signUp({
      login,
      password
    });
    console.info('New user!');
    console.info(res);
  }
}
