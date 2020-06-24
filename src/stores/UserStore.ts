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
  dropStore(): void {
    this._user = undefined;
  }

  @action.bound
  async updatePhoto(photoId: number): Promise<void> {
    this._user = await this.transport.uploadPhoto(photoId);
  }

  @action.bound
  async updateUserInfo(user: UserEntity): Promise<void> {
    this._user = await this.transport.updateUserInfo(user);
  }

  /* Авторизация */
  async signUp(auth: AuthEntity): Promise<void> {
    await this.transport.signUp(auth);
  }

  @action.bound
  async authorize(): Promise<void> {
    this._user = await this.transport.getCurrentUser();
  }

  @action.bound
  async signIn(auth: AuthEntity): Promise<void> {
    const res = await this.transport.signIn(auth);
    this._user = res.user;
    this.authService.setToken(res.token);
  }
}
