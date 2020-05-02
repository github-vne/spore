import { promisedComputed, PromisedComputedValue } from 'computed-async-mobx';
import { observable } from 'mobx';
import { UserEntity } from 'models';
import UserTransport from 'transport/UserTransport';
import { Inject, Singleton } from 'typescript-ioc';

@Singleton
export default class UserStore {
  @Inject private transport: UserTransport;
  @observable private usersHash: Array<UserEntity>;

  userList: PromisedComputedValue<Array<UserEntity>> = promisedComputed([], async () => {
    if (this.usersHash) return this.usersHash;
    try {
      const arr = new Array(20);
      for (let i = 0; i < arr.length; i++) arr[i] = i;
      const res = await this.transport.retrieveUserList({ ids: arr.join(',') });
      return (this.usersHash = res.results);
    } catch (e) {
      return (this.usersHash = []);
    }
  });
}
