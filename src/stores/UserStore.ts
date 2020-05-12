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
      const res = await this.transport.retrieveUserList();
      return (this.usersHash = res.results);
    } catch (e) {
      return (this.usersHash = []);
    }
  });

  updateUserInfo(user: UserEntity): Promise<UserEntity> {
    return this.transport.updateUserInfo(user);
  }

  updatePhoto(photoId: number): Promise<UserEntity> {
    return this.transport.uploadPhoto(photoId);
  }
}
