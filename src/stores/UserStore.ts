import { OAUTH } from 'const';
import { action, computed, observable } from 'mobx';
import { AuthEntity, UserEntity } from 'models';
import UserTransport from 'transport/UserTransport';
import { Inject, Singleton } from 'typescript-ioc';
import AuthService from 'utils/AuthService';

@Singleton
export default class UserStore {
  @Inject private transport: UserTransport;
  @Inject private authService: AuthService;

  @observable private _user: UserEntity;

  @computed get user(): UserEntity {
    return this._user;
  }

  @action.bound
  async authorize(): Promise<void> {
    try {
      this._user = await this.transport.getCurrentUser();
    } catch (err) {
      console.error(err);
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

  /* Авторизация */
  async signUp(auth: AuthEntity): Promise<void> {
    const res = await this.transport.signUp(auth);
  }

  async signIn(auth: AuthEntity): Promise<void> {
    const res = await this.transport.signIn(auth);
    this.authService.setToken(res.token);
    localStorage.setItem(OAUTH, res.token);
    this._user = res.user;
  }
}
