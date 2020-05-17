import { promisedComputed, PromisedComputedValue } from 'computed-async-mobx';
import { action, computed, observable } from 'mobx';
import { UserEntity } from 'models';
import UserTransport from 'transport/UserTransport';
import { Inject, Singleton } from 'typescript-ioc';

@Singleton
export default class UserStore {
  @Inject private transport: UserTransport;
  @observable private usersHash: Array<UserEntity>;
  @observable private _user: UserEntity;

  userList: PromisedComputedValue<Array<UserEntity>> = promisedComputed([], async () => {
    if (this.usersHash) return this.usersHash;
    try {
      const res = await this.transport.retrieveUserList();
      return (this.usersHash = res.results);
    } catch (e) {
      return (this.usersHash = []);
    }
  });

  @computed get user(): UserEntity {
    return this._user;
  }

  async retrieveUser(id: string): Promise<void> {
    try {
      this._user = await this.transport.retrieveUser(id);
    } catch {
      console.info('e');
    }
  }

  @action.bound
  async updatePhoto(photoId: number): Promise<void> {
    try {
      this._user = await this.transport.uploadPhoto(photoId);
    } catch {
      console.info('e');
    }
  }

  updateUserInfo(user: UserEntity): Promise<UserEntity> {
    return this.transport.updateUserInfo(user);
  }

  setUser(user: UserEntity): void {
    this._user = user;
  }
}
